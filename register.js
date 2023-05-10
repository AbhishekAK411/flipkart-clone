

function register(event){
    event.preventDefault();
    var f_userName = document.getElementById("flipkart_username").value;
    var f_email = document.getElementById("flipkart_email").value;
    var f_password = document.getElementById("flipkart_password").value;
    var f_confirmPassword = document.getElementById("flipkart_confirmPassword").value;

    if(f_userName && f_email && f_password && f_confirmPassword){
        if(f_password.length >= 8 && f_confirmPassword.length>=8){
            if(f_password == f_confirmPassword){
                var flipkart_storage = JSON.parse(localStorage.getItem("flipkart_users")) || [];
                var flag = false;

                for(var i=0;i<flipkart_storage.length;i++){
                    if(flipkart_storage[i].userEmail == f_email){
                        flag = true;
                    }
                }

                if(!flag){
                    var flipkart_object = {userName: f_userName, userEmail: f_email, userPassword: f_password, userConfirmPassword: f_confirmPassword};
                    flipkart_storage.push(flipkart_object);
                    localStorage.setItem("flipkart_users", JSON.stringify(flipkart_storage));
                    document.getElementById("flipkart_username").value = "";
                    document.getElementById("flipkart_email").value = "";
                    document.getElementById("flipkart_password").value = "";
                    document.getElementById("flipkart_confirmPassword").value = "";
                    alert("Registration Successful.");
                } else {
                    alert("Email is already registered. Proceed to Login.");
                    window.location.href = `./login.html`;
                }
            } else {
                alert("passwords do not match");
            }
        } else {
            alert("Password length should be more than 8 digits.");
        }
    } else {
        alert("All fields are mandatory.");
    }


}