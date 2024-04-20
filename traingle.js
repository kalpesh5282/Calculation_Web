function calculateArea(){
    let height=parseFloat(document.getElementById('height').value);
    let base=parseFloat(document.getElementById('base').value);
    
    if(isNaN(height)||isNaN(base)){
        document.getElementById('result').innerText='please enter input!';
    }
    area=1/2*base*height
    document.getElementById('result').innerText='Area is : '+area;
    document.getElementById('result').style.color='green';
}