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