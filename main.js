const rooms = {
    schlafzimmer: {
        positionx: 10,
        positiony: -100,
        width: 17,
        height: 48
    },

    schlafzimmerA: {
        positionx: 10,
        positiony: -100,
        width: 17,
        height: 48
    },
};

let background_img = document.getElementById("background-img")
let room1 = document.getElementsByClassName("room-1")
let room2 = document.getElementsByClassName("room-2")


function hideRooms() {
    room1.style.display = "none"
    room2.style.display = "none"
}
function onClickRoom1() {
    background_img.src = "images/backgrounds/detailansicht_schlafzimmer1.png"
    hideRooms()
}

function onClickRoom2() {
    background_img.src = "images/background/detailansicht_schlafzimmer1.png"
    console.log("Hallo2")
}

function goBack() {
    background_img.src = "images/backgrounds/house_background.png"
}

fu
