let menuOne = document.getElementById("menu1")
let menuTwo = document.getElementById("menu2")
let menuThree = document.getElementById("menu3")
function m1(){
    document.getElementById("display").innerHTML = document.getElementById("m1").innerHTML
    menuOne.classList.remove("removebackground")
    menuOne.classList.add("addbackground")
    menuTwo.classList.add("removebackground")
    menuThree.classList.add("removebackground")
}
function m2(){
    document.getElementById("display").innerHTML = document.getElementById("m2").innerHTML
    menuOne.classList.add("removebackground")
    menuTwo.classList.remove("removebackground")
    menuTwo.classList.add("addbackground")
    menuThree.classList.add("removebackground")
}
function m3(){
    document.getElementById("display").innerHTML = document.getElementById("m3").innerHTML
    menuOne.classList.add("removebackground")
    menuTwo.classList.add("removebackground")
    menuThree.classList.add("addbackground")
    menuThree.classList.remove("removebackground")
}


