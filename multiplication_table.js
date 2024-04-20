function calculateCubeRoot() {
    let num = document.getElementById("numberInput").value;
    let resultElement = document.getElementById("result");


    if (num.trim() === "") {
        resultElement.innerText = "Please enter a number";
        resultElement.style.color='red';
        return;
    }

   
    if (isNaN(num)) {
        resultElement.innerText = "Please enter a valid number";
        resultElement.style.color='red';
        return;
    }

    resultElement.innerText = "";

   
    resultElement.innerText += "Multiplication Table for " + num + ":\n";
    for (let i = 1; i <= 10; i++) {
        let product = num * i;
        resultElement.innerText += num + " * " + i + " = " + product + "\n";
    }
}
























// function calculateCubeRoot(){
//     let num=document.getElementById("numberInput").value;
//     let result=document.getElementById("result").value;

//     document.getElementById('result').innerText=num+" Multiplication Table";

//     for(let i=num;i<=num;i++){
//         for(let j=1;j<=10;j++){
//             let ans=i*j;
//             document.getElementById('result').innerText=num +"*"+j+"="+result;
//         }

//     }

// }

// let num=prompt("Enter the number:-");
//  document.write(`${num} Multiplication Table`);
//  document.write("<br>")
// for(let i=num;i<=num;i++){

   
//     for(let j=1;j<=10;j++)
//     {
//         let result=i*j;
      
//         document.write(`${num} * ${j} = ${result} `)

//         document.write("<br>")
//     }
// }