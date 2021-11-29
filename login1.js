
function val()
{
    
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    if(username=="admin" && password=="user")
    {
        alert("login succefully");
        return false;
    }
    if(username.length==" "||password.length==" "){
        alert("The label of user name or label of password is blank");
    }
    

}

function val2()
{
    var password=document.getElementById("password").value;
    if(password.length<8)
    {
        alert("Please enter passowrd more 8 digits");
    }
    
}
function val3()
{
    var username=document.getElementById("username").value;
    if(username.length<8)
    {
        alert("Please enter name of user name more 8 letters");
    }
    
}
