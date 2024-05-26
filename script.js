let input=document.getElementById("inputBox")
let buttons=document.querySelectorAll("button")

let str=""
let arr=Array.from(buttons);

arr.forEach(function (button){
    button.addEventListener("click", function(el){
        
        if (el.target.innerHTML=="="){
            str=eval(str)
            input.value=str
        }
        else if (el.target.innerHTML=="AC"){
            str=""
            input.value=str
        }
        else if (el.target.innerHTML=="DEL"){
            str=str.substring(0,(str.length-1))
            input.value=str
        }
        else{
            str+=el.target.innerHTML
            input.value=str
        }
    })
})