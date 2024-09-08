var GiocCor = 'X';
var board = ['', '', '', '', '', '', '', '', ''];
function makeMove(cellaI) {
    if (board[cellaI] === '') {
        board[cellaI] = GiocCor;
        document.getElementById('cell-' + cellaI).innerHTML = GiocCor;
        if (checkWin()) {
            document.getElementById('message').innerText = GiocCor + ' ha vinto';
        } else if (isDraw()) {
            document.getElementById('message').innerText = 'Pareggio';
        } else {
            GiocCor = GiocCor === 'X' ? 'O' : 'X';
        }
    }
}
function checkWin() {
    var possVit = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  
        [0, 4, 8], [2, 4, 6]             
    ];
    for (var i = 0; i < possVit.length; i++) {
        var pattern = possVit[i];
        if (board[pattern[0]] === GiocCor &&
            board[pattern[1]] === GiocCor &&
            board[pattern[2]] === GiocCor) {
            return true;
        }
    }
    return false;
}
function isDraw() {
    for (var i = 0; i < board.length; i++) {
        if (board[i] === '') {
            return false;
        }
    }
    return true;
}
function resets() {
    GiocCor = 'X';
    board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
    for (var i = 0; i < 9; i++) {
        document.getElementById('cell-' + i).innerHTML = '';
    }
    document.getElementById('message').innerText = 'Inizia il gioco!';
}