let bmi=document.getElementById("bmi");
bmi.addEventListener("click",()=>{
    window.location.href="bmi.html";
})
// get in toch validation
let age=document.getElementById("age");
age.addEventListener("click",()=>{
    window.location.href="age.html";
})

// form validation get in toch 



function formValidation() {
    let isValid = true;

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    
    if (name.trim() === '') {
        document.getElementById('nameresult').innerText = 'Enter the Name';
        document.getElementById('name').style.border="2px solid red";
        document.getElementById('nameresult').style.color='red';
        isValid = false;
    }
    else if(name.length<2){
        document.getElementById('nameresult').innerText = 'enter at least 2 character';
        document.getElementById('name').style.border="2px solid red";
        document.getElementById('nameresult').style.color='red';
        isValid = false;

    }
    else{
        document.getElementById('name').style.border="2px solid green";
        document.getElementById('nameresult').innerText = '';
    }
  
    if (email.trim()==='') {
        document.getElementById('emailresult').innerText = 'Enter Email';
        document.getElementById('emailresult').style.color='red'
        document.getElementById('email').style.border="2px solid red";
        isValid = false;
    }
   else if (!email.includes('@') || !email.endsWith('gmail.com')) {
        document.getElementById('emailresult').innerText = 'Enter the Valid Email';
        document.getElementById('emailresult').style.color='red'
        document.getElementById('email').style.border="2px solid red";
        isValid = false;
    }
    else{
        document.getElementById('email').style.border="2px solid green";
        document.getElementById('emailresult').innerText = '';
    }

     if (phone.trim()==='') {
        document.getElementById('phoneresult').innerText = 'Enter Phone Number!';
        document.getElementById('phoneresult').style.color='red';
        document.getElementById('phone').style.border="2px solid red";
        isValid = false;
    }
    else if (phone.length < 10) {
        document.getElementById('phoneresult').innerText = 'Phone number must be exactly 10 digits.';
        document.getElementById('phoneresult').style.color='red';
        document.getElementById('phone').style.border="2px solid red";
        isValid = false;
    }
  

    else{
        document.getElementById('phone').style.border="2px solid green";
        document.getElementById('phoneresult').innerText = '';
    }

    if(message.trim()==='') {
        document.getElementById('messageresult').innerText = 'Enter Your Message';
        document.getElementById('messageresult').style.color='red';
        document.getElementById('message').style.border="2px solid red";
        isValid = false;
    }
    else if(message.length < 7) {
        document.getElementById('messageresult').innerText = 'Message must be at least 7 characters.';
        document.getElementById('messageresult').style.color='red';
        document.getElementById('message').style.border="2px solid red";
        isValid = false;
    }
   
    else{
        document.getElementById('message').style.border="2px solid green";
        document.getElementById('messageresult').innerText = '';
    }

    return isValid;
}

// currencey
function convertUSD() {
    const inr = document.getElementById('inrInput').value;
    if(inr.trim()===''){
        document.getElementById('result').innerHTML='Enter the input!';
        document.getElementById('result').style.color='red'
        return;
    }
    const usd = inr / 82.5;  
    document.getElementById('result').innerHTML = `${inr} INR is approximately ${usd.toFixed(2)} USD`;
    document.getElementById('result').style.color='green';
}

function convertINR() {
    const usd = document.getElementById('usdInput').value;
    if(usd.trim()===''){
        document.getElementById('result').innerHTML='Enter the input!';
        document.getElementById('result').style.color='red'
        return;
    }
    

    const inr = usd * 82.5;  
    document.getElementById('result').innerHTML = `${usd} USD is approximately ${inr.toFixed(2)} INR`;
    document.getElementById('result').style.color='green';
}


// form data 
var form = document.getElementById('sheetdb-form');
form.addEventListener("submit", function(e) {
    e.preventDefault();

 
    if (formValidation()) {
       
        fetch(form.action, {
            method: "POST",
            body: new FormData(form),
        }).then(response => response.json())
          .then((html) => {
          
            window.open('./login.html', '_self');
          }).catch((error) => {
            console.error('Error:', error);
            alert('There was an error submitting your form. Please try again.');
          });
    }
});

