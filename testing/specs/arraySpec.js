describe("arrayLengthMatch", function(){
        describe("Array length test", function(){
            it("should return true", function(){
                expect (arrayMatch (usersequence, sequence)).toBe(true)
            })
        })
});
describe("arrayLengthAndOrderMatch", function(){
        describe("Array length and order test", function(){
            it("should return true", function(){
                expect (arrayLengthAndOrderMatch (usersequence, sequence)).toBe(true)
            })
        })
})

var sequence = [".lightsaber-handle-red", ".lightsaber-handle-green",
    ".lightsaber-handle-blue", ".lightsaber-handle-red",
    ".lightsaber-handle-blue", ".lightsaber-handle-green"];
var usersequence = [".lightsaber-handle-green", ".lightsaber-handle-red", 
    ".lightsaber-handle-blue", ".lightsaber-handle-red",
    ".lightsaber-handle-blue", ".lightsaber-handle-green"];

/* if (usersequence.length != sequence.length) {
    
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
        if (your_result) {  usersequence = [] }
        else { usersequence = []; }
    }
});

*/