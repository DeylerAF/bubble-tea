const hamburger = document.querySelector(".hamburger");
hamburger.onclick = function(){
    hamburger.classList.toggle("active");
    const navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}

const navItem = document.querySelector(".nav-item");
navItem.onclick = function(){
    navItem.classList.toggle("active");
}