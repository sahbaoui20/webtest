function addItem() {
    let itemInput = document.getElementById("itemInput");
    let itemList = document.getElementById("itemList");
    let removeButton = document.getElementById("removeButton");
    let message = document.getElementById("message");
    let items = itemList.getElementsByTagName("li");
    let inputValue = itemInput.value.trim();
    let li = document.createElement("li");
    let checkbox = document.createElement("input");


    message.textContent = "";
    if (inputValue === "") {
        message.textContent = "Veuillez entrer un élément.";
        message.style.color = "red";
        return;
    }


    for (let item of items) {
        if (item.textContent.trim() === inputValue) {
            message.textContent = "L'élément existe déjà dans la liste.";
            message.style.color = "red";
            return;
        }
    }

   
    checkbox.type = "checkbox";

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(inputValue));
    itemList.appendChild(li);
    itemInput.value = "";

    removeButton.style.display = "inline-block";

    message.textContent = `L'élément "${inputValue}" a été ajouté avec succès !`;
    message.style.color = "green";
}

function removeSelected() {
    let itemList = document.getElementById("itemList");
    let items = itemList.getElementsByTagName("li");
    let removeButton = document.getElementById("removeButton");
    let message = document.getElementById("message");

    let removed = false;

    for (let i = items.length - 1; i >= 0; i--) {
        let checkbox = items[i].getElementsByTagName("input")[0];
        if (checkbox.checked) {
            itemList.removeChild(items[i]);
            removed = true;
        }
    }

    if (itemList.children.length === 0) {
        removeButton.style.display = "none";
    }

    if (removed) {
    message.textContent = "Les éléments sélectionnés ont été supprimés.";
    message.style.color = "green";
} else {
    message.textContent = "Aucun élément sélectionné.";
    message.style.color = "red";
}
    
}
