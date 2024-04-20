function calculateAge() {
    var dob = document.getElementById('dob').value;
    if (dob) {
        var dobDate = new Date(dob);
        var now = new Date();
        
        var years = now.getFullYear() - dobDate.getFullYear();
        var months = now.getMonth() - dobDate.getMonth();
        var days = now.getDate() - dobDate.getDate();

        if (months < 0 || (months === 0 && days < 0)) {
            years--;
            months += (days < 0 ? 11 : 12);
        }


        if (days < 0) {
            var previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
            days += previousMonth.getDate();
        }

   
        var resultText = `You are ${years} years, ${months} months, and ${days} days old.`;
        document.getElementById('result').innerHTML = resultText;
        document.getElementById('result').style.color='green';
    } else {
        document.getElementById('result').innerHTML = "Please enter your date of birth.";
        document.getElementById('result').style.color='red';
    }
}
