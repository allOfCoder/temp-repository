const $root = document.querySelector('.root');

const todoMake = createDiv('todoMake');
const todoInput = document.createElement('input');
todoInput.className = 'todoInput';
todoInput.addEventListener('keyup', (e) => {
    if(e.keyCode==13) {submitTodo(e)}
});
const todoMakeBtn = document.createElement('button');
todoMakeBtn.className = 'todoMakeBtn';
todoMakeBtn.addEventListener("click", (e) => submitTodo(e));
todoMake.append(todoInput, todoMakeBtn);
$root.append(todoMake);
const todoSheet = createDiv('todoSheet');
$root.append(todoSheet.cloneNode(true));

function createDiv(nameOfClass) {
    let div = document.createElement('div');
    div.className = nameOfClass;
    return div.cloneNode(true);
}

function createTodoUnit(string) {
    let todoUnit = createDiv('todoUnit');
    let todoContent = createDiv('todoContent');
    let todoString = document.createElement('li');
    todoString.className = 'todoString';
    todoString.innerText = string;
    let prodTime = createDiv('prodTime');
    prodTime.innerText = new Date().toISOString().slice(0,10);
    let todoBtnBox = createDiv('todoBtnBox');
    let checkBtn = document.createElement('img');
    checkBtn.className = 'checkBtn';
    checkBtn.src = "https://www.citypng.com/public/uploads/preview/green-tick-mark-icon-transparent-background-31623253795bbpcwqil2c.png"
    let deleteTodo = document.createElement('img');
    deleteTodo.className = 'deleteTodo';
    deleteTodo.src = "data:image/png;base64,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"
    deleteTodo.addEventListener("click", (e) => {
        let array = JSON.parse(localStorage.getItem("todo"));
        let index;
        for(let i = 0; i <array.length; i++) {
            if (e.target.parentNode.parentNode.classList[i] == e.target.parentNode) {
                index = i;
            }
        }
        array.splice(index-1,1);
        localStorage.setItem("todo", JSON.stringify(array));
        syncTodo();
    });
    todoBtnBox.append(checkBtn, deleteTodo);
    todoContent.append(todoString, prodTime); 
    todoUnit.append(todoContent, todoBtnBox);
    return todoUnit;
}


function storeTodoObjecto(todoString, todoDate) {
    let object = {
        id: getTodoIndex(),
        content: todoString,
        date: todoDate,
    }
    return object;
}

function submitTodo(e){
    let input =  e.target.parentNode.childNodes[0]
    let string = input.value;
    $root.childNodes[1].append(createTodoUnit(string));
    let todoListArray = JSON.parse(localStorage.getItem('todo'));
    let date = new Date().toISOString().slice(0,10);
    todoListArray.push(storeTodoObjecto(input.value, date));
    localStorage.setItem('todo', JSON.stringify(todoListArray));
    input.value = '';
}

function getTodoIndex() {
    return JSON.parse(localStorage.getItem('todo')).length
}

function syncTodo() {
    let todoListArray = JSON.parse(localStorage.getItem('todo'));
    $root.childNodes[1].remove();
    $root.append(todoSheet);
    for (let i = 0; i < todoListArray.length ; i++) {
        $roNodes[1].append(createTodoUnit(todoListArray[i].content));
    }
}
if (!localStorage.getItem('todo')) {localStorage.setItem('todo', '[]')}
syncTodo();
