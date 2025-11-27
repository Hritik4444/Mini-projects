let card = document.querySelector('#card')
let btn = document.querySelector('button')
let istatus= document.querySelector('h3')
 let stat=0
 
btn.addEventListener("click",function(){
    if(stat==0){
    istatus.innerHTML="Friend"
    istatus.style.color = "green"
    stat=1
    btn.innerHTML= "Remove"
    }
    else{
        istatus.innerHTML="Stranger"
        istatus.style.color="red"
        stat=0
        btn.innerHTML= "Add Friend"
    }
})