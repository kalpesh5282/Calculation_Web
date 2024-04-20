function calculateArea(){
    let length=parseFloat(document.getElementById('length').value);
    let width=parseFloat(document.getElementById('width').value);
    if(isNaN(length)||isNaN(width)){
        document.getElementById('result').innerText='Fill the input';
        document.getElementById('result').style.color='red';
        return;
    }

    let area=length*width;
    document.getElementById('result').innerText=
    'Area is '+area;
    document.getElementById('result').style.color='green';
}