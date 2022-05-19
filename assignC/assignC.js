var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var passError = document.getElementById("pass-error");
var confPassError = document.getElementById("confpass-error");
var SubmitError = document.getElementById("Submit-error");

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = 'Name is Required';
        return false;
    }
    if (name.length <3 || name.length > 15){
        nameError.innerHTML = 'must be greater than 3 and less than 15';
        return false;
    }
    
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == ''){
        emailError.innerHTML = 'Email is Required';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{3,4}$/)){
        emailError.innerHTML = 'Invalid Email';
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validatePhone(){
    var phone = document.getElementById('contact-number').value;

    if(phone.length == ''){
        phoneError.innerHTML = 'Phone No is Required';
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = 'Phone no should be 10 digits';
        return false;
    }
    // if(!phone.match(/^[0-9]{10}$/)){
    //     phoneError.innerHTML = 'Only Numbers';
    //     return false;
    // }
     phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}


function validatePassword(){
    var password = document.getElementById('contact-password').value;
     if (password.length == ''){
         passError.innerHTML = 'enter password';
         return false;
     } 

     if(!password.match(/^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{3,16}$/)){

        passError.innerHTML = 'Password must fullfil the requirments ';

        return false;

    }
    //  if (password.length < 5 || password.length > 10){
    //      passError.innerHTML = 'password must be greater than 5 and less than 10';
    //      return false;
    //  }

     passError.innerHTML = '<i class="fas fa-check-circle"></i>';
     return true;
}

function validateConfPassword(){
    var confpass = document.getElementById('contact-password2').value;
    var password = document.getElementById('contact-password').value;
    if(confpass.length == ''){
        confPassError.innerHTML = 'Enter confirm password ';
        return false;
    }
    if(confpass != password){
        confPassError.innerHTML = 'password does not match';
        return false;
    }
    confPassError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;

}
function validateForm(){


if(!validateName() || !validateEmail() || !validatePhone() || !validatePassword() || !validateConfPassword() ){
            SubmitError.style.display = 'block';
            SubmitError.innerHTML = 'Please fill all the details';
            
            return false;
        }
    }

    
// function validateForm(){

//     function validateName(){
//     var name = document.getElementById('contact-name').value;

//     if(name.length == 0){
//         nameError.innerHTML = 'Name is Required';
//         return false;
//     }
//     if (name.length <3 || name.length > 15){
//         nameError.innerHTML = 'must be greater than 3 and less than 15';
//         return false;
//     }
    
//     nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
//     return true;
// }

// function validateEmail(){
//     var email = document.getElementById('contact-email').value;

//     if(email.length == ''){
//         emailError.innerHTML = 'Email is Required';
//         return false;
//     }
//     if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{3,4}$/)){
//         emailError.innerHTML = 'Invalid Email';
//         return false;
//     }
//     emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
//     return true;
// }

// function validatePhone(){
//     var phone = document.getElementById('contact-number').value;

//     if(phone.length == ''){
//         phoneError.innerHTML = 'Phone No is Required';
//         return false;
//     }
//     if(phone.length !== 10){
//         phoneError.innerHTML = 'Phone no should be 10 digits';
//         return false;
//     }
//     if(!phone.match(/^[0-9]{10}$/)){
//         phoneError.innerHTML = 'Only Numbers';
//         return false;
//     }
//      phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
//     return true;
// }


// function validatePassword(){
//     var password = document.getElementById('contact-password').value;
//      if (password.length == ''){
//          passError.innerHTML = 'enter password';
//          return false;
//      } 
//      if (password.length < 5 || password.length > 10){
//          passError.innerHTML = 'password must be greater than 5 and less than 10';
//          return false;
//      }
//      passError.innerHTML = '<i class="fas fa-check-circle"></i>';
//      return true;
// }

// function validateConfPassword(){
//     var confpass = document.getElementById('contact-password2');

//     if(confpass.length == ''){
//         confPassError.innerHTML = 'Enter confirm password ';
//         return false;
//     }
//     if(confpass != password){
//         confPassError.innerHTML = 'password does not match';
//         return false;
//     }
//     confPassError.innerHTML = '<i class="fas fa-check-circle"></i>';
//     return true;

// }



//     if(!validateName() || !validatePhone() || !validateEmail() || !validatePassword() || !validateConfPassword() ){
//         SubmitError.style.display = 'block';
//         SubmitError.innerHTML = 'Please fill all the details';
        
//         return false;
//     }
// }
















// setTimeout(function(){SubmitError.style.display = 'none';}, 5000);