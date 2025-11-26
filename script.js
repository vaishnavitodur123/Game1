let user_score = 0;
let comp_score = 0;

const choices = document.querySelectorAll(".col-1");

const gencomputer = () => {
    const option = ["rock", "paper", "scissors"];
    let arr = Math.floor(Math.random() * 3);
    return option[arr];
};

const playgame = (userchoices) => {
    console.log(userchoices);

    const gencomp = gencomputer();
    console.log(gencomp);
};

choices.forEach(function (choice) {
    choice.addEventListener("click", () => {
        const userchoices = choice.getAttribute("id");
        // console.log("choice was clicked", userchoices);
        playgame(userchoices);
    });
});
