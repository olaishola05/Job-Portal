function loginForm() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email == null || email == Number || email == "") {
        alert("pls fill in the required info");
        return false;
    }

    if (password.length < 6) {
        alert("pls provide a  password that match");
        return false;
    }
}

document.getElementById("submit").addEventListener("click", loginForm);
