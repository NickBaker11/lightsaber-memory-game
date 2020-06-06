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

