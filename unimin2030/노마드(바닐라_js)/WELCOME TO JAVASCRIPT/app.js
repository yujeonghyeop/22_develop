const h1 = document.querySelector(".hello:first-child h1");

function clickHandleEvent() {
    if (h1.className === "active") {
        h1.className = "";
    } else {
        h1.className = "active";
    }
}

h1.addEventListener("click", clickHandleEvent);


