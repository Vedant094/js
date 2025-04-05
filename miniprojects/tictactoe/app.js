let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newGame=document.querySelector("#new");
let container=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");

let turn0=true;
const resetGame=()=>{
    turn0=true;
    enableBoxes();
    container.classList.add("hide");
}

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,5],
    [2,4,6],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("button was clicked");
        if(turn0){
            box.innerText='O';
            turn0=false;
        }
        else{
            box.innerText='X';
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    })
})
const disableBox=()=>{
    for( let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(box of boxes){
        box.innerText="";
        box.disabled=false;
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations, winner is ${winner}`;
    container.classList.remove("hide");
    disableBox();
}

const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log(pos1val + " won");
                showWinner(pos1val);
            }
        }
    }

}

reset.addEventListener("click",resetGame);
newGame.addEventListener("click",resetGame);