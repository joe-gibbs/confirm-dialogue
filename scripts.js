import { ConfirmDialogue } from "./confirm-dialogue.js";

const clickMe = document.getElementById("clickme");
const clickMeToo = document.getElementById("clickmetoo");
const resultText = document.getElementById("result-text");

clickMe.addEventListener("click", () => {
    new ConfirmDialogue("Are you sure you want to continue?", (result) => {
        resultText.innerText = "You just clicked " + (result ? "yes" : "no") + ".";
    });
});

clickMeToo.addEventListener("click", () => {
    new ConfirmDialogue("Different text here, do you still want to continue?", (result) => {
        resultText.innerText = "You just clicked " + (result ? "yes" : "no") + ".";
    });
});