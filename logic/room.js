export default class Room {
    constructor(backdropURL, roomNPCs, dialogList, dialogResponses, correctAnswer, unlocked) {
        this.backdropURL = backdropURL;
        this.roomNPCs = roomNPCs;
        this.dialogList = dialogList;
        this.dialogResponses = dialogResponses;
        this.correctAnswer = correctAnswer;
        this.unlocked = unlocked;
    }
}