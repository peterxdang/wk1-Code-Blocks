$(document).ready(onReady)

//create a secret function that when clicked on the header, it pops up an alert, followed by deleting the class
//create button that creates div with color red, blue, orange, purple
function onReady () {
console.log('hello world')
$("#blue").on('click', function (){
    console.log('turn blue')
    turnBlue();
})
$("#red").on('click', function (){
    console.log('turn blue')
    turnRed();
})
$("#orange").on('click', function (){
    console.log('turn blue')
    turnOrange();
})
$("#purple").on('click', function (){
    console.log('turn blue')
    turnPurple();
})
}

function turnBlue () {
    $("#target").append("<span id = blues></span>")
}
function turnRed () {
    $("#target").append("<span id = reds></span>")
}
function turnOrange () {
    $("#target").append("<span id = oranges></span>")
}
function turnPurple () {
    $("#target").append("<span id = purples></span>")
}

//onclick function w. append