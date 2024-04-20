function calculateArea(){
    let radius=parseFloat(document.getElementById('radius').value);


    if(isNaN(radius)){
        document.getElementById('result').innerText='Enter readius !';
        document.getElementById('result').style.color='red';
        return;
    }
    let area =3.14*radius*radius;
    document.getElementById('result').innerText=" Area is :"+ area;
    document.getElementById('result').style.color='green';
}