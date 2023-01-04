window.addEventListener('scroll', function() {
    let element = document.getElementById("biography")
    let position = element.getBoundingClientRect();
    if (position.top >= 0 && position.bottom <= this.window.innerHeight) {element.style.textDecoration = "underline";}
    else {element.style.textDecoration = "none";}
});