function signup(e){

    var name = document.forms['signupForm']['name'];
    var email = document.forms['signupForm']['email'];
    var pwd = document.forms['signupForm']['pwd'];
    var cpwd = document.forms['signupForm']['cpwd'];
    var terms = document.forms['signupForm']['terms'];

    var nameHelp = document.getElementById('nameHelp');
    var emailHelp = document.getElementById('emailHelp');
    var pwdHelp = document.getElementById('pwdHelp');
    var cpwdHelp = document.getElementById('cpwdHelp');
    var termsHelp = document.getElementById('termsHelp');
    
    


    var pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    console.log(email,pwd);
    if(name.value.length==0){
        e.preventDefault();
        name.style.borderColor = 'red';
        nameHelp.innerText = "Name field cannot be empty"
    }
    if(email.value.length==0)
    {
        e.preventDefault();
        email.style.borderColor = 'red';
        emailHelp.innerText = "Email field cannot be empty"

    }
    else{
        
        emailHelp.innerText = "";
    }

    if(pattern.test(email)){
        e.preventDefault();
        email.style.borderColor = 'red';
        emailHelp.innerText = "Invalid email"

    }
    if(pwd.value.length==0)
    {
        e.preventDefault();
        pwd.style.borderColor = 'red';
        pwdHelp.innerText = "Password field cannot be empty"

    }
    if(pwd.value.length<8)
    {
        e.preventDefault();
        pwd.style.borderColor = 'red';
        pwdHelp.innerText = "Password length should be greater than 8";

    }
    if(pwd.value != cpwd.value){
        e.preventDefault();
        cpwd.style.borderColor = 'red';
        cpwdHelp.innerText = "Password not same";


    }
    if(!terms.checked){
        e.preventDefault();
       termsHelp.innerText = "Please agree to our terms and condition";
    }
    
    
    

}