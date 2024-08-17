const liBox = document.querySelector('.liBox');
const inpt = document.querySelector('input');
let index = 1;

const addTodo = () => {

    const newli = document.createElement('li');
    newli.setAttribute("id", 'todo-' + index);

    if (inpt.value === '') {

        return

    } else {
        newli.innerHTML = `
        ${inpt.value} <span>
            <button id="editBtn" onclick="editTodo(${index})">Edit</button>
            <button id="deleteBtn" onclick="deleteTodo(${index})">Delete</button>
        </span>
        `;
        liBox.appendChild(newli);
    }

    index++;

    inpt.value = '';
    console.log('add');
}

const editTodo = (index) => {
    const li = document.querySelector(`#todo-${index}`);
    const currentText = li.childNodes[0].textContent.trim();
    const newText = prompt("Edit your todo:", currentText);

    if (newText !== null && newText !== '') {
        li.childNodes[0].textContent = newText;
    }
}

const deleteTodo = (index) => {

    const li = document.querySelector(`#todo-${index}`);


    if (li) {

        li.parentNode.removeChild(li)
    }

}
