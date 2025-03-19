console.log("index");

function modalClick() {
  console.log("click");
  const myModal = new bootstrap.Modal(document.getElementById("exampleModal"));

  myModal.toggle();
}

function updateAccordion() {
  document.getElementById("collapseOne").className =
    "accordion-collapse collapse show";
}
