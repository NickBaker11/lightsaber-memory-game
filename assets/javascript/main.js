// ------------------------------------------------------------- Themes
$("#ls-btn").click(function () {
    $("body").css("background-color", "blue");
    $(".welcome").hide();
    $("#level-1, .main-title, .form, .name-form-ls, .level-btns,.wookiee, #wookieepedia, .dsreturn, p, #lukesw-img").show();
    $("#lukesw-img").css("display", "flex"); //Display flex added to have image to the left whilst other image remains to right of screen, design choice.
    alert("Welcome to the Jedi Acadamy young one. Click 'Begin your training' to be shown the correct sequence. Then you may try to enter the correct seqeunce a hit 'Submit' when you are finished. Good luck!");
});
$("#ds-btn").click(function () {
    $("body").css("background-color", "red");
    $(".welcome, .name-form-ls").hide();
    $("#level-1, .main-title, .form, .name-form-ds, .level-btns, .wookiee, #wookieepedia, .lsreturn, p, #vader-img").show();
    alert("Welcome to the Sith Temple apprentice. Click 'Begin your training' to be shown the correct sequence. Then you will then enter the correct seqeunce a hit 'Submit' when you are finished. Do not fail!");
});
$(".dsreturn").click(function(){
    $("body").css("background-color", "red");
    $(".dsreturn, .name-form-ls, #lukesw-img, .name-form-ls").hide()
    $(".lsreturn, .name-form-ds, #vader-img").show()
})
$(".lsreturn").click(function(){
    $("body").css("background-color", "blue");
    $(".lsreturn, .name-form-ds, #vader-img").hide()
    $(".dsreturn, .name-form-ls, #lukesw-img").show()
    $("#lukesw-img").css("display", "flex"); //Display flex added to have image to the left whilst other image remains to right of screen, design choice.
})
// -------------------------------------------------------------Level Buttons
$(".level-1-btn").click(function () {
    $(".levels").hide();
    $("#level-1").show();
    usersequence1 = [];
    usersequence2 = [];
    usersequence3 = [];
})
$(".level-2-btn").click(function () {
    $(".levels").hide();
    $("#level-2").show();
    usersequence1 = [];
    usersequence2 = [];
    usersequence3 = [];
})
$(".level-3-btn").click(function () {
    $(".levels").hide();
    $("#level-3").show();
    usersequence1 = [];
    usersequence2 = [];
    usersequence3 = [];
})
/*---------------------------------------------------------------- 1st Sequence------For my sequences I used 2
 setTimeouts for each lightsaber. The first is how long the lightsabers are 'active' for and the second is when 
  they are activated, increasing the amount of time incrementally to give the user a sequence to follow*/
$("#begin1").click(function () {
    {
        $("#begin1").css("visibility", "hidden")
        // $("#reset1").css("visibility","visible")
        $(".level-1-btn, .level-2-btn, .level-3-btn, .level-4-btn, .level-5-btn, .level-6-btn").css("visibility", "hidden")
        $(".lightsaber-handles").css("pointer-events","none");
    };
    $(".lightsaber-red").css("height", "280px");
    setTimeout(function () {
        $(".lightsaber-red")
            .css("height", "0px");
    }, 1000);
    setTimeout(function () {
        {
            $(".lightsaber-green").css("height", "280px");
            setTimeout(function () {
                $(".lightsaber-green")
                    .css("height", "0px");
            }, 1000)

        }
    }, 2000);
    setTimeout(function () {
        {
            $(".lightsaber-blue").css("height", "280px");
            setTimeout(function () {
                $(".lightsaber-blue")
                    .css("height", "0px");
            }, 1000)
        }
    }, 4000);
    setTimeout(function () {
        {
            $(".lightsaber-red").css("height", "280px");
            setTimeout(function () {
                $(".lightsaber-red")
                    .css("height", "0px");
            }, 1000)
        }
    }, 6000);
    setTimeout(function () {
        {
            $(".lightsaber-blue").css("height", "280px");
            setTimeout(function () {
                $(".lightsaber-blue")
                    .css("height", "0px");
            }, 1000)
        }
    }, 8000);
    setTimeout(function () {
        {
            $(".lightsaber-green").css("height", "280px");
            setTimeout(function () {
                $(".lightsaber-green")
                    .css("height", "0px");
            }, 1000)
        }
    }, 10000);

    setTimeout(function () {
        $("#begin1").css("visibility", "visible")
        $(".level-1-btn, .level-2-btn, .level-3-btn").css("visibility", "visible")
        $(".lightsaber-handles").css("pointer-events","auto");
    }, 10000);
});
// ------------------------------------------------------------- 2nd Sequence
$("#begin2").click(function () {
    {
        $("#begin2").css("visibility", "hidden")
        $("#reset2").css("visibility", "visible")
        $(".level-1-btn, .level-2-btn, .level-3-btn").css("visibility", "hidden")
        $(".lightsaber-handles").css("pointer-events","none");
    }
    $(".lightsaber-green").css("height", "280px");
    setTimeout(function () {
        $(".lightsaber-green")
            .css("height", "0px");
    }, 1000);
    setTimeout(function () {
        {
            $(".lightsaber-yellow").css("height", "280px");
            setTimeout(function () {
                $(".lightsaber-yellow")
                    .css("height", "0px");
            }, 1000)
        }
    }, 2000);
    setTimeout(function () {
        {
            $(".lightsaber-blue").css("height", "280px");
            setTimeout(function () {
                $(".lightsaber-blue")
                    .css("height", "0px");
            }, 1000)
        }
    }, 4000);
    setTimeout(function () {
        {
            $(".lightsaber-yellow").css("height", "280px");
            setTimeout(function () {
                $(".lightsaber-yellow")
                    .css("height", "0px");
            }, 1000)
        }
    }, 6000);
    setTimeout(function () {
        {
            $(".lightsaber-red").css("height", "280px");
            setTimeout(function () {
                $(".lightsaber-red")
                    .css("height", "0px");
            }, 1000)
        }
    }, 8000);
    setTimeout(function () {
        {
            $(".lightsaber-green").css("height", "280px");
            setTimeout(function () {
                $(".lightsaber-green")
                    .css("height", "0px");
            }, 1000)
        }
    }, 10000);
    setTimeout(function () {
        {
            $(".lightsaber-red").css("height", "280px");
            setTimeout(function () {
                $(".lightsaber-red")
                    .css("height", "0px");
            }, 1000)
        }
    }, 12000);

    setTimeout(function () {
        $("#begin2").css("visibility", "visible")
        $(".level-1-btn, .level-2-btn, .level-3-btn").css("visibility", "visible")
        $(".lightsaber-handles").css("pointer-events","auto");
    }, 14000);
});
// ------------------------------------------------------------- 3rd Sequence
$("#begin3").click(function () {
    {
        $("#begin3").css("visibility", "hidden")
        $("#reset3").css("visibility", "visible")
        $(".level-1-btn, .level-2-btn, .level-3-btn").css("visibility", "hidden")
        $(".lightsaber-handles").css("pointer-events","none");
    };
    {
        $("#begin3").css("visibility", "hidden")
    }
    $(".lightsaber-purple").css("height", "280px");
    setTimeout(function () {
        $(".lightsaber-purple")
            .css("height", "0px");
    }, 1000);
    setTimeout(function () {
        {
            $(".lightsaber-green").css("height", "280px");
            setTimeout(function () {
                $(".lightsaber-green")
                    .css("height", "0px");
            }, 1000)
        }
    }, 2000);
    setTimeout(function () {
        {
            $(".lightsaber-blue").css("height", "280px");
            setTimeout(function () {
                $(".lightsaber-blue")
                    .css("height", "0px");
            }, 1000)
        }
    }, 4000);
    setTimeout(function () {
        {
            $(".lightsaber-yellow").css("height", "280px");
            setTimeout(function () {
                $(".lightsaber-yellow")
                    .css("height", "0px");
            }, 1000)
        }
    }, 6000);
    setTimeout(function () {
        {
            $(".lightsaber-green").css("height", "280px");
            setTimeout(function () {
                $(".lightsaber-green")
                    .css("height", "0px");
            }, 1000)
        }
    }, 8000);
    setTimeout(function () {
        {
            $(".lightsaber-orange").css("height", "280px");
            setTimeout(function () {
                $(".lightsaber-orange")
                    .css("height", "0px");
            }, 1000)
        }
    }, 10000);
    setTimeout(function () {
        {
            $(".lightsaber-red").css("height", "280px");
            setTimeout(function () {
                $(".lightsaber-red")
                    .css("height", "0px");
            }, 1000)
        }
    }, 12000);
    setTimeout(function () {
        {
            $(".lightsaber-blue").css("height", "280px");
            setTimeout(function () {
                $(".lightsaber-blue")
                    .css("height", "0px");
            }, 1000)
        }
    }, 14000);
    setTimeout(function () {
        {
            $(".lightsaber-orange").css("height", "280px");
            setTimeout(function () {
                $(".lightsaber-orange")
                    .css("height", "0px");
            }, 1000)
        }
    }, 16000);
    setTimeout(function () {
        $("#begin3").css("visibility", "visible")
        $(".level-1-btn, .level-2-btn, .level-3-btn").css("visibility", "visible")
        $(".lightsaber-handles").css("pointer-events","auto");
    }, 18000);
});
//-------------------------------------------------Lightsaber activate/deactivate function for user. 
$(".lightsaber-handle-green").click(function () {
    $(".lightsaber-green").css("height", "280px");
    setTimeout(function () {
        $(".lightsaber-green")
            .css("height", "0px");
    }, 1000);
    usersequence1.push(".lightsaber-handle-green");
    usersequence2.push(".lightsaber-handle-green");
    usersequence3.push(".lightsaber-handle-green");
    console.log(usersequence1, usersequence2);
});
$(".lightsaber-handle-red").click(function () {
    $(".lightsaber-red").css("height", "280px");
    setTimeout(function () {
        $(".lightsaber-red")
            .css("height", "0px");
    }, 1000);
    usersequence1.push(".lightsaber-handle-red");
    usersequence2.push(".lightsaber-handle-red");
    usersequence3.push(".lightsaber-handle-red");
    console.log(usersequence1, usersequence2);
});
$(".lightsaber-handle-blue").click(function () {
    $(".lightsaber-blue").css("height", "280px");
    setTimeout(function () {
        $(".lightsaber-blue")
            .css("height", "0px");
    }, 1000);
    usersequence1.push(".lightsaber-handle-blue");
    usersequence2.push(".lightsaber-handle-blue");
    usersequence3.push(".lightsaber-handle-blue");
    console.log(usersequence1, usersequence2);    
});
$(".lightsaber-handle-yellow").click(function () {
    $(".lightsaber-yellow").css("height", "280px");
    setTimeout(function () {
        $(".lightsaber-yellow")
            .css("height", "0px");
    }, 1000);
    usersequence1.push(".lightsaber-handle-yellow");
    usersequence2.push(".lightsaber-handle-yellow");
    usersequence3.push(".lightsaber-handle-yellow");
    console.log(usersequence1, usersequence2); 
});
$(".lightsaber-handle-purple").click(function () {
    $(".lightsaber-purple").css("height", "280px");
    setTimeout(function () {
        $(".lightsaber-purple")
            .css("height", "0px");
    }, 1000);
    usersequence1.push(".lightsaber-handle-purple");
    usersequence2.push(".lightsaber-handle-purple");
    usersequence3.push(".lightsaber-handle-purple");
    console.log(usersequence1);
    console.log(usersequence2);
});
$(".lightsaber-handle-orange").click(function () {
    $(".lightsaber-orange").css("height", "280px");
    setTimeout(function () {
        $(".lightsaber-orange")
            .css("height", "0px");
    }, 1000);
    usersequence1.push(".lightsaber-handle-orange");
    usersequence2.push(".lightsaber-handle-orange");
    usersequence3.push(".lightsaber-handle-orange");
    console.log(usersequence1);
    console.log(usersequence2);
    console.log(usersequence3);
});
//-------------------------------------------------Lightsaber sequences user interaction for level 1
var sequence1 = [".lightsaber-handle-red", ".lightsaber-handle-green",
    ".lightsaber-handle-blue", ".lightsaber-handle-red",
    ".lightsaber-handle-blue", ".lightsaber-handle-green"];
var usersequence1 = [];

$(".submit1").click(function() {
    if (usersequence1.length != sequence1.length) { 
        alert("You have not activated the correct number of lightsabers. Try again!"); usersequence1 = [];
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
            }
            else {
                your_result = false;
            }
        }
        console.log(your_result)
        if (your_result) { alert("Well done! Try a harder challenge on the next level."); usersequence1 = [] }
        else {alert("Failure is not defeat, try again!"); usersequence1 = []; }
    }
});
//-------------------------------------------------Lightsaber sequences user interaction for level 2
var sequence2 = [".lightsaber-handle-green", ".lightsaber-handle-yellow",
    ".lightsaber-handle-blue", ".lightsaber-handle-yellow",
    ".lightsaber-handle-red", ".lightsaber-handle-green", ".lightsaber-handle-red"];
var usersequence2 = [];

$(".submit2").click(function() {
    if (usersequence2.length != sequence2.length) { 
        alert("You have not activated the correct number of lightsabers. Try again."); usersequence2 = [];
    } else {
        var your_result2 = true;
        for (var i = 0; i < usersequence2.length; i++) {
            console.log("i = ", i);
            console.log("usersequence2 [" + i + "]");
            console.log("sequence2[" + i + "]");
            console.log(usersequence2);
            console.log(sequence2);
            if (sequence2[i] == usersequence2[i]) {
                console.log("correct");
            }
            else {
                your_result2 = false;
            }
        }
        console.log(your_result2);
        if (your_result2) { alert("Well done! Try a harder challenge on the next level."); usersequence2 = [] }
        else {alert("Failure is not defeat, try again!");  }
    }usersequence2 = [];
});
var sequence3 = [".lightsaber-handle-purple", ".lightsaber-handle-green", ".lightsaber-handle-blue", ".lightsaber-handle-yellow", 
    ".lightsaber-handle-green", ".lightsaber-handle-orange", ".lightsaber-handle-red", ".lightsaber-handle-blue", ".lightsaber-handle-orange"];
var usersequence3 = [];

$(".submit3").click(function() {
    if (usersequence3.length != sequence3.length) { usersequence3 = [];
        alert("You have not activated the correct number of lightsabers. Try again.");
    } else {
        var your_result3 = true;
        for (var i = 0; i < usersequence3.length; i++) {
            console.log("i = ", i);
            console.log("usersequence3 [" + i + "]");
            console.log("sequence3[" + i + "]");
            console.log(usersequence3);
            console.log(sequence3);
            if (sequence3[i] == usersequence3[i]) {
                console.log("correct");
            }
            else {
                your_result3 = false;
            }
        }
        console.log(your_result3);
        if (your_result3) { alert("Well done! Your training is complete!"); usersequence3 = [] }
        else {  alert("Failure is not defeat, try again!"); }
    } usersequence3 = [];
});
//-------------------------------------------------Active buton so user knows whihch level they are on 

var btnContainer = document.getElementById("lvl-btns");
var btns = btnContainer.getElementsByClassName("l-btns");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}