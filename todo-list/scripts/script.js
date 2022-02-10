document.addEventListener("DOMContentLoaded", () => {
  let items = [];

  const listItemsContainer = document.getElementById("listItemsContainer");
  const createBtn = document.getElementById("createBtn");

  const renderToDoList = () => {
    listItemsContainer.innerHTML = null;

    if (items.length === 0) {
      listItemsContainer.innerText = "No items in the list";
      return;
    }

    for (let i = 0; i < items.length; i++) {
      const listItem = document.createElement("div");
      const listItemText = document.createElement("span");
      const listItemEditBtn = document.createElement("button");
      const listItemDeleteBtn = document.createElement("button");

      listItemText.innerText = items[i];
      listItemEditBtn.innerText = "Edit";
      listItemDeleteBtn.innerText = "Delete";
      listItem.setAttribute("class", "list-item");
      listItemText.setAttribute("class", "list-item-text");
      listItemEditBtn.setAttribute("class", "list-item-edit-btn");
      listItemDeleteBtn.setAttribute("class", "list-item-delete-btn");
      listItemEditBtn.addEventListener("click", () => {
        const value = prompt("Edit TODO description", items[i]);

        if (value) {
          items = items.map((item, index) => {
            if (index === i) {
              return value;
            }

            return item;
          });

          renderToDoList();
        }
      });
      listItemDeleteBtn.addEventListener("click", () => {
        items = items.filter((item, index) => index !== i);

        renderToDoList();
      });

      listItem.appendChild(listItemText);
      listItem.appendChild(listItemEditBtn);
      listItem.appendChild(listItemDeleteBtn);

      listItemsContainer.appendChild(listItem);
    }
  }

  createBtn.addEventListener("click", () => {
    const value = prompt("Enter TODO description", "");

    if (value) {
      items.push(value);

      renderToDoList();
    }
  });

  renderToDoList();
});