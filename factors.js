function calculateFactors() {
    var inputNumber = parseInt(document.getElementById("numberInput").value);
    
    if (!isNaN(inputNumber)) {
        var factors = [];
        
        for (var i = 1; i <= Math.sqrt(inputNumber); i++) {
            if (inputNumber % i === 0) {
                factors.push(i);
                if (i !== inputNumber / i) {
                    factors.push(inputNumber / i);
                }
            }
        }
        
        document.getElementById("result").innerHTML = "Factors of " + inputNumber + " are: " + factors.join(', ');
    } else {
        document.getElementById("result").innerHTML = "Please enter a valid number";
        document.getElementById("result").style.color='red';

    }
}
