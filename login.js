function login(event){
    event.preventDefault();

    var f_loginEmail = document.getElementById("flipkart_login_email").value;
    var f_loginPassword = document.getElementById("flipkart_login_password").value;

    if(f_loginEmail && f_loginPassword){
        var flipkart_storage = JSON.parse(localStorage.getItem("flipkart_users"));
        var flipkart_currentUser;
        var flag = false;

        for(var i=0;i<flipkart_storage.length;i++){
            if(flipkart_storage[i].userEmail == f_loginEmail && flipkart_storage[i].userPassword == f_loginPassword){
                flag = true;
                flipkart_currentUser = flipkart_storage[i];
            }
        }

        if(flag){
            localStorage.setItem("flipkart_current_user", JSON.stringify(flipkart_currentUser));
            alert("Login Successful.");
            window.location.href = `./home.html`;
        } else {
            alert("credentials do not match.");
        }
    } else {
        alert("All fields are mandatory.");
    }


}