function checkArmstrong() {

    var number = document.getElementById("numberInput").value;
    var numberString = number.toString();
    var numberOfDigits = numberString.length;
    if(number.trim()===''){
        document.getElementById('result').innerText='Enter the Number !';
        document.getElementById('result').style.color='red';
        return;
    }

   
    var num = parseInt(number);
    var sum = 0;
    var temp = num;

  
    while (temp > 0) {
        var digit = temp % 10;
        sum += Math.pow(digit, numberOfDigits);
        temp = Math.floor(temp / 10);
    }

    if (sum === num) {
        document.getElementById("result").innerHTML = num + " is an Armstrong number.";
        document.getElementById("result").style.color='green';
    } else {
        document.getElementById("result").innerHTML = num + " is not an Armstrong number.";
        document.getElementById("result").style.color='red';
    }
}