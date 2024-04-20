function calculateCubeRoot() {
    
    var input = document.getElementById("numberInput").value;
    // Get the result element
    var resultElement = document.getElementById("result");

  
    if (input.trim() === "") {
        resultElement.innerHTML = "Please enter a number";
        resultElement.style.color='red';
        return;
    }

    // Check if the input is a valid number
    if (isNaN(input)) {
        resultElement.innerHTML = "Please enter a valid number";
        resultElement.style.color='red';
        return;
    }

    // Calculate the cube root
    var cubeRoot = Math.cbrt(parseFloat(input));

    // Display the result
    resultElement.innerHTML = "Cube Root: " + cubeRoot.toFixed(4);
}