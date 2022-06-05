const form = document.querySelector(".form");

const input = document.querySelector("#input-todo");

const btn = document.querySelector("button");

const div = document.querySelector(".todo-list");

form.addEventListener("submit", (item) => {
  item.preventDefault();
});

btn.addEventListener("click", () => {
  if (input.value === "") alert("Add your task");
  else {
    const toDo = document.createElement("div");
    toDo.classList.add("todo-item");
    div.appendChild(toDo);
    toDo.style.width = "250px";
    toDo.style.fontSize = "25px";
    toDo.style.padding = "10px";
    toDo.style.margin = "10px";
    toDo.style.borderRadius = "8px";
    toDo.style.backgroundColor = "white";
    toDo.innerText = input.value;
    input.value = "";
    toDo.addEventListener("click", () => {
      toDo.remove();
    });
  }
});
