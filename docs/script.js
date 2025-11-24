

let main = document.querySelector('main')
let btn = document.querySelector('#btn')

let arr = ["The only way to do great work is to love what you do.",

"Be yourself; everyone else is already taken.",

"The future belongs to those who believe in the beauty of their dreams.",

"Strive not to be a success, but rather to be of value.",

"The best time to plant a tree was 20 years ago. The second best time is now.",

"Our greatest glory is not in never falling, but in rising every time we fall.",

"In the middle of difficulty lies opportunity.",

"It is never too late to be what you might have been.",

"Don't count the days, make the days count.",

"Happiness is not something readymade. It comes from your own actions."]
 
 
btn.addEventListener('click',function(){

    let h1 = document.createElement('h1')
    
   var a  = Math.floor(Math.random()*arr.length)

var x = Math.random()*80
 var y = Math.random()*90
 


    h1.innerHTML = arr[a],
    h1.style.position='absolute'
    h1.style.left= x+'%'
    h1.style.top= y+'%'

    h1.style.scale= 0.95
    
      


    main.appendChild(h1)

})

