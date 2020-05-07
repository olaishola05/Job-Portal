function inputValidate() {
    let jobType = document.getElementById("jobs");
    let location = document.getElementById("location");

    if (jobType === null || jobType === Number) {
        alert("please fill all required");
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
