const messagesContainer = document.querySelector(".messages");
let textBox = document.querySelector(".txt");
let nonencryptable = ["الله", "محمد", "لله"];

stringToWords = (str) => str.trim().split(" ");

function encrypt(str) {
    let words = stringToWords(str);
    let encryptedWords = [];
    words.forEach((word) => {
        if (nonencryptable.includes(word) === false) {
            let chars = word.split("");
            let enctyptedWord = [];
            chars.forEach((char, index) => {
                switch (char) {
                    case "أ":
                        enctyptedWord.push("ٲ");
                        break;
                    case "إ":
                        enctyptedWord.push("ٳ");
                        break;
                    case "ت":
                        enctyptedWord.push("ٺ");
                        break;
                    case "ج":
                        enctyptedWord.push("ڄ");
                        break;
                    case "خ":
                        enctyptedWord.push("ح۫");
                        break;
                    case "ز":
                        enctyptedWord.push("ر۫");
                        break;
                    case "س":
                        enctyptedWord.push("ىىىـ");
                        break;
                    case "ض":
                        enctyptedWord.push("ۻ");
                        break;
                    case "غ":
                        enctyptedWord.push("ۼ");
                        break;
                    case "ق":
                        enctyptedWord.push("ڦ");
                        break;
                    case "ك":
                        enctyptedWord.push("ک");
                        break;
                    case "ه":
                        enctyptedWord.push("ھ");
                        break;
                    case "ي":
                        enctyptedWord.push("ی");
                        break;
                    case "ى":
                        enctyptedWord.push("ۍ");
                        break;
                    case "ئ":
                        enctyptedWord.push("یٴ");
                        break;
                    default:
                        enctyptedWord.push(char);
                }
            });
            encryptedWords.push(enctyptedWord.join(""));
        } else {
            encryptedWords.push(word);
        }
    });
    return encryptedWords.join(" ");
}

function createMessage(text, isBot = false) {
    let newMessage = document.createElement("div");
    newMessage.classList.add("message");
    if (isBot === true) {
        newMessage.classList.add("bot");
    }
    newMessage.innerText = text;
    messagesContainer.append(newMessage);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function handleClick() {
    let str = textBox.value;
    if (str !== null && str !== "") {
        createMessage(str);
        createMessage(encrypt(str), true);
    } else {
        createMessage("لازم تكتب كلام عشان اقدر اشفره 😅", true);
    }
    textBox.value = "";
    str = "";
}

document.querySelector("form.footer").addEventListener("submit", (e) => {
    e.preventDefault();
    handleClick();
});
