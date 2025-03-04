let uscore=0;
let cscore=0;

const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const user=document.querySelector("#user-score");
const c=document.querySelector("#computer-score");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice= choice.getAttribute("id");
        playGame(userchoice);
    })
})

const playGame= (userchoice) => {
    const comp=compchoice();
    if(userchoice === comp)
    {
        draw();
    }
    else
    {
        let win=true;
        if(userchoice==="rock")
        {
            win =comp === "paper" ? false:true;
        }
        else if(userchoice=== "paper")
        {
            win= comp=== "scissor" ? false:true;
        }
        else
        {
            win = comp==="rock" ? false:true;
        }
        show(win, userchoice, comp);
    }
}

const compchoice = () => {
    const options =["rock", "paper", "scissor"];
    const x= Math.floor(Math.random()*3);
    return options[x];
}

const draw = () => {
    msg.innerText="It's a Draw";
    msg.style.backgroundColor="palevioletred";
}

const show=(win, userchoice, compchoice) => {
    if(win)
    {
        msg.innerText=`You Win! Your ${userchoice} beats ${compchoice}`;
        uscore++;
        user.innerText=uscore;
        msg.style.backgroundColor="green";
    }
    else
    {
        msg.innerText=`You Lose! ${compchoice} beats ${userchoice}`;
        cscore++;
        c.innerText=cscore;
        msg.style.backgroundColor="red";
    }
}