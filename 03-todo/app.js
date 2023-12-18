console.log('hello world!')

let createBtn = document.querySelector('#createBtn')
let deleteBtn = document.querySelector('#deleteBtn')
let cancelBtn = document.querySelector('#cancelBtn')
let mainBox = document.querySelector('#listBox')

createBtn.addEventListener('click', createNewList);
function createNewList(e) {

    let listName = document.querySelector('#listName').value
    document.querySelector('#listName').value = ''

    let listTitle = document.createElement('h2')
    listTitle.textContent = listName

    let imgOne =document.createElement('img')
    let imgTwo =document.createElement('img')
    let brDev = document.createElement('div')
    brDev.className ='border'
    imgOne.src ='./icons/pen.png'
    imgTwo.src ="./icons/delete.png"
    imgTwo.addEventListener('click',deleteList)
    imgOne.className = "w-[20px]"
    imgTwo.className = "w-[20px]"
    let imgBox = document.createElement('div')
    imgBox.className = "flex gap-1"
    imgBox.appendChild(imgOne)
    imgBox.appendChild(brDev)
    imgBox.appendChild(imgTwo)

    let titleBox = document.createElement('div')
    titleBox.className = 'flex gap-16 bg-slate-700 px-3 py-1 rounded text-slate-200 font-mono self-start'
    titleBox.appendChild(listTitle)
    titleBox.appendChild(imgBox)

    let list = document.createElement('ul')
    list.className = "space-y-1"
    let listBox = document.createElement('div')
    listBox.className = "bg-slate-700 text-slate-200 font-mono px-4 mx-6 py-1"
    listBox.appendChild(list)

    let myList = document.createElement('div')
    myList.className = "bg-red-500 p-1 rounded flex flex-col gap-1"
    myList.appendChild(titleBox)
    myList.appendChild(listBox)
    myList.id = 'delList'
    mainBox.appendChild(myList)
}

deleteBtn.addEventListener('click', deleteAllList)
function deleteAllList(e) {
    Array.from(mainBox.children).forEach((e)=>{
        e.remove()
    })
}

function deleteList(e) {
    e.target.parentElement.parentElement.parentElement.remove()
    // console.log()
}
cancelBtn.addEventListener('click',()=>{
    document.querySelector('#listName').value= ''
})

