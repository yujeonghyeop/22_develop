const title = document.querySelector(".hello:first-child h1");

function clickHandleEvent() {
    console.log("click ");
}

title.style.color = "red"

title.addEventListener("click ", clickHandleEvent);