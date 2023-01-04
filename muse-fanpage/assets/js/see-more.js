function seeMore() {
    let elements = document.getElementsByClassName("hidden");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "block";
    }
    document.getElementById("see-more").style.display = "none";
}