
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log(username);
    console.log(password);
    if(username == "admin" && password == "111"){
        alert("login succesfully");
        return false;
    }else{
        alert("login failed");
    }
}