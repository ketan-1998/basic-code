
let item_list = document.querySelector('#list');
let addBtn = document.querySelector('#addBtn');
let deleteBtn = document.querySelector('#deleteBtn');
let message = document.querySelector('#message');
let list_heading = document.querySelector('p')

addBtn.addEventListener('click', add_items)
deleteBtn.addEventListener('click', delete_items)

function delete_items(e) {
    let all_items = item_list.children
    Array.from(all_items).forEach((e) => {
        e.remove()
    })
}

function add_items(e) {
    let list_item = document.createElement('li');
    let removeBtn = document.createElement('img');
    let updateBtn = document.createElement('img');
    let item = document.createElement('p');

    removeBtn.src = './icon/removed.png';
    updateBtn.src = './icon/pen.png';
    removeBtn.className = 'w-7'
    updateBtn.className = 'w-7'
    removeBtn.addEventListener('click', reomve_list_items)
    updateBtn.addEventListener('click', update_list_items)

    list_item.className = "flex justify-around py-2"
    item.className = "bg-slate-900 w-10/12 text-[15px] text-slate-200 py-1 rounded-sm px-1 font-mono "

    let item_message = document.createTextNode(message.value)
    item.appendChild(item_message);
    list_item.appendChild(item);
    list_item.appendChild(removeBtn);
    list_item.appendChild(updateBtn);
    message.value = ""
    item_list.appendChild(list_item);

}

function reomve_list_items(e) {
    if (e.target.parentElement.nodeName == "LI") {
        e.target.parentElement.remove()
    }
}

function update_list_items(e) {
    if (e.target.parentElement.nodeName == "LI") {
        let list_item = e.target.parentElement.querySelector('p')
        list_heading.textContent = 'update_list'
        list_heading.className = "text-slate-200 bg-emerald-900 m-1 p-1 rounded-md  self-center px-8  font-semibold font-mono text-[15px] capitalize"
        message.className = "border-none outline-none bg-emerald-900 w-10/12 text-[20px] text-slate-200 py-1 rounded-sm px-1 font-mono "
        addBtn.removeEventListener('click', add_items)
        addBtn.addEventListener('click', update_list)
        function update_list(e){
            list_item.textContent = message.value
            list_heading.className = "text-slate-200 bg-slate-900 m-1 p-1 rounded-md  self-center px-8  font-semibold font-mono text-[15px] capitalize"
            message.className = "border- outline-none bg-slate-900 w-10/12 text-[20px] text-slate-200 py-1 rounded-sm px-1 font-mono "
            list_heading.textContent = 'enter list itmes'
            message.value = ''
            addBtn.addEventListener('click', add_items)
            addBtn.removeEventListener('click', update_list)
        }
    }
}

