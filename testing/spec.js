describe("Do my arrays match function", function arrayMatch(){


var sequence = [".lightsaber-handle-red", ".lightsaber-handle-green",
    ".lightsaber-handle-blue", ".lightsaber-handle-red",
    ".lightsaber-handle-blue", ".lightsaber-handle-green"];
var usersequence = [];

$(".submit1").click(function () {
    if (usersequence.length != sequence.length) {
        alert("You have not activated the correct number of lightsabers. Try again.");
    } else {
        var your_result = true;
        for (var i = 0; i < usersequence.length; i++) {
            console.log("i = ", i);
            console.log("usersequence [" + i + "]");
            console.log("sequence[" + i + "]");
            console.log(usersequence);
            console.log(sequence);
            if (sequence[i] == usersequence[i]) {
                console.log("correct");
            }
            else {
                your_result = false;
            }
        }
        console.log(your_result)
        if (your_result) { alert("you win"); usersequence = [] }
        else { usersequence = []; alert("you lose") }
    }
});})