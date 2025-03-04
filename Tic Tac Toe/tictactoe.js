let box=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgame=document.querySelector("#newgame");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO= true;
let c=0;

const win = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]]

box.forEach((box)=> {
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        if(turnO===true)
        {
            box.innerText="O";
            turnO=false;
        }
        else
        {
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        c++;
        let iswin= check();
        if(c===9 && !iswin)
        {
            gameover();
        }
    })
});

const gameover= () =>{
    msg.innerText=`Game was a Draw`;
    msgContainer.classList.remove("hide");
    disablebox();
}

const disablebox=() => {
    for(let boxes of box)
    {
        boxes.disabled=true;
    }
}

const enablebox=() => {
    for(let boxes of box)
    {
        boxes.disabled=false;
        boxes.innerText = "";
    }
}

const show= (winner) => {
    msg.innerText= `Congratulations, Winner is ${winner}`;
    disablebox();
    msgContainer.classList.remove("hide");
}

const check= () => {
    for(let pattern of win)
    {
        let pos1=box[pattern[0]].innerText;
        let pos2=box[pattern[1]].innerText;
        let pos3=box[pattern[2]].innerText;

        if(pos1 !="" && pos2!="" && pos3!="")
        {
            if(pos1===pos2 && pos2===pos3)
            {
                show(pos1);
            }
        }
    }
}

const resetgame =() => {
    turnO=true;
    c=0;
    enablebox();
    msgContainer.classList.add("hide");
}

newgame.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);