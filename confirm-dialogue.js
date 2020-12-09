export class ConfirmDialogue {
    /**
     * Creates a new confirmation dialogue that takes up the entire screen.
     * @param {string} confirm Text to be displayed in the component
     * @param {Function} callback A callback function containing either true for the confirm button being clicked or false for cancel
     */
    constructor(confirm, callback) {
        const head = document.createElement("div");
        head.classList.add("reusable-component");

        const background = document.createElement("div");
        background.classList.add("background");
        head.appendChild(background);

        const dialogue = document.createElement("div");
        dialogue.classList.add("dialogue");

        const text = document.createElement("p");
        text.innerText = confirm;
        dialogue.appendChild(text);
        
        const confirmButton = document.createElement("button");
        confirmButton.innerText = "Yes";
        confirmButton.onclick = function() {
            callback(true);
            head.remove();
        }

        const denyButton = document.createElement("button");
        denyButton.innerText = "No";
        denyButton.onclick = function() {
            callback(false);
            head.remove();
        }

        dialogue.appendChild(confirmButton);
        dialogue.appendChild(denyButton);

        head.appendChild(dialogue);

        document.body.prepend(head);
    }
}