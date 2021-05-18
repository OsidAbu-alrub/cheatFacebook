const messagesContainer = document.querySelector(".messages");
const textBox = document.querySelector(".txt");
const nonencryptable = ["الله", "محمد", "لله"];
const MAPPER = 
{"أ":"ٲ",
"إ":"ٳ",
"ت":"ٺ",
"ج":"ڄ",
"خ":"ح۫",
"ز":"ر۫",
"س":"ىىىـ",
"ض":"ۻ",
"غ":"ۼ",
"ق":"ڦ",
"ك":"ک",
"ه":"ھ",
"ي":"ی"
,"ى":"ۍ",}



stringToWords = (str) => str.trim().split(" ");

function encrypt(str) {
	const words = stringToWords(str);
	const encryptedWords = words.map((word) => {
		if (word.endsWith("سرائيل")) {
			return "الکیان المحٺل";
		}

		// if word can be encrypted
		if (!nonencryptable.includes(word)) {
			const chars = word.split("");
			const encryptedWord = chars.reduce(
				(acc, char) => (MAPPER[char] ? acc + MAPPER[char] : acc + char),
				""
			);
			return encryptedWord;
		}
		return word
	});
	return encryptedWords.join(" ");
}

function createMessage(text, isBot = false) {
	const newMessage = document.createElement("div");
	newMessage.classList.add("message");
	if (isBot) newMessage.classList.add("bot");
	newMessage.innerText = text;
	messagesContainer.append(newMessage);
	messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function handleClick() {
	const errorMessage = "لازم تكتب كلام عشان اقدر اشفره 😅";
	const str = textBox.value ? textBox.value : errorMessage;
	textBox.value ? createAndEncrypt(str) : createMessage(str, true);
}

function createAndEncrypt(str) {
	createMessage(str);
	createMessage(encrypt(str), true);
}

document.querySelector("form.footer").addEventListener("submit", (e) => {
	e.preventDefault();
	handleClick();
	textBox.value = "";
});
