class Room {
    constructor(backdropURL, roomNPCs, dialogList, dialogResponses, correctAnswer, incorrectResponse,unlocked) {
        this.backdropURL = backdropURL;
        this.roomNPCs = roomNPCs;
        this.dialogList = dialogList;
        this.dialogResponses = dialogResponses;
        this.correctAnswer = correctAnswer;
        this.incorrectResponse = incorrectResponse;
        this.unlocked = unlocked;
    }
}

const filePath = "resources/images";
export const roomList = [
    new Room(
        `${filePath}/locations/commons.png`,
        `${filePath}/characters/encouragingLlamaGuide.png`,
        ["Commons:", "Answer questions correctly and you'll be able to progress through the school.", "Reach the top to win!"],
        ["Let's go!", "Wait, what?", "Don't feel like it.", "I'll just stay here, thanks."],
        0,
        "Are you sure? Cmon! Lets play!",
        true
    ),
    new Room(
        `${filePath}/locations/coachingRoom.png`,
        `${filePath}/characters/talkingLlamaCoach.png`,
        ["Coaching Room:", "Hey, do you know which room is only accessible through the coaching room?", "It seems important..."],
        ["Cafeteria", "Ordinary Classroom", "Testing Room", "Server Room"],
        2,
        "No, that doesn't sound right, there's gotta be a different room connected.",
        true
    ),
    new Room(
        `${filePath}/locations/llamaBase.png`,
        `${filePath}/characters/burk_BSIS.png`,
        ["Llama Base:", "Neumont's got a pretty cool mascot, eh?", "Would you happen to know what llama is in hexadecimal?"],
        ["6A6A616D61", "5050515D51", "Hex-what now?", "6C6C616D61"],
        3,
        "Nope! This is a tricky one!",
        true
    ),
    new Room(
        `${filePath}/locations/classroom.png`,
        `${filePath}/characters/cantera_BSSE.png`,
        ["Classroom:", "Welcome to the Classroom! You should try a challenge", "This wont be the same as the questions before, you'll need to try a little harder!"],
        ["I guess I can try!", "No I'm scared!", "I don't know...", "That seems too hard"],
        0,
        "Sorry, you gotta try it!",
        false
    ),
    new Room(
        `${filePath}/locations/llamaLounge.png`,
        `${filePath}/characters/maple_BSAAI_BSGD.png`,
        ["Llama Lounge:", "The lounge is a great place to focus and unwind!", "Speaking of focus, how long are quarters at Neumont?"],
        ["8 weeks", "10 weeks", "12 weeks", "15 weeks"],
        1,
        "That answer seems off..." ,
        true
    ),
    new Room(
        `${filePath}/locations/registrar.png`,
        `${filePath}/characters/pritchard_MSAAI.png`,
        ["Registrar:", "Neumont has tons of classes available to choose from!", "Which of the following is NOT a degree program at Neumont?"],
        ["BS Computer Science", "BS Software Engines", "MS Artificial Intelligence", "BS Software & Game Dev"],
        1,
        "I think we teach that here...",
        true
    ),
    new Room(
        `${filePath}/locations/store.png`,
        `${filePath}/characters/krebs_BSCS_BSTM.png`,
        ["Student Store:", "Commercialism? Count me in!", "How much is the average starting salary for Computer Science graduates in the US?"],
        ["$55k", "$65k", "80k", ">$100k"],
        3,
        "I think it might be more than that...",
        true
    ),
    new Room(
        `${filePath}/locations/office.png`,
        `${filePath}/characters/neumontPresident.png`,
        ["President's Office", "Welcome to the President's Office! Can you beat the final challenge and become Neubie Supreme?", "This will be your hardest challenge yet, do you think you can do it?"],
        ["I know I can!", "No way!", "This is way too difficult!", "...I cant do it..."],
        0,
        "Sorry, you gotta try it!",
        false
    ),
];