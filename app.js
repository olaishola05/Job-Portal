function LoginForm() {
    let loginBtn = document.getElementById("login");
    alert("you clicked me");
}

function inputValidate() {
    let jobType = document.getElementById("jobs").value;
    let location = document.getElementById("location").value;
    let searchBtn = document.querySelector("#searchBtn");

    if (jobType === null || jobType === Number) {
        if (location === null || location === Number || location.length < 10) {
            searchBtn.disabled = true;
        }
    } else {
        searchBtn.disabled = false;
    }
}

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
document.getElementById("login").addEventListener("click", LoginForm);
