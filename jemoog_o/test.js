
const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    console.log('title was clicked');
}

function handleMouseEnter() {
    console.log('mouse entered');
}

function handleMouseLeave() {
    console.log('mouse left');
}

title.addEventListener("mouseleave", handleMouseLeave);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("click", handleTitleClick);