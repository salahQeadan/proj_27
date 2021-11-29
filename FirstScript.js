
document.getElementById('btncon').onclick=function(){

    if(document.getElementById('input1').value=="" || document.getElementById('input2').value=="" ||
    document.getElementById('input3').value=="" || document.getElementById('input4').value==""){

        alert("Enter your E-mail/Username/password/confirm-password");
        return false;

    }else if(document.getElementById('input3').value.length<8 || document.getElementById('input4').value.length<8){
            alert("Password lengt(must be at least 8 characters long");
            return false;

        }else if(document.getElementById('input3').value!==document.getElementById('input4').value){

                alert("These passwords don't match. Try again?");
                return false;
        }else{

            
            var postUser = new XMLHttpRequest(); 

                postUser.open("POST", "/user", true); 
                postUser.setRequestHeader("Content-Type", "application/json");
                postUser.send(JSON.stringify(users));
        }

 
    
}