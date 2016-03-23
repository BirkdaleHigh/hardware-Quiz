// Open some communications back to the server. We use this later.
var socket = io()

// Hold where the question is to be displayed
var question = document.querySelector('#question')

// Hold where the answers are displayed
var answerA = document.querySelector('#answerA text')
var answerB = document.querySelector('#answerB text')
var answerC = document.querySelector('#answerC text')
var answerC = document.querySelector('#answerD text')

// listen for the answer to be clicked
document.querySelector('#a')
  .addEventListener('click', function(evt){
      console.log('chosen answer is: ' + this.id)
})
document.querySelector('#b')
  .addEventListener('click', function(evt){
      console.log('chosen answer is: ' + this.id)
})
document.querySelector('#c')
  .addEventListener('click', function(evt){
      console.log('chosen answer is: ' + this.id)
})
document.querySelector('#d')
  .addEventListener('click', function(evt){
      console.log('chosen answer is: ' + this.id)
})

var answer = function answer(id){
  //...  Referencing the raceClicks project. What might we want to emit here?
}

question.textContent = 'example.'
answerA.textContent = 'A'