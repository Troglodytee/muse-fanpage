var titles = [
    "biography",
    "discography",
    "clips",
    "networks",
];

window.addEventListener('scroll', function() {
    if (document.getElementById("header").getBoundingClientRect().top == 0) {document.getElementById("up-arrow").style.display = "none";}
    else {document.getElementById("up-arrow").style.display = "block";}
    let found = 0;
    for (let i = 0; i < titles.length; i++) {
        let element = document.getElementById(titles[i]);
        let position = element.getBoundingClientRect();
        if (!found && position.top >= 0 && position.bottom <= this.window.innerHeight) {
            element.style.textDecoration = "underline";
            found = 1;
        }
        else {element.style.textDecoration = "none";}
    }
});

function scrollToTop() {
    scroll({top: 0, left: 0, behavior: 'smooth'});
    document.getElementById("first-tabindex").focus({preventScroll: "false"});
}