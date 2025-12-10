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
        0, 'Are you sure? Cmon! Lets play',true),
    new Room(`${appendURL}coachingRoom.png`, `COACH`, 
        ["Coaching Room:",
            "Hey, do you know which room is only accessible through the coaching room?",
            "It seems important..."], 
        ["Cafeteria", "Ordinary Classroom", "Testing Room", "Server Room"],
        2, "No, that doesn't sound right, there's gotta be a different room connected",true),
    new Room(`image`, "npcs",
        ["Llama Base:",
            "Neumont's got a pretty cool mascot, eh?",
            "Would you happen to know what llama is in hexidecimal?"
        ],
        ["6A6A616D61", "5050515D51", "Hexi-what now?", "6C6C616D61"],
        3, "Nope! This is a tricky one!", true),
    new Room(`image`,`npcs`,
        ["Classroom",
            "Welcome to the Classroom! You should try a challenge",
            "This wont be the same as the questions before, you'll need to try a little harder!"
        ],
        ["I guess I can try!","No I'm scared!","I don't know...","That seems too hard"],
        0, "Sorry, you gotta try it!"
    ),
    new Room(`image`, "npcs",
        ["Llama Lounge:",
            "The lounge is a great place to focus and unwind!",
            "Speaking of focus, how long are quarters at Neumont?"
        ],
        ["8 weeks", "10 weeks", "12 weeks", "15 weeks"],
        1,"That answer seems off" ,true),
    new Room(`image`, "npcs",
        ["Registrar:",
            "Neumont has tons of classes available to choose from!",
            "Which of the following is NOT a degree program at Neumont?"
        ],
        ["BS Computer Science", "BS Software Engines", "MS Artificial Intelligence", "BS Software & Game Dev"],
        1, "I don't think we teach that here", true),
    new Room(`image`, "npcs",
        ["Student Store:",
            "Commercialism? Count me in!",
            "How much is the average starting salary for Computer Science graduates in the US?"
        ],
        ["$55k", "$65k", "80k", ">$100k"],
        3,"I think it might be more than that" ,true),
    new Room(`image`,`npcs`,
        ["President's Office",
            "Welcome to the President's Office! Can you beat the final challenge and become Neubie Supreme?",
            "This will be your hardest challenge yet, do you think you can do it?"
        ],
        ["I know I can!","No way!","This is way too difficult!","...I cant do it..."],
        0, "Sorry, you gotta try it!"
    ),
];

let currentRoom = roomList[0];
let roomIndex = 0;

setRoom();
normalRoom();

function normalRoom(){
for (let index = 0; index < buttons.children.length; index++) {
    const element = buttons.children[index];
    element.onclick = () => {
        let cap = element.id.charAt(0).toUpperCase() + 
            element.id.slice(1);
        
        if (index == currentRoom.correctAnswer) {
            if(roomIndex == 3){
                puzzleOne();
            }else if(roomIndex == roomList.length - 1){
                finalPuzzle();
            }else if (roomIndex >= roomList.length - 1) alert("Congrats, you won!")
            else {
                roomIndex++;
                setRoom();
            }
            
        }
        else alert(""+currentRoom.incorrectResponse+"\nTry again!");
    }
}
}

function puzzleOne() {
    let puzzleOptions = ["say('${i}: this number is even",'if(i%2 == 0)','i++','Submit']
    currentRoom = roomList[roomIndex]
    ui.children[0].innerHTML = "";
    let challengeDialog = ['Welcome to the challenge! Fill in the psuedocode in the right order to make a for loop that shows even numbers',
        'for(i){','a{','b','}','c','}'
    ]
    let selectionOrder = []
    let correctSelection = [1,0,2]
    challengeDialog.forEach(element => {
        ui.children[0].innerHTML += element+"<br>";
    });

    for (let index = 0; index < buttons.children.length; index++) {
        const element = buttons.children[index];
        element.textContent = puzzleOptions[index];
    }

    ctx.clearRect(0,0,myCanvas.width,myCanvas.height)
    ctx.fillRect((roomIndex%2)*150,112.5-(Math.floor(roomIndex/2)*37.5), 150, 37.5);

    for (let index = 0; index < buttons.children.length; index++) {
    const element = buttons.children[index];
    element.onclick = () => {
        if (index == 3) {
           if(areArraysIdentical(correctSelection,selectionOrder)){
            alert('Correct! You completed the puzzle!')
            roomIndex++;
            setRoom();
            normalRoom();
           }else{
            alert('Incorrect! Try again!')
            selectionOrder = [];
           }
        }else{
             if(selectionOrder.includes(index)){
                alert('You already added this element');
            }else{
                selectionOrder.push(index);
            }
        }
    }
}
}

function areArraysIdentical(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

function finalPuzzle(){
   let puzzleOptions = ["count++",'return count','list[i] == target','Submit']
    currentRoom = roomList[roomIndex]
    ui.children[0].innerHTML = "";
    let challengeDialog = ['Welcome to the final challenge! Fill in the pseudocode in the right order to make a function that counts how many times a target appears in a list.',
        'function(target){','  count = 0','  for each(item in list){','    if(a){','      b','    }','  c','  }','}'
    ]
    let selectionOrder = []
    let correctSelection = [2,0,1]
    challengeDialog.forEach(element => {
        ui.children[0].innerHTML += element+"<br>";
    });

    for (let index = 0; index < buttons.children.length; index++) {
        const element = buttons.children[index];
        element.textContent = puzzleOptions[index];
    }

    ctx.clearRect(0,0,myCanvas.width,myCanvas.height)
    ctx.fillRect((roomIndex%2)*150,112.5-(Math.floor(roomIndex/2)*37.5), 150, 37.5);

    for (let index = 0; index < buttons.children.length; index++) {
    const element = buttons.children[index];
    element.onclick = () => {
        if (index == 3) {
           if(areArraysIdentical(correctSelection,selectionOrder)){
            alert('Correct! You completed the puzzle!\nCongratulations! You beat Digital FReX!')
           }else{
            alert('Incorrect! Try again!')
            selectionOrder = [];
           }
        }else{
             if(selectionOrder.includes(index)){
                alert('You already added this element');
            }else{
                selectionOrder.push(index);
            }
        }
    }
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
    ctx.fillRect((roomIndex%2)*150,112.5-(Math.floor(roomIndex/2)*37.5), 150, 37.5);
}