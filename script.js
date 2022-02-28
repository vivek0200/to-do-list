window.onload=function(){
    let input=document.getElementById('input')
    let submit=document.getElementById('submit')
    let list=document.getElementById('list')
    let task=document.getElementById('task')

    submit.onclick=function(){
        let li=document.createElement('li')
        li.innerText=input.value
        let xbtn=document.createElement('button')
        xbtn.innerText='📌'
        xbtn.onclick=function(event){
            event.target.parentElement.remove()
        }
        li.appendChild(xbtn)
        list.appendChild(li)
    }
}