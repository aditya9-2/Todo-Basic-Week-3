const liBox = document.querySelector('.liBox');
const inpt = document.querySelector('input');
let index = 1;

const addTodo = () => {

    const newli = document.createElement('li');
    newli.setAttribute("id", 'todo-' + index);

    if (inpt.value === '') {

        return

    } else {
        newli.innerHTML = `${inpt.value} <span><button id="deleteBtn" onclick="deleteTodo(${index})">Delete</button></span>`;
        liBox.appendChild(newli);
    }

    index++;

    inpt.value = '';
    console.log('add');
}

const deleteTodo = (index) => {

    const li = document.querySelector(`#todo-${index}`);


    if (li) {

        li.parentNode.removeChild(li)
    }

}
