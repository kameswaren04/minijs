//type only alphbets
function isAlphabet(evt) {
    var iKeyCode = (evt.which) ? evt.which : evt.keyCode
    if (iKeyCode != 46 && iKeyCode > 32 && (iKeyCode < 65 || iKeyCode > 90) && (iKeyCode < 97 || iKeyCode > 122))
      return false;
    
  } 

function charName(){
  var name = document.getElementById("fname").value;
  var nameError = document.getElementById("name-error");

  if(name.length == ''){
    nameError.innerHTML = 'enter name';
    return false;
  }    
       
if(name.length <3 || name.length >15){
nameError.innerHTML = 'name should be greater than 3 and less than 15';
return false;

}
if (name.length >3 || name.length <15 ){
  nameError.innerHTML = 'valid';
  // document.getElementById("fname").style.background = "green"
  return true;

}

}

   //type only numbers
   function isNumber(evt) {
    document.getElementById("correct").style.display = "none";
    var iKeyCode = (evt.which) ? evt.which : evt.keyCode
if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57))
    return false;

return true;
} 

function emailCheck(){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if(email.value.match(mailformat)) {
     document.getElementById("correct").style.display = "flex";
     document.getElementById("error").style.display = "none";
    }
    else
    {
      document.getElementById("error").style.display = "flex";
      document.getElementById("correct").style.display = "none";
    }
  }
  

  function hide(){
    document.getElementById("error").style.display = "none";
    document.getElementById("correct").style.display = "none";
  
  }

   //Password Character check 
 function checkChar(){
  var myInput = document.getElementById("password");
  var newPassword = myInput.value;
  var minNumberofChars = 2;
  var maxNumberofChars = 10;
  var regularExpression  = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{3,16}$/;
 // var regularExpression = /^((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*_+=]).{4,})+$/;  
  
  if(newPassword.length < minNumberofChars && newPassword.length > maxNumberofChars){
   document.getElementById("weak").style.display = "none";
   document.getElementById("strong").style.display = "none";

      return true;
  }
  if(!regularExpression.test(newPassword)) {
        document.getElementById("weak").style.display = "block";
        document.getElementById("strong").style.display = "none";
  }
  else{
   document.getElementById("strong").style.display = "block";
   document.getElementById("weak").style.display = "none";
  }
  
}

//Check password and confirm password
function checkPass(){
    var name1=document.getElementById('fname').value;
    var email1=document.getElementById('email').value;
    var num1=document.getElementById('fnum').value;
    var pass1=document.getElementById('password').value;
    var pass2=document.getElementById('password2').value;
    var regularExpression  = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{3,16}$/;
    // if(pass1===regularExpression){
    //   alert("Must One Special");
    // }

    //password checking
    if(name1==""){
      alert("Fill UserName");
      document.getElementById("fname").focus();
    }
    else if(email1==""){
      alert("Fill EmailID");
      document.getElementById("email").focus();
    }
    else if(num1==""){
      alert("Fill Mobile Number");
      document.getElementById("fnum").focus();
    }
    else if(pass1==""){
      alert("Fill Password");
      document.getElementById("password").focus();     
    }
    else if(pass1.length<8){
      //document.getElementById("lcount").style.display = "flex";
      alert("Maximum 8 characters Required");
      document.getElementById("password").focus();     
    }
    else if(!regularExpression.test(pass1)){
      alert("Given 1 Special Char, Number and Upper Case Letter")
      document.getElementById("password").focus();
    }
    else if(pass2==""){
      alert("Fill Confirm Password");  
      document.getElementById("password2").focus();
    }
    else if(pass1!==pass2){
      alert("Wrong Password");
      document.getElementById("password2").focus();
    }
    else{
      alert("Successfully Submited");
      // document.getElementById("form").reset();
      // document.getElementById("strong").style.display = "none";
      // document.getElementById("weak").style.display = "none";
      // document.getElementById("correct").style.display = "none";
      // document.getElementById("error").style.display = "none";
      // document.getElementById("fnum").style.background = "white";
    }
 }

function hide(){
      document.getElementById("strong").style.display = "none";
      document.getElementById("weak").style.display = "none";
      document.getElementById("correct").style.display = "none";
      document.getElementById("error").style.display = "none";
      
}



function clear(){
  document.getElementById("form").reset();
}
