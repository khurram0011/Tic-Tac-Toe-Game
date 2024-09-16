
let boxes = document.querySelectorAll(".box");
 let resetBtn = document.querySelector("#resetBtn");

 let newBtn = document.querySelector("#new-btn");
 let msg = document.querySelector("#msg")
 let msgContainer = document.querySelector(".msg-container");


 let tunr0=true
 let filledBoxes = 0; // Track number of filled boxes
 let winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
 ]

const resetGame = () =>{
    tunr0 = true;
    filledBoxes = 0; // Reset the counter
    enableBoxes();
    msgContainer.classList.add("hide")
}

 boxes.forEach((box) =>{
    box.addEventListener('click', () =>{
        console.log("box was click")
        if(tunr0){
            box.innerHTML="0"
            tunr0 = false;

        }
        else{
            box.innerHTML = "x"
            tunr0 = true
        }
        
        box.disabled = true;
        filledBoxes++; // Increment filled boxes counter
         checkWinner();
    })
 })


 const disableBoxes=() =>{
    for(let box of boxes){
        box.disabled = true;
    }
 }

 const enableBoxes=() =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
 }
 const showWinner = (winner) =>{
    msg.innerText = `congrate winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

 }

 const gameOver = () => {
    msg.innerText = "Game Over! It's a draw.";
    msgContainer.classList.remove("hide");
    disableBoxes();
};

 const checkWinner=()=>{
    for(let pattern of winPatterns){
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;

        if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
            if(posVal1===posVal2 && posVal2 === posVal3){
                console.log("winner", posVal1);

                showWinner(posVal1);
                return;
            }
        }
        if (filledBoxes === 9) { // If all boxes are filled and no winner
            gameOver();
        }
     
    }

 }

 newBtn.addEventListener('click', resetGame);
 resetBtn.addEventListener('click', resetGame);