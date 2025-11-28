let user_score = 0;
let comp_score = 0;

const choices = document.querySelectorAll(".col-1");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user_score");
const compscorepara = document.querySelector("#comp_score");

const gencomputer = () => {
    const option = ["rock", "paper", "scissors"];
    let arr = Math.floor(Math.random() * 3);
    return option[arr];
};

function showWinner(userwin) {
    if (userwin) {
        user_score++;
        msg.innerHTML = `You Win! Computer lose`;
        msg.style.backgroundColor = "green";
        userscorepara.innerHTML = user_score;
    } else {
        comp_score++;
        msg.innerHTML = `You lose! Computer Won`;
        msg.style.backgroundColor = "red";
        compscorepara.innerHTML = comp_score;
    }
}

function draw() {
    msg.innerHTML = "Game is draw, Play again!";
    msg.style.backgroundColor = "blue";
}

const playgame = (userchoices) => {
    console.log(userchoices);

    const gencomp = gencomputer();
    console.log(gencomp);

    if (userchoices === gencomp) {
        draw();
    } else {
        let userwin = true;
        if (userchoices === "rock") {
            userwin = gencomp === "papper" ? false : true;
        } else if (userchoices === "papper") {
            userwin = gencomp === "scissors" ? false : true;
        } else {
            userwin = gencomp === "rock" ? false : true;
        }
        showWinner(userwin);
    }
};

choices.forEach(function (choice) {
    choice.addEventListener("click", () => {
        const userchoices = choice.getAttribute("id");
        // console.log("choice was clicked", userchoices);
        playgame(userchoices);
    });
});
