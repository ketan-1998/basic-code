

console.log('hello world')

let create_list_btn = document.querySelector('#create-list')
let pop_box_text = document.querySelector('#pop-box-text')
let list_box = document.querySelector('#list-box')
let addBtn = document.querySelector('#add-btn')
let message = document.querySelector('#message')
let del_all_listBtn = document.querySelector('#del-all-list')


pop_box_text.textContent = 'add new list'

create_list_btn.addEventListener('click', create_list)
function create_list() {
    addBtn.addEventListener('click', create_new_list)
    pop_box_text.textContent = 'add new list'
}

del_all_listBtn.addEventListener('click', del_all_list)
function del_all_list(e) {
    let arr = Array.from(list_box.children)
    arr.forEach((e) => (e.remove()))
}

addBtn.addEventListener('click', create_new_list)
function create_new_list() {
    let main_box = document.createElement('div');
    let box = document.createElement('div');
    let list_name = document.createElement('h2');
    let img_box = document.createElement('div');
    let img_one = document.createElement('img');
    let img_two = document.createElement('img');
    let img_three = document.createElement('img');

    list_name.textContent = message.value
    message.value = '';
    img_one.src = './icons/plus.png'
    img_two.src = './icons/removed.png'
    img_three.src = './icons/pen.png'

    img_box.addEventListener('click', add_list_items);
    

    box.className = 'bg-red-500 flex justify-around py-1 rounded-sm';
    list_name.className = 'bg-slate-700 font-mono  capitalize px-2 rounded-sm text-slate-100 '
    img_box.className = 'flex gap-1';
    img_one.className = 'w-[20px]';
    img_two.className = 'w-[20px]';
    img_three.className = 'w-[20px]';
    main_box.className = 'bg-slate-500 p-2 gap-1 flex flex-col ';

    img_box.appendChild(img_one);
    img_box.appendChild(img_two);
    img_box.appendChild(img_three)
    box.appendChild(list_name)
    box.appendChild(img_box)
    main_box.appendChild(box)
    list_box.appendChild(main_box)
}



function add_list_items(e) {
    let main_box = e.target.parentElement.parentElement.parentElement
    pop_box_text.textContent = 'add list items'
    addBtn.removeEventListener('click', create_new_list)

    addBtn.addEventListener('click', add_items)
    function add_items() {
        let box = document.createElement('div')
        let img_box = document.createElement('div')
        let title_box = document.createElement('div')
        let checkbox = document.createElement('input')
        let title = document.createElement('p')
        let img_one = document.createElement('img')
        let img_two = document.createElement('img')

        img_one.src = './icons/edit.png'
        img_two.src = './icons/delete.png'
        checkbox.type = 'checkbox'
        title.textContent = message.value

        img_one.className = 'w-[20px]'
        img_two.className = 'w-[20px]'
        img_box.className = 'flex gap-2'
        title_box.className = 'flex gap-2'
        box.className = 'flex bg-slate-700 text-slate-200 font-mono px-3 py-1 justify-between'

        title_box.appendChild(checkbox)
        title_box.appendChild(title)
        box.appendChild(title_box)
        img_box.appendChild(img_one)
        img_box.appendChild(img_two)
        box.appendChild(img_box)
        main_box.appendChild(box)
        message.value = ''
        addBtn.removeEventListener('click', add_items)
        pop_box_text.textContent = message.value
    }
}



