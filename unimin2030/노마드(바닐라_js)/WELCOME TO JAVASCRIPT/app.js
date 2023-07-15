const title = document.querySelector(".hello:first-child h1");

function clickHandleEvent() {
    title.style.color = "blue";
}

function mouseEnterHandleEvent() {
    title.innerText = "Mouse Entered";
}

function mouseLeaveHandleEvent() {
    title.innerText = "Mouse Leaved";
}


title.addEventListener("click", clickHandleEvent);
title.addEventListener("mouseenter", mouseEnterHandleEvent);
title.addEventListener("mouseleave", mouseLeaveHandleEvent);