import Room from "./logic/room.js";

const myCanvas = document.getElementById("gameScene");
const ui = document.getElementById("gameUI");
const buttons = document.getElementById("buttonContainer");
const ctx = myCanvas.getContext("2d");

ctx.fillRect(0, 0, 150, 50);
ctx.fillStyle="blue";

let appendURL = "resources/images/";

let roomList = [
    new Room(`${appendURL}commons.png`, "MASCOT", ["Welcome to the Commons!", "How do you like it?"], ["I love it!", "It's okay. (correct)", "Not a big fan.", "I'd rather die than stay here"], 1, true),
    new Room(`${appendURL}coachingRoom.png`, `COACH`, ["Hey, welcome to the coaching room!", "Are you new here?"], ["Yeah, I'm a neubie.", "I think so. (correct)", "I'm a first-year", "I've been here three years. How do you not know me?"], 1, true),
    new Room(`image`, "npcs", ["Dialog"], ["1 (correct)", "2", "3", "4"], 0, true),
    new Room(`image`, "npcs", ["Dialog"], ["1", "2 (correct)", "3", "4"], 1, true),
    new Room(`image`, "npcs", ["Dialog"], ["1", "2", "3 (correct)", "4"], 2, true),
    new Room(`image`, "npcs", ["Dialog"], ["1", "2", "3", "4 (correct)"], 3, true),
];

let currentRoom = roomList[0];
let roomIndex = 0;

setRoom();

for (let index = 0; index < buttons.children.length; index++) {
    const element = buttons.children[index];
    element.onclick = () => {
        let cap = element.id.charAt(0).toUpperCase() + 
            element.id.slice(1);
        
        if (index == currentRoom.correctAnswer) {
            roomIndex = Math.min(roomList.length-1, roomIndex+1);
            setRoom();
        }
        else alert(cap+" ("+element.textContent+") button was not correct, try again!");
    }
}

function setRoom() {
    currentRoom = roomList[roomIndex];

    ui.children[0].innerHTML = "";
    currentRoom.dialogList.forEach(element => {
        ui.children[0].innerHTML += element+"<br>";
    });

    for (let index = 0; index < buttons.children.length; index++) {
        const element = buttons.children[index];
        element.textContent = currentRoom.dialogResponses[index];
    }

    ctx.clearRect(0,0,myCanvas.width,myCanvas.height)
    ctx.fillRect((roomIndex%2)*150,Math.floor(roomIndex/2)*50, 150, 50);
}