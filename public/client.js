// Open some communications back to the server. We use this later.
var socket = io()

// Hold where the question is to be displayed
var question = document.querySelector('#question')

// Hold where the answers are displayed
var answerA = document.querySelector('#a')
var answerB = document.querySelector('#b')
var answerC = document.querySelector('#c')
var answerD = document.querySelector('#d')

// listen for the answer to be clicked
answerA.addEventListener('click', function(evt){
      console.log('chosen answer is: ' + this.id)
})
answerB.addEventListener('click', function(evt){
      console.log('chosen answer is: ' + this.id)
})
answerC.addEventListener('click', function(evt){
      console.log('chosen answer is: ' + this.id)
})
//.. We're missing something, can you work out what?

var answer = function answer(id){
  //...  Reference the raceClicks project.
  // What might we want to emit here?
}

question.textContent = 'example.'

answerA.textContent = 'A'
