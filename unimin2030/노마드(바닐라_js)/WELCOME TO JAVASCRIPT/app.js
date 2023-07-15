const h1 = document.querySelector(".hello:first-child h1");

function clickHandleEvent() {

    const currentColor = h1.style.color;
    let newColor;
    if (currentColor === "blue") {
        newColor = "red";
    } else
        newColor = "blue";
    h1.style.color = newColor;

}

h1.addEventListener("click", clickHandleEvent);


