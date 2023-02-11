let backendUrl = "https://cast-agency-backend.onrender.com";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common["Access-Control-Allow-Headers"] = "*";
axios.defaults.headers.common["Access-Control-Allow-Methods"] = "*";

const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("register-form");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    if(name.value === "" || email.value === "" || password.value === "") {
        alert("Please provide required information");
        return;
    }

    let data = {
        fullName: name.value,
        email: email.value,
        password: password.value
    };

    axios.post(backendUrl+"/api/auth/register",data)
        .then(response => {
            window.location.href = "./login.html";
            console.log(response);
        }).catch(err => {
            console.log(err);
        })

})