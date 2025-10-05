let message = document.querySelector("#msg")
let boxes = document.querySelectorAll(".box")
let resetButton = document.querySelector("#reset-btn")

let winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let turn_O = true;

let checkWinner = () => {
    for (pattern of winningPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
                message.innerText = `${pos1} is the winner!!`;
                boxes.forEach((box) => {
                    box.disabled = true;
                })
                return true;
            }
        }
    }
    return false;
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn_O) {
            box.innerText = "O";
            box.style.color = "blue";
            turn_O = false;
            message.innerText = "X's Turn";
        }
        else {
            box.innerText = "X";
            box.style.color = "red";
            turn_O = true;
            message.innerText = "O's Turn";
        }
        box.disabled = true;
        if (!checkWinner()) {
            const allDisabled = Array.from(boxes).every(box => box.disabled);

            if (allDisabled) {
                message.innerText = "It's a Draw!!";
            }
        }
    })
})

let resetGame = () => {
    message.innerText = "Start the game! It is O's Turn";
    turn_O = true;
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    })
}

resetButton.addEventListener("click", () => {
    resetGame();
})