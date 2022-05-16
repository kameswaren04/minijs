var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var phoneError = document.getElementById("phone-error");
var passwordError = document.getElementById("password-error");
var confPasswordError = document.getElementById("password2-error");

function validateName(){
    var name = document.getElementById("contact-name").value;
    if(name.length == 0 ){
        nameError.innerHTML= 'name is required';
        return false;
    }
    if(name.length < 3 || name.length > 10){
        nameError.innerHTML = 'name should be more than 3 and less than 10 characters';
        return false;
    }
    if(!name.match(/^[a-zA-Z]+$/)){
        nameError.innerHTML = 'only alphabets are allowed';
        return false;
    }
    
        nameError.innerHTML= 'ok';
        return true;
 }

function validatePhone(){
    var phone = document.getElementById("contact-phone").value;
    if(phone.length == 0){
        phoneError.innerHTML = 'please enter number';
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = 'phno should be 10 digit';
        return false;
    }
    if(!phone.match(/^[0-9][0-9]{9}$/)){
         phoneError.innerHTML = 'phone no is required';
         return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
    
 }

 function validateEmail(){
     var email = document.getElementById("contact-email").value;
     
     if(email.length == 0){
         emailError.innerHTML = 'enter email id';
         return false;
     }
     if(!email.match(/[@]+/)){
        emailError.innerHTML = 'enter valid email id';
        return false;
     }
     emailError.innerHTML = 'ok';
         return true;
 }
 function validatePassword(){
     var password = document.getElementById("contact-password").value;
     var passre = /[a-z]+/;
     var pass1 = /[@#!$]+/;
     var pass2 = /[A-Z]+/;
     var pass3 = /[0-9]+/;

     if(password.length==0){
         passwordError.innerHTML = 'enter password'
         return false;
     }
     if ( !passre.test(password) || !pass1.test(password) || !pass2.test(password) || !pass3.test(password)  ){
         passwordError.innerHTML = 'password should contain one uppercase,special charcter  and a number';
         return false;
     }
     passwordError.innerHTML='ok';
     return true;
 }

 function validateConfPassword(){
     var confpassword = document.getElementById("contact-confpassword").value;

     if(confpassword == " "){
         confPasswordError.innerHTML = 'enter confirm passsword';
         return false;
     }
     if(confpassword !== password){
         confPasswordError.innerHTML = 'password should be same';
         return false;
     }
     confpassword.innerHTML = 'ok'
     return true;
     
 }

 function clear(){
    window.alert("Your values are getting cleared");

 }
 

