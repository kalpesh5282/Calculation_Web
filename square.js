function calculateArea(){
let side=parseFloat(document.getElementById('side').value);

if(isNaN(side)){
    document.getElementById('result').innerText='Enter the side !'
    document.getElementById('result').style.color='red';
    return;
}
let area=side*side;
document.getElementById('result').innerText='Area is : '+ area;
document.getElementById('result').style.color='green';
}
