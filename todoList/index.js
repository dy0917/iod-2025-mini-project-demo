const todos = [
  // { id: 1, title: "Title1", desc: "desc", createdAt: "2025-3-19" },
  // { id: 2, title: "Title2", desc: "desc", createdAt: "2025-3-19" },
  // { id: 3, title: "Title3", desc: "desc", createdAt: "2025-3-19" },
];

const myModal = new bootstrap.Modal(document.getElementById("exampleModal"));

function modalClick() {
  myModal.toggle();
}

function modalSave() {
  const title = document.getElementById("formTitle").value;
  const desc = document.getElementById("fromDesc").value;
  const id =
    todos.length === 0
      ? todos.length
      : todos
          .map((todo) => todo.id)
          .sort()
          .reverse()[0] + 1;
  const todo = {
    id,
    title,
    desc,
    createdAt: new Date(),
    isCompleted: true,
  };
  todos.push(todo);
  myModal.hide();
  render();
}

function updateAccordion() {
  document.getElementById("collapseOne").className =
    "accordion-collapse collapse show";
}

function todoDel(id) {
  const targetId = todos.findIndex((todo) => todo.id == id);
  console.log("targetId", targetId, id);
  todos.splice(targetId, 1);
  console.log(todos);
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

render();
