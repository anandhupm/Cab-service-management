function login(e){
    
    var email = document.forms['loginForm']['email'];
    var pwd = document.forms['loginForm']['pwd'];
    var emailHelp = document.getElementById('emailHelp');
    var pwdHelp = document.getElementById('pwdHelp');

    console.log(email,pwd);
    if(email.value.length==0)
    {
        e.preventDefault();
        email.style.borderColor = 'red';
        emailHelp.innerText = "Email field cannot be empty"

    }
    if(pwd.value.length==0)
    {
        e.preventDefault();
        pwd.style.borderColor = 'red';
        pwdHelp.innerText = "Password field cannot be empty"

    }
    
    
    

}