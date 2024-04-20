function checkPalindrome() {
    
    let number = document.getElementById('numberInput').value;

    if(number.trim()===''){
        document.getElementById('result').innerText='Enter the number';
        document.getElementById('result').style.color='red';
        return;
    }

   
    let numberString = number.toString();

    
    let reversedNumberString = numberString.split('').reverse().join('');

    
    if (numberString === reversedNumberString) {
        document.getElementById('result').innerText = number + " is a palindrome number.";
        document.getElementById('result').style.color='green'
    } else {
        document.getElementById('result').innerText = number + " is not a palindrome number.";
        document.getElementById('result').style.color='red';
    }
}