function calculateSquareRoot() {
    var numberInput = document.getElementById("numberInput").value;
    var resultElement = document.getElementById("result");

    // Check if input is empty
    if (numberInput.trim() === "") {
        resultElement.innerText = "Please enter a number.";
        resultElement.style.color = 'red';
        return;
    }

    // Parse input as a number
    var parsedInput = parseFloat(numberInput);

    // Check if input is valid
    if (!isNaN(parsedInput) && parsedInput >= 0) {
        var squareRoot = Math.sqrt(parsedInput);
        resultElement.innerText = "Square root of " + parsedInput + " is " + squareRoot.toFixed(2);
        resultElement.style.color = 'black';
    } else {
        resultElement.innerText = "Please enter a valid non-negative number.";
        resultElement.style.color = 'red';
    }
}