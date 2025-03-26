let todos = [];

const myModal = new bootstrap.Modal(document.getElementById("exampleModal"));

function modalClick() {
  myModal.toggle();
}

function modalSave() {
  const title = document.getElementById("formTitle").value;
  const desc = document.getElementById("fromDesc").value;
  fetch("http://localhost:3000/todos/new", {
    method: "POST",
    body: JSON.stringify({ title, desc }),
    headers:{
      'Content-Type': 'application/json',
    }
  })
    .then((result) => result.json())
    .then((data) => {
      todos.push(data);
      myModal.hide();
      render();
    });

  // const id =
  //   todos.length === 0
  //     ? todos.length
  //     : todos
  //         .map((todo) => todo.id)
  //         .sort()
  //         .reverse()[0] + 1;
  // const todo = {
  //   id,
  //   title,
  //   desc,
  //   createdAt: new Date(),
  //   isCompleted: true,
  // };
}

function updateAccordion() {
  document.getElementById("collapseOne").className =
    "accordion-collapse collapse show";
}

function todoDel(id) {
  const targetId = todos.findIndex((todo) => todo.id == id);
  console.log("targetId", targetId, id);
  todos.splice(targetId, 1);
  render();
}

function todoComplete(id) {
  const targetId = todos.findIndex((todo) => todo.id == id);
  const targetTodo = { ...todos[targetId] };
  targetTodo.isCompleted = !targetTodo.isCompleted;
  todos[targetId] = targetTodo;
  render();
}

function render() {
  document.getElementById("rowContainer").innerHTML = null;
  todos.forEach((todo) => {
    if (todo) {
      const template = document
        .getElementById("rowTemplate")
        .content.cloneNode(true);
      // populate the template
      // template.querySelector(".card-title").innerText = "My Card Title";
      // template.querySelector(".card-text").innerText = "lorem ipsum ble bla";
      template.getElementById("id").innerText = todo.id;
      template.getElementById("title").innerHTML = todo.isCompleted
        ? todo.title
        : `<del>${todo.title}</del>`;
      template.getElementById("desc").innerHTML = todo.isCompleted
        ? todo.desc
        : `<del>${todo.desc}</del>`;
      template.getElementById("createdAt").innerText = todo.createdAt;

      template.getElementById("todoComplete").checked = !todo.isCompleted;

      template.getElementById("todoDel").addEventListener("click", () => {
        todoDel(todo.id);
      });

      template.getElementById("todoComplete").addEventListener("click", (e) => {
        e.preventDefault();
        todoComplete(todo.id);
      });

      // include the populated template into the page
      document.getElementById("rowContainer").appendChild(template);
    }
  });
}

fetch("http://localhost:3000/todos")
  .then((result) => result.json())
  .then((data) => {
    todos = data;
    render();
  });
