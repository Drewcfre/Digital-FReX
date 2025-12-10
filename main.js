import Room from "./logic/room.js";

const myCanvas = document.getElementById("gameScene");
const ui = document.getElementById("gameUI");
const buttons = document.getElementById("buttonContainer");
const ctx = myCanvas.getContext("2d");

ctx.fillRect(0, 0, 150, 50);
ctx.fillStyle="blue";

let appendURL = "resources/images/";

let roomList = [
    new Room(`${appendURL}commons.png`, "MASCOT", 
        ["Commons:",
            "Answer questions correctly and you'll be able to progress through the school.",
            "Reach the top to win!"], 
        ["Let's go!","Wait, what?","Don't feel like it.","I'll just stay here, thanks."],
        0, true),
    new Room(`${appendURL}coachingRoom.png`, `COACH`, 
        ["Coaching Room:",
            "Hey, do you know which room is only accessible through the coaching room?",
            "It seems important..."], 
        ["Cafeteria", "Ordinary Classroom", "Testing Room", "Server Room"],
        2, true),
    new Room(`image`, "npcs",
        ["Llama Base:",
            "Neumont's got a pretty cool mascot, eh?",
            "Would you happen to know what llama is in hexidecimal?"
        ],
        ["6A6A616D61", "5050515D51", "Hexi-what now?", "6C6C616D61"],
        3, true),
    new Room(`image`, "npcs",
        ["Llama Lounge:",
            "The lounge is a great place to focus and unwind!",
            "Speaking of focus, how long are quarters at Neumont?"
        ],
        ["8 weeks", "10 weeks", "12 weeks", "15 weeks"],
        1, true),
    new Room(`image`, "npcs",
        ["Registrar:",
            "Neumont has tons of classes available to choose from!",
            "Which of the following is NOT a degree program at Neumont?"
        ],
        ["BS Computer Science", "BS Software Engines", "MS Artificial Intelligence", "BS Software & Game Dev"],
        1, true),
    new Room(`image`, "npcs",
        ["Student Store:",
            "Commercialism? Count me in!",
            "How much is the average starting salary for Computer Science graduates in the US?"
        ],
        ["$55k", "$65k", "80k", ">$100k"],
        3, true)
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
            if (roomIndex >= roomList.length - 1) alert("Congrats, you won!")
            else roomIndex++;
            setRoom();
        }
        else alert(cap+" button ("+element.textContent+") was not correct.\nTry again!");
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
    ctx.fillRect((roomIndex%2)*150,100-(Math.floor(roomIndex/2)*50), 150, 50);
}