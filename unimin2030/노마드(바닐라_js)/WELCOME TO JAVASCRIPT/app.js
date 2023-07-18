// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");
//아래와 같음
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onloginSubmit(event) {
  event.preventDefault();
  console.log(event);
}

loginForm.addEventListener("submit", onloginSubmit);
