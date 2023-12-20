console.log('welcome')

let createNewTodoBtn = document.querySelector('#createNewTodo')
let cancelNewTodoBtn = document.querySelector('#cancel');
let deleteAllTodoBtn = document.querySelector('#deleteAllTodo');
let todoBox = document.querySelector('#todoBox');

// cancel 
cancelNewTodoBtn.addEventListener('click', cancelNewTodo)
function cancelNewTodo(e) {
    document.querySelector('#newTodoName').value = ''
}

// delete
deleteAllTodoBtn.addEventListener('click', deleteAllTodo)
function deleteAllTodo() {
    let allTodo = Array.from(todoBox.children)
    console.log(allTodo)
    allTodo.forEach((list) => list.remove())
}

// create
createNewTodoBtn.addEventListener('click', createNewTodo);
function createNewTodo(e) {
    let subTodoBox = document.createElement('div');
    let titileBox = document.createElement('div');
    let inputBox = document.createElement('div');
    let listBox = document.createElement('div');
    let countValue = { value: 1 }
    subTodoBox.className = 'bg-red-500 px-3 py-2 rounded flex gap-2 flex-col'
    titileBox.className = 'flex bg-slate-500 px-5 font-semibold font-mono text-[18px] text-slate-900 justify-between items-center capitalize gap-10 py-1 min-w-10';
    inputBox.className = 'bg-slate-500 px-2 py-1 rounded space-x-6 flex';
    listBox.className = 'bg-slate-500 px-5 py-1 font-semibold font-mono text-slate-900 text-[18px]';
    inputBox.classList.add('disable')
    let subTodoHeading = document.createElement('h2')
    subTodoHeading.textContent = document.querySelector('#newTodoName').value
    document.querySelector('#newTodoName').value = ''
    let imgBox = document.createElement('div');
    imgBox.className = 'flex gap-2'
    addToImgBox(imgBox, subTodoBox, inputBox)
    addToInputBox(inputBox, listBox, countValue)
    // addToListBox(listBox)
    titileBox.appendChild(subTodoHeading)
    titileBox.appendChild(imgBox)
    subTodoBox.appendChild(titileBox)
    subTodoBox.appendChild(inputBox)
    subTodoBox.appendChild(listBox);
    console.log(subTodoBox)
    todoBox.append(subTodoBox)
}

function addToImgBox(imgBox, titileBox, inputBox) {
    let imgOne = document.createElement('img')
    imgOne.className = 'w-[20px] active:scale-50'
    imgOne.src = './icons/plus.png'
    let imgTwo = document.createElement('img')
    imgTwo.className = 'w-[20px] active:scale-50'
    imgTwo.src = './icons/edit.png'
    let imgThree = document.createElement('img')
    imgThree.className = 'w-[20px] active:scale-50'
    imgThree.src = './icons/delete.png'
    let brOne = document.createElement('div')
    brOne.className = 'border'
    let brTwo = document.createElement('div')
    brTwo.className = 'border'
    imgThree.addEventListener('click', (e) => { titileBox.remove() })
    imgOne.addEventListener('click', (e) => { inputBox.classList.remove('disable') })
    imgBox.appendChild(imgOne)
    imgBox.appendChild(brTwo)
    imgBox.appendChild(imgTwo)
    imgBox.appendChild(brOne)
    imgBox.appendChild(imgThree)
}
function addToInputBox(inputBox, listBox, countValue) {
    let inputField = document.createElement('input')
    inputField.type = 'text'
    inputField.className = "border-none outline-none px-2 capitalize font-mono"
    let addBtn = document.createElement('button')
    addBtn.className = 'flex gap-1 items-center bg-slate-900 px-4 rounded text-slate-300 active:scale-75'
    let textBox = document.createElement('span')
    textBox.textContent = 'add'
    let imgBox = document.createElement('img')
    imgBox.src = './icons/pen.png'
    imgBox.className = 'w-[20px]'
    addBtn.appendChild(textBox)
    addBtn.appendChild(imgBox)
    inputBox.appendChild(inputField)
    inputBox.appendChild(addBtn)
    addBtn.addEventListener('click', () => {
        addToListBox(listBox, inputField, countValue)
        inputBox.classList.add('disable')
    })

}
function addToListBox(listBox, inputField, countValue) {
    console.log(countValue)
    let subTotoListBox = document.createElement('div')
    subTotoListBox.className = 'flex justify-between border-b p-1'
    let countBox = document.createElement('span')
    countBox.textContent = countValue.value
    countValue.value = countValue.value + 1
    let dataBox = document.createElement('div')
    dataBox.className = 'flex justify-between px-4 w-10/12'
    let data = document.createElement('span')
    data.textContent = inputField.value
    inputField.value = ''
    let btn = document.createElement('button')
    btn.className = 'active:scale-75'
    let img = document.createElement('img')
    img.src = './icons/delete.png'
    img.className = 'w-[20px]'
    btn.appendChild(img)
    btn.addEventListener('click', () => { subTotoListBox.remove() })
    dataBox.appendChild(data)
    dataBox.appendChild(btn)
    subTotoListBox.appendChild(countBox)
    subTotoListBox.appendChild(dataBox)
    listBox.appendChild(subTotoListBox)

}
