function hide() {
    var elements = document.getElementsByClassName("hidden-discography");
    for (var i = 0; i < elements.length; i++) {elements[i].classList.add("d-none");}
    document.getElementById("see-more").style.display = "inline";
}

function seeMore() {
    var elements = document.getElementsByClassName("hidden-discography");
    for (var i = 0; i < elements.length; i++) {elements[i].classList.remove("d-none");}
    document.getElementById("see-more").style.display = "none";
}

function switchToAlbums() {
    document.getElementById("albums-button").classList.add("button-active");
    document.getElementById("lives-button").classList.remove("button-active");
    document.getElementById("albums-panel").classList.remove("d-none");
    document.getElementById("lives-panel").classList.add("d-none");
    hide();
}

function switchToLives() {
    document.getElementById("albums-button").classList.remove("button-active");
    document.getElementById("lives-button").classList.add("button-active");
    document.getElementById("albums-panel").classList.add("d-none");
    document.getElementById("lives-panel").classList.remove("d-none");
    hide();
}