import Room from "./logic/room.js";

const myCanvas = document.getElementById("gameScene");
const ui = document.getElementById("gameUI");
const ctx = myCanvas.getContext("2d");

ctx.fillStyle="blue";
ctx.fillRect(0, 0, 150, 50);

let appendURL = "resources/images/";

let roomList = [
    new Room(`${appendURL}commons.png`, "MASCOT", ["Welcome to the Commons!", "How do you like it?"], ["I love it!", "It's okay.", "Not a big fan.", "I'd rather die than stay here"], 1, true),
    new Room(`${appendURL}coachingRoom.png`, `COACH`, ["Hey, welcome to the coaching room!", "Are you new here?"], ["Yeah, I'm a neubie.", "I think so.", "I'm a first-year", "I've been here three years. How do you not know me?"], 1, true),
];

let currentRoom = roomList[0];

setRoom();

function setRoom() {
    ui.children[0].innerHTML = "";
    currentRoom.dialogList.forEach(element => {
        ui.children[0].innerHTML += element+"<br>";
    });
}