function switchToAlbums() {
    document.getElementById("albums-button").style.backgroundColor = "white";
    document.getElementById("lives-button").style.backgroundColor = "grey";
    document.getElementById("albums-panel").style.display = "grid";
    document.getElementById("lives-panel").style.display = "none";
}

function switchToLives() {
    document.getElementById("albums-button").style.backgroundColor = "grey";
    document.getElementById("lives-button").style.backgroundColor = "white";
    document.getElementById("albums-panel").style.display = "none";
    document.getElementById("lives-panel").style.display = "grid";
}