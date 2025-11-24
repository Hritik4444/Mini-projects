var a=document.querySelector("#box");
var b= document.querySelector("#btn");
  
 
b.addEventListener('click',function(){

    var x = Math.floor(Math.random()*205)
    var y = Math.floor(Math.random()*205)
    var z = Math.floor(Math.random()*205)

    a.style.backgroundColor = `rgb(${x},${y},${z})`;
})