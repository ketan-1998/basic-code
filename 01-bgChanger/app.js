let body = document.querySelector('body')
let div = document.querySelector('div')
let color = 'white'
// let allChild = div.children
// let arr = Array.from(allChild)
// arr.forEach((e)=>{
//     e.addEventListener('click',(e)=>{
//         let color = e.target.textContent
//         body.setAttribute('style',`background-color:${color}`)
//     })
// })

div.addEventListener('click',(e)=>{
    if(e.target.nodeName==='SPAN') color = e.target.textContent
    console.log(color)
    body.setAttribute('style',`background-color:${color}`)
})
