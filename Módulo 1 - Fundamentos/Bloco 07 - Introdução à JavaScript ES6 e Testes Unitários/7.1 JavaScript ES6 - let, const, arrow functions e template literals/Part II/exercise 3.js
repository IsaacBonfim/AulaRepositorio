const textToDisplay = document.getElementById("text");
let clickCount = 0;

const button = document.getElementById("button_test");

button.addEventListener("click", () => textToDisplay.innerHTML = clickCount += 1);
