const whitePawnIcon = '<p><i class="fas fa-chess-pawn white-piece"></i></p>'
const whiteRookIcon = '<p><i class="fas fa-chess-rook white-piece"></i></p>'
const whiteKnightIcon = '<p><i class="fas fa-chess-knight white-piece"></i></p>'
const whiteBishopIcon = '<p><i class="fas fa-chess-bishop white-piece"></i></p>'
const whiteQueenIcon = '<p><i class="fas fa-chess-queen white-piece"></i></p>'
const whiteKingIcon = '<p><i class="fas fa-chess-king white-piece"></i></p>'

const blackPawnIcon = '<p><i class="fas fa-chess-pawn black-piece"></i></p>'
const blackRookIcon = '<p><i class="fas fa-chess-rook black-piece"></i></p>'
const blackKnightIcon = '<p><i class="fas fa-chess-knight black-piece"></i></p>'
const blackBishopIcon = '<p><i class="fas fa-chess-bishop black-piece"></i></p>'
const blackQueenIcon = '<p><i class="fas fa-chess-queen black-piece"></i></p>'
const blackKingIcon = '<p><i class="fas fa-chess-king black-piece"></i></p>'

let positions = [

  document.getElementById('a8'),
  document.getElementById('b8'),
  document.getElementById('c8'),
  document.getElementById('d8'),
  document.getElementById('e8'),
  document.getElementById('f8'),
  document.getElementById('g8'),
  document.getElementById('h8'),

  document.getElementById('a7'),
  document.getElementById('b7'),
  document.getElementById('c7'),
  document.getElementById('d7'),
  document.getElementById('e7'),
  document.getElementById('f7'),
  document.getElementById('g7'),
  document.getElementById('h7'),


  document.getElementById('a6'),
  document.getElementById('b6'),
  document.getElementById('c6'),
  document.getElementById('d6'),
  document.getElementById('e6'),
  document.getElementById('f6'),
  document.getElementById('g6'),
  document.getElementById('h6'),

  document.getElementById('a5'),
  document.getElementById('b5'),
  document.getElementById('c5'),
  document.getElementById('d5'),
  document.getElementById('e5'),
  document.getElementById('f5'),
  document.getElementById('g5'),
  document.getElementById('h5'),

  document.getElementById('a4'),
  document.getElementById('b4'),
  document.getElementById('c4'),
  document.getElementById('d4'),
  document.getElementById('e4'),
  document.getElementById('f4'),
  document.getElementById('g4'),
  document.getElementById('h4'),

  document.getElementById('a3'),
  document.getElementById('b3'),
  document.getElementById('c3'),
  document.getElementById('d3'),
  document.getElementById('e3'),
  document.getElementById('f3'),
  document.getElementById('g3'),
  document.getElementById('h3'),

  document.getElementById('a2'),
  document.getElementById('b2'),
  document.getElementById('c2'),
  document.getElementById('d2'),
  document.getElementById('e2'),
  document.getElementById('f2'),
  document.getElementById('g2'),
  document.getElementById('h2'),

  document.getElementById('a1'),
  document.getElementById('b1'),
  document.getElementById('c1'),
  document.getElementById('d1'),
  document.getElementById('e1'),
  document.getElementById('f1'),
  document.getElementById('g1'),
  document.getElementById('h1')

]

const startingNotation = ['R','N','B','K','Q','B','N','R','P','P','P','P','P','P','P','P','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','p','p','p','p','p','p','p','p','r','n','b','k','q','b','n','r']
let currentNotation = null



function startGame() {

  // RNBKQBNR
  // PPPPPPPP
  // ........
  // ........
  // ........
  // ........
  // pppppppp
  // rnbkqbnr
  
  let returnedNotation = writeNotation(startingNotation)

  for(let i = 0; i < positions.length; i++){
    positions[i].innerHTML = returnedNotation[i]
  }

}

function updateGame(id, number){
  
  if(!currentNotation){
    currentNotation = startingNotation
  }
  
  console.log("update", id, currentNotation[number])

  if(currentNotation[number] == 'p'){
    newPosition = Number(number) - 8
    if(currentNotation[newPosition] == '.'){
      currentNotation[number] = '.'
      currentNotation[newPosition] = 'p'

      drawGame(currentNotation)
    }
  }

  if(currentNotation[number] == 'P'){
    newPosition = Number(number) + 8
    if(currentNotation[newPosition] == '.'){
      currentNotation[number] = '.'
      currentNotation[newPosition] = 'P'

      drawGame(currentNotation)
    }
  }

  if(currentNotation[number] == 'n'){
    newPosition = Number(number) - 15
    if(currentNotation[newPosition] == '.'){
      currentNotation[number] = '.'
      currentNotation[newPosition] = 'n'

      drawGame(currentNotation)
    }
  }

  if(currentNotation[number] == 'N'){
    newPosition = Number(number) + 15
    if(currentNotation[newPosition] == '.'){
      currentNotation[number] = '.'
      currentNotation[newPosition] = 'N'

      drawGame(currentNotation)
    }
  }

}

function drawGame(currentNotation){
  let returnedNotation = writeNotation(currentNotation)
  for(let i = 0; i < positions.length; i++){
    positions[i].innerHTML = returnedNotation[i]
  }
}


function writeNotation(notation){
  let returnNotation = []
  for(let i = 0; i < notation.length; i++){
    if(notation[i] == 'p'){
      returnNotation[i] = whitePawnIcon
    }
    if(notation[i] == 'r'){
      returnNotation[i] = whiteRookIcon
    }
    if(notation[i] == 'n'){
      returnNotation[i] = whiteKnightIcon
    }
    if(notation[i] == 'b'){
      returnNotation[i] = whiteBishopIcon
    }
    if(notation[i] == 'q'){
      returnNotation[i] = whiteQueenIcon
    }
    if(notation[i] == 'k'){
      returnNotation[i] = whiteKingIcon
    }

    if(notation[i] == 'P'){
      returnNotation[i] = blackPawnIcon
    }
    if(notation[i] == 'R'){
      returnNotation[i] = blackRookIcon
    }
    if(notation[i] == 'N'){
      returnNotation[i] = blackKnightIcon
    }
    if(notation[i] == 'B'){
      returnNotation[i] = blackBishopIcon
    }
    if(notation[i] == 'Q'){
      returnNotation[i] = blackQueenIcon
    }
    if(notation[i] == 'K'){
      returnNotation[i] = blackKingIcon
    }

    if(notation[i] == '.'){
      returnNotation[i] = ''
    }
  }

  return returnNotation
}