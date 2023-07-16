// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");
//아래와 같음
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onloginBtnClick() {
    const username = loginInput.value;
    if (username === "") {
        alert("Write your ID");
    } else if (username.length > 15) {
        alert("Your name is too long");
    }
}

loginButton.addEventListener("click", onloginBtnClick);
