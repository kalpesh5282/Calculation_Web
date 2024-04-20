// function calculate(){
//     let wight=parseFloat(document.getElementById("weight").value);
//     let height=parseFloat(document.getElementById("height").value);

//     let bmi = weight / (height * height);
//     document.getElementById("result").innerText=bmi.toFixed(2);
// }



function calculate() {
    let weight = parseFloat(document.getElementById("weight").value);
    let heightcm = parseFloat(document.getElementById("height").value);

    let height=heightcm/100;



    // Checking if height and weight are valid numbers
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        console.error("Invalid height or weight values.");
        let a=document.getElementById("result").innerText="Invalid height or weight values";
        document.getElementById("result").style.color='red';

        
        return;
    }

    let bmi = weight / (height * height);
    document.getElementById("result").innerText ="Your BMI is :- "+ bmi.toFixed(2);
    document.getElementById("result").style.color='green';
}