// Get references to the HTML elements
const numberInput = document.getElementById("numberInput");
const doubleButton = document.getElementById("doubleButton");
const tripleButton = document.getElementById("tripleButton");
const resultDisplay = document.getElementById("result");

// Event listener for the "Double" button
doubleButton.addEventListener("click", () => {
    const inputValue = parseFloat(numberInput.value);
    if (!isNaN(inputValue)) {
        const doubledValue = inputValue * 2;
        resultDisplay.textContent = `Doubled: ${doubledValue}`;
    } else {
        alert("Please enter a number.");
    }
});

// Event listener for the "Triple" button
tripleButton.addEventListener("click", () => {
    const inputValue = parseFloat(numberInput.value);
    if (!isNaN(inputValue)) {
        const tripledValue = inputValue * 3;
        resultDisplay.textContent = `Tripled: ${tripledValue}`;
    } else {
        alert("Please enter a number.");
    }
});
