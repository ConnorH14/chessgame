let boardPostitions = [
  'a8','b8','c8','d8','e8','f8','g8','h8',
  'a7','b7','c7','d7','e7','f7','g7','h7',
  'a6','b6','c6','d6','e6','f6','g6','h6',
  'a5','b5','c5','d5','e5','f5','g5','h5',
  'a4','b4','c4','d4','e4','f4','g4','h4',
  'a3','b3','c3','d3','e3','f3','g3','h3',
  'a2','b2','c2','d2','e2','f2','g2','h2',
  'a1','b1','c1','d1','e1','f1','g1','h1'
]

function drawBoard(){
  let template = ''
  let board = document.getElementById('chess-board')

  for(let i = 0; i < boardPostitions.length; i++) {
    if(i < 8 || i >= 16  && i < 24 || i >= 32 && i < 40 || i >= 48 && i < 56 ){
      if(i % 2 != 0){
        template += /*html*/`
        <div onclick="updateGame('${boardPostitions[i]}', '${i}')" class="chess-square dark-square" id="${boardPostitions[i]}"><p></p></div>
        `
      } else {
        template += /*html*/`
        <div onclick="updateGame('${boardPostitions[i]}', '${i}')" class="chess-square light-square" id="${boardPostitions[i]}"><p></p></div>
        `
      }
      
    } else {
      if(i % 2 == 0){
        template += /*html*/`
        <div onclick="updateGame('${boardPostitions[i]}', '${i}')" class="chess-square dark-square" id="${boardPostitions[i]}"><p></p></div>
        `
      } else {
        template += /*html*/`
        <div onclick="updateGame('${boardPostitions[i]}', '${i}')" class="chess-square light-square" id="${boardPostitions[i]}"><p></p></div>
        `
      }
    }
    
  }
  board.innerHTML = template
}

drawBoard()
