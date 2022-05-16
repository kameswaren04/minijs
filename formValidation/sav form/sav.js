function validation() {

    //Getting the values from the document
    
        a=document.myform.fname.value;    
        b=document.myform.lname.value;
        pho=document.myform.pno.value;
        pass=document.myform.pwd.value;
        mail=document.myform.email.value;
    
     //Regular expressions
        
        var phre = /^[0-9][0-9]{9}$/;
        var fnre = /^[a-zA-Z]+$/;
        var emre = /[@]+/;
        var passre = /[a-z]+/;
        var pass1 = /[@#!$]+/;
        var pass2 = /[A-Z]+/;
        var pass3 = /[0-9]+/;
        
    
    //Conditions to check the length of first and last names and also the the presence of special charcters
     
        if ( a.length < 3 || a.length > 10)
        {
            window.alert(" Please enter first name with min 3 chars and max 10 chars");
        }
        
        if ( b.length < 3 || b.length > 10 )
        {
            window.alert(" Please enter last name with min 3 chars and max 10 chars");        
        }
        if ( !fnre.test(a) ) {
            alert("First name must contain only characters");                       
        }
        if ( !fnre.test(b) ) {
            alert("Last name must contain only characters");   
        }
            
    //Conditions to check phone number           
    
        if ( pho.length < 10 )
        {
            window.alert("Phone no has to be atleast 10 chars");
        }
        if ( !phre.test(pho) ) {
            alert("Phone no must contain only numbers");   
        }
    
    // Conditions to check the length of password and special characters in password
    
        if (pass.length < 4){
            window.alert("Password must be atleast 4 chars long");
        }    
         if (pass == null || pass == " ") {
            window.alert("Please enter password");
         } 
         if ( !passre.test(pass) || !pass1.test(pass) || !pass2.test(pass) || !pass3.test(pass)  ) {
            window.alert("Password must contain an upper case letter , special charcter  and a number");                           
        }                     
       
    //Conditions to check email   
    
         if ( !emre.test(mail) ) {
             window.alert("Email must contain @ & . characters");                       
        }
    
    }
    
      function msg1() {
        window.alert("Your values are getting cleared") ;
     }
    