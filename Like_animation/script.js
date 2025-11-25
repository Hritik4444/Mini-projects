let card= document.querySelector('#card')
let box= document.querySelector('#box')
let i = document.querySelector('i')

card.addEventListener('dblclick',function(){
    console.log("hello")
    i.style.opacity=1
     setTimeout(function(){
     i.style.transform= 'translate(-50%,-220%) rotate(60deg)'
     },800)

     setTimeout(function(){
        i.style.opacity=0
       i.style.transform='translate(-50%,-50%) rotate(0)'
     },1200)

})