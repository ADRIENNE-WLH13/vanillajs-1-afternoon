// console.log('Adrienne')// Make sure this is syncing

// const board = [];

// function play(clickedId) {
 
    // const playerSpan = document.getElementById('player');
    // const clickedElement = document.getElementById(clickedId);

    // if(playerSpan.innerText === 'X') {
    //     playerSpan.innerText = 'O';
    //     clickedElement.innerText = 'X';
    //     board[clickedId]= 'X'
    // } else

function play(clickedId){
    const player = document.getElementById('player')
    if(player.innerText === 'X'){
        player.innerText = 'O'
    }
if(player.innerText === 'O'){
player.innerText = 'X'
}
}


