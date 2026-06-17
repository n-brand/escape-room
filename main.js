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
let room2 = document.getElementsByClassName("room-4")


function hideRooms() {
    room1.remove()
    room2.remove()
}

function showRooms() {
    room1.style.display = "block"
    room2.style.display = "block"
}


function onClickRoom(imageSrc) {
    background_img.src = imageSrc
    console.log(imageSrc)
    hideRooms()
}

function goBack() {
    background_img.src = "images/backgrounds/house_background.png"
    showRooms()
}
