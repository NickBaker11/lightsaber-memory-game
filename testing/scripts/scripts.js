function arrayMatch(sequence, usersequence){
    if((sequence.length) == (usersequence.length)){
        return true;
    }else{return false;
    }
};
function arrayLengthAndOrderMatch(sequence, usersequence){
    var your_result = true;
     for (var i = 0; i < usersequence.length; i++) {
            console.log("i = ", i);
            console.log("usersequence [" + i + "]");
            console.log("sequence[" + i + "]");
            console.log(usersequence);
            console.log(sequence);
            if (sequence[i] == usersequence[i]) {
                 console.log("correct");
                return true;
            }
            else {your_result = false;
}}
  console.log(your_result);
        if (your_result) {  return true }
        else { return false; }
    };

  /*  if (usersequence1.length != sequence1.length) {
 
 } else {
  var your_result = true;
  for (var i = 0; i < usersequence1.length; i++) {
   console.log("i = ", i);
   console.log("usersequence1 [" + i + "]");
   console.log("sequence1[" + i + "]");
   console.log(usersequence1);
   console.log(sequence1);
   if (sequence1[i] == usersequence1[i]) {
    console.log("correct");
   } else {
    your_result = false;
   }
  }
  console.log(your_result)
  if (your_result) {
   $(".level-2-btn").css("pointer-events", "auto");
   alert("Well done! Try a harder challenge on the next level.");
   usersequence1 = [];
  } else {
   alert("Failure is not defeat, focus your mind and try again!");
   usersequence1 = [];
  }
 }
});*/