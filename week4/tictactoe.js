// document.getElementById(".board").ontouchend = touched;

function touched(){
    // addEventListener('touched', () => console.log("touched"));
    const board = document.getElementById(".board");
    const player1 = "X";
    const player2 = "O";
    document.getElementById("try").innerHTML = board;
}



