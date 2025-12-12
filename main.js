import {roomList} from "./logic/room.js";

const myCanvas = document.getElementById("gameScene");
const ui = document.getElementById("gameUI");
const buttons = document.getElementById("buttonContainer");
const ctx = myCanvas.getContext("2d");


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

            if (index === currentRoom.correctAnswer) {
                if(roomIndex === 3){
                    puzzleOne();
                }else if(roomIndex === roomList.length - 1){
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
    let challengeDialog = ['Welcome to the challenge! Fill in the pseudocode in the right order to make a for loop that shows even numbers',
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

    //ctx.clearRect(0,0,myCanvas.width,myCanvas.height)
    //ctx.fillRect((roomIndex%2)*150,112.5-(Math.floor(roomIndex/2)*37.5), 150, 37.5);

    for (let index = 0; index < buttons.children.length; index++) {
        const element = buttons.children[index];
        element.onclick = () => {
            if (index === 3) {
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

    //ctx.clearRect(0,0,myCanvas.width,myCanvas.height)
    //ctx.fillRect((roomIndex%2)*150,112.5-(Math.floor(roomIndex/2)*37.5), 150, 37.5);

    for (let index = 0; index < buttons.children.length; index++) {
        const element = buttons.children[index];
        element.onclick = () => {
            if (index === 3) {
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

    let backgroundImg = new Image();
    backgroundImg.src = currentRoom.backdropURL;
    backgroundImg.onload = () => ctx.drawImage(backgroundImg, 0, 0, 640, 640);

    let npcImg = new Image();
    npcImg.src = currentRoom.roomNPCs;
    npcImg.onload = () => ctx.drawImage(npcImg, 15, 175, 300, 400);
}