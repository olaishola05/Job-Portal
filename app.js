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

// function myFunction() {
//     let topNav = document.getElementById("topnav");
//     if (topNav.className === "nav") {
//         topNav.className += " responsive";
//     } else {
//         topNav.className = "nav";
//     }
// }
// function getJob() {
//     axios
//         .get("https.com?_limit=20")
//         .then((response) => {
//             console.log("response");
//         })
//         .catch((err) => {
//             console.error(err);
//         });
// }

// document.getElementById("searchBtn").addEventListener("click", getJob);
document.getElementById("submit").addEventListener("click", loginForm);
