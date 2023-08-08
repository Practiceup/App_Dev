console.log("Type your name")

let myText = document.querySelector("#userName p:nth-child(2)")
myText.style.color = 'red'

document.querySelector(".name1").style.backgroundColor = 'magenta'

// --querySelectorAll--
let myName = document.querySelectorAll("#userName p")

for (i = 0; i < myName.length; i++) {
    myName[i].style.color = "orange"
    // Change the font size of all odd (even index is an odd position)
    if (i % 2 === 0) {
        myName[i].style.fontSize = "3em"
    }
}

// ---innerHTML---
let myDiv = document.querySelectorAll("p")[1] // <-- select paragraph at index 1
myDiv.innerHTML = "New text content using <em><b>innerHTML</b></em>"

// --classList.add()--
document.querySelector("h1").classList.add("subtitle")

// --parent/sibling/child--
let listItem = document.querySelector("li:nth-child(2)")

// --Creating elements and text nodes--

// step 1: create an element
let myPara = document.createElement("p")

// step 2: give it content
let mySentence = document.createTextNode("This is the text of the new paragraph")

// step 3: append the text node into the new element
myPara.appendChild(mySentence) //<-append child mean it'll inside the para element
myPara.classList.add("subtitle")

//  step 3b: append new element with text node to the document
document.querySelector("div").appendChild(myPara)

// --REMOVE ELEMENT--
let myItem = document.querySelector("ul")
myItem.removeChild(myItem.children[2])

// --EVENTS--
let btn = document.querySelector(".btn2")
btn.onclick = function () { alert('Hi There!') }

//  -- example - Guess a NUmber -- 
let randomNum = function () {
    let radNum = Math.ceil(Math.random() * 9)
    return radNum
}

let guessNumDiv = document.querySelector(".guessNumber")
let btnGuess = document.querySelector(".btnGuessNum")

btnGuess.addEventListener('click', function () {
    guessNumDiv.innerHTML = randomNum()
})

// --mouse events --
let btnMouseEvent = document.querySelector("#btnMouseEvent")
let mouseoutDisplay = document.querySelector(".mouseoutDisplay")
let dblclickDisplay = document.querySelector(".dblclickDisplay")
let mouseoutCounter = 0

btnMouseEvent.addEventListener('mouseout', function () {
    mouseoutCounter++
    mouseoutDisplay.innerHTML = mouseoutCounter
})

btnMouseEvent.addEventListener('dblclick', function () {
    dblclickDisplay.innerHTML += "dblclick"
})

// --Window Event --
let topIcon = document.querySelector(".top")
window.addEventListener('scroll', function () {
    let yPosition = this.scrollY
    if (yPosition > 100) {
        topIcon.style.display = "block"
    } else {
        topIcon.style.display = "none"
    }
})
