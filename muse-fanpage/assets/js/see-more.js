function seeMore() {
    let elements = document.getElementsByClassName("hidden-discography");
    for (let i = 0; i < elements.length; i++) {elements[i].classList.remove("d-none");}
    document.getElementById("see-more").style.display = "none";
}