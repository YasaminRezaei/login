const check = function(){
    const email = document.getElementById('email').value;
    const pasword = document.getElementById('pswd').value;
    if(email=="yasamin@gmail.com" && pasword ==1234){
        document.getElementById('label').innerHTML= "Hello" + email;
        alert("hello"+ email);
    }
    else{
       
        console.log("nix");
    }
}
