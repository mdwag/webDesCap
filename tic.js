let topRight = document.getElementById("top-right");
let topMid = document.querySelector("#top-mid");
let topLeft = document.querySelector("#top-left");
let midLeft = document.querySelector("#mid-left");
let midMid = document.querySelector("#mid-mid");
let midRight = document.querySelector("#mid-right");
let bottomLeft = document.querySelector("#bottom-left");
let bottomMid = document.querySelector("#bottom-mid");
let bottomRight = document.querySelector("#bottom-right");
let btnClear = document.querySelector("#clear-btn");
let gameBoss = "";

const board = document.querySelectorAll(".box");
for (box of board){
    box.addEventListener("click", function () { testBoy(this)});
}
let turn = "X";


btnClear.addEventListener("click", clearAll);

function testBoy(area) {
    if (area.innerHTML !== "X" && area.innerHTML !== "O") {
    area.innerHTML = turn;
        if (turn === "X") {
        turn = "O";
        } else if (turn === "O") {
         turn = "X";
        }
    } document.querySelector("#current-turn").innerHTML = "It's currently " +turn+ " 's turn.";
    testWin();
}

function clearAll() {
    for (box of board){
        box.innerHTML = "";
    }
    turn = "X";
    document.querySelector("#current-turn").innerHTML = "It's currently " +turn+ " 's turn.";


}

function testWin(){
    if (topRight.innerHTML === topMid.innerHTML && topMid.innerHTML === topLeft.innerHTML && topRight.innerHTML) {
        if (topRight.innerHTML === "X" || topRight.innerHTML === "O") {
        gameBoss = topMid.innerHTML;
        document.querySelector("#current-turn").innerHTML = gameBoss + " wins!";
        }
    }
    if (midRight.innerHTML === midMid.innerHTML && midMid.innerHTML === midLeft.innerHTML && midRight.innerHTML !== "") {
        if (midRight.innerHTML === "X" || midRight.innerHTML === "O") {
            gameBoss = midMid.innerHTML;
            document.querySelector("#current-turn").innerHTML = gameBoss + " wins!";
        }   
    }
    if (bottomRight.innerHTML === bottomMid.innerHTML && bottomMid.innerHTML === bottomLeft.innerHTML && bottomRight.innerHTML !== "") {
        if (bottomRight.innerHTML === "X" || bottomRight.innerHTML === "O") {
            gameBoss = bottomMid.innerHTML;
            document.querySelector("#current-turn").innerHTML = gameBoss + " wins!";
        }   
    }
    if (topRight.innerHTML === midRight.innerHTML && midRight.innerHTML === bottomRight.innerHTML && bottomRight.innerHTML !== "") {
        if (midRight.innerHTML === "X" || midRight.innerHTML === "O") {
            gameBoss = midRight.innerHTML;
            document.querySelector("#current-turn").innerHTML = gameBoss + " wins!";
        }   
    }
    if (topMid.innerHTML === midMid.innerHTML && midMid.innerHTML === bottomMid.innerHTML && bottomMid.innerHTML !== "") {
        if (midMid.innerHTML === "X" || midMid.innerHTML === "O") {
            gameBoss = midMid.innerHTML;
            document.querySelector("#current-turn").innerHTML = gameBoss + " wins!";
        }   
    }
    if (topMid.innerHTML === midMid.innerHTML && midMid.innerHTML === bottomMid.innerHTML && bottomMid.innerHTML !== "") {
        if (midMid.innerHTML === "X" || midMid.innerHTML === "O") {
            gameBoss = midMid.innerHTML;
            document.querySelector("#current-turn").innerHTML = gameBoss + " wins!";
        }   
    }
    if (topLeft.innerHTML === midLeft.innerHTML && midLeft.innerHTML === bottomLeft.innerHTML && bottomLeft.innerHTML !== "") {
        if (midLeft.innerHTML === "X" || midLeft.innerHTML === "O") {
            gameBoss = midLeft.innerHTML;
            document.querySelector("#current-turn").innerHTML = gameBoss + " wins!";
        }   
    }
    if (topLeft.innerHTML === midMid.innerHTML && midMid.innerHTML === bottomRight.innerHTML && bottomRight.innerHTML !== "") {
        if (midLeft.innerHTML === "X" || midLeft.innerHTML === "O") {
            gameBoss = midMid.innerHTML;
            document.querySelector("#current-turn").innerHTML = gameBoss + " wins!";
        }   
    }
    if (topRight.innerHTML === midMid.innerHTML && midMid.innerHTML === bottomLeft.innerHTML && bottomLeft.innerHTML !== "") {
        if (midMid.innerHTML === "X" || midMid.innerHTML === "O") {
            gameBoss = midMid.innerHTML;
            document.querySelector("#current-turn").innerHTML = gameBoss + " wins!";
        }   
    }
}
