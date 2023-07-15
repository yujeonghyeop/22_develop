const h1 = document.querySelector(".hello:first-child h1");

function clickHandleEvent() {
    h1.style.color = "blue";
}

function mouseEnterHandleEvent() {
    h1.innerText = "Mouse Entered";
}

function mouseLeaveHandleEvent() {
    h1.innerText = "Mouse Leaved";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "red";
}

function handleWindowCopy() {
    alert("copied");
}

function handleWindowOffline() {
    alert("SOS NO wifi");
}

function handleWindowOnline() {
    alert("WIFI Connected");
}

h1.addEventListener("click", clickHandleEvent);
h1.addEventListener("mouseenter", mouseEnterHandleEvent);
h1.addEventListener("mouseleave", mouseLeaveHandleEvent);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOffline);

