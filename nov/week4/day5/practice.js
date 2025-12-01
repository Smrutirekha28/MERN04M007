let registerForm = document.getElementById("register-form");
registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let registerInputs = document.querySelectorAll("#register-form input");
    let userName = registerInputs[0].value;
    let userAge = registerInputs[1].value;
    let userPhone = registerInputs[2].value;
    let userEmail = registerInputs[3].value;
    let userPassword = registerInputs[4].value;

    localStorage.setItem("userData", JSON.stringify({ userName, userAge, userPhone, userEmail, userPassword }));
    alert("successfully submited")

});


let loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let loginInputs = document.querySelectorAll("#login-form input");

    let userEnterEmail = loginInputs[0].value;
    let userEnterPassword = loginInputs[1].value;

    let existingUser = JSON.parse(localStorage.getItem("userData"));

    if (userEnterEmail === existingUser.userEmail) {
        if (userEnterPassword === existingUser.userPassword) {
            console.log("successfully login");
            location.href = "https://qlith.com/"

        } else {
            console.log("invalid password")
        }
    } else {
        console.log("Invalid Email")
    }

    loginForm.reset();
})
