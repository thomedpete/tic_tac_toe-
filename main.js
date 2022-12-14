window.addEventListener('load',domClear)
var currentPlayerStatus = document.querySelector('.turn-status')
var gameBoxes = document.querySelectorAll('.box')
var player1Score = document.querySelector('.player-1-score')
var player2Score = document.querySelector('.player-2-score')
for(var i = 0; i < gameBoxes.length; i++) {
    addEventListener('click',checksLegalMove)
}
var player1 = new Player('The Power Rangers','Its The Rangers Move!','<img class="player-1-token" src="assets/player1 token.gif">')
var player2 = new Player('The Ninja Turtles','Its The Turtles Move!','<img class="player-2-token" src="assets/turtleToken.gif">')
var nuGame =  new Game(player1,player2)

function switchPlayerDom() {
if(nuGame.isWinner === null) {
  currentPlayerStatus.innerText = nuGame.currentPlayer.id
 }
}

function domClear() {
var gameBoxes = document.querySelectorAll('.box')
currentPlayerStatus.innerText = nuGame.currentPlayer.id
nuGame.isWinner = null
for(var i = 0; i < gameBoxes.length; i++) {
var gameIndex = gameBoxes[i]
gameIndex.innerText = ''
  }
}
function changeDomScore() {
  if(nuGame.isWinner === 'The Power Rangers') {
  player1Score.innerText = nuGame.currentPlayer.wins
} else if(nuGame.isWinner === 'The Ninja Turtles' ){
  player2Score.innerText = nuGame.currentPlayer.wins
  }
}
function checksLegalMove(event) {
  var  id = event.target.id
  if(nuGame.gameBoard[id] != '') {
    return
  }
  boxChoice(event)
}

function boxChoice(event) {
  var  id = event.target.id
  if(event.target.matches('.box')) {
    event.target.innerHTML += nuGame.currentPlayer.token
  }
  nuGame.selectBox(id)
if(nuGame.isWinner === nuGame.currentPlayer.name) {
   currentPlayerStatus.innerText = nuGame.currentPlayer.name + ' Win!'
   changeDomScore()
   setTimeout(domClear,3000)
   nuGame.gameBoard = ['','','','','','','','','']
 } else if(nuGame.isWinner === 'draw') {
   currentPlayerStatus.innerText = 'Draw....'
   setTimeout(domClear,3000)
   nuGame.gameBoard = ['','','','','','','','','']
 }
 nuGame.switchCurrentPlayer()
 switchPlayerDom()
}
