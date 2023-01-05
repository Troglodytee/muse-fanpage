function hide() {
    let elements = document.getElementsByClassName("hidden-discography");
    for (let i = 0; i < elements.length; i++) {elements[i].classList.add("d-none");}
    document.getElementById("see-more").style.display = "inline";
}

function switchToAlbums() {
    document.getElementById("albums-button").style.backgroundColor = "white";
    document.getElementById("lives-button").style.backgroundColor = "grey";
    document.getElementById("albums-panel").style.display = "grid";
    document.getElementById("lives-panel").style.display = "none";
    hide();
}

function switchToLives() {
    document.getElementById("albums-button").style.backgroundColor = "grey";
    document.getElementById("lives-button").style.backgroundColor = "white";
    document.getElementById("albums-panel").style.display = "none";
    document.getElementById("lives-panel").style.display = "grid";
    hide();
}