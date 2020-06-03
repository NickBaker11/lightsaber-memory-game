// ------------------------------------------------------------- Themes

$("#ls-btn").click(function () {
    $("body").css("background-color", "blue");
    $(".welcome").hide();
    $("#level-1, .main-title, .name-form-ls, .level-btns,.wookiee, #wookieepedia, .dsreturn, p").show();
});
$("#ds-btn").click(function () {
    $("body").css("background-color", "red");
    $(".welcome").hide();
    $("#level-1, .main-title, .name-form-ds, .level-btns, .wookiee, #wookieepedia, .lsreturn, p").show()
});
$(".dsreturn").click(function(){
    $("body").css("background-color", "red");
    $(".dsreturn, .name-form-ls").hide()
    $(".lsreturn, .name-form-ds").show()
})
$(".lsreturn").click(function(){
    $("body").css("background-color", "blue");
    $(".lsreturn, .name-form-ds").hide()
    $(".dsreturn, .name-form-ls").show()
})
// -------------------------------------------------------------Level Buttons
$(".level-1-btn").click(function () {
    $(".levels").hide();
    $("#level-1").show();
})
$(".level-2-btn").click(function () {
    $(".levels").hide();
    $("#level-2").show();
})
$(".level-3-btn").click(function () {
    $(".levels").hide();
    $("#level-3").show();
})
//---------------------------------------------------------------- 1st Sequence
$("#begin1").click(function () {
    {
        $("#begin1").css("visibility", "hidden")
        // $("#reset1").css("visibility","visible")
        $(".level-1-btn, .level-2-btn, .level-3-btn, .level-4-btn, .level-5-btn, .level-6-btn").css("visibility", "hidden")
    };
    $(".lightsaber-red").css("height", "280px");
    setTimeout(function () {
        $(".lightsaber-red")
            .css("height", "0px");
    }, 2000);
    setTimeout(function () {
        {
            $(".lightsaber-green").css("height", "280px");
            setTimeout(function () {
                $(".lightsaber-green")
                    .css("height", "0px");
            }, 2000)

        }
    }, 2000);
    setTimeout(function () {
        {
            $(".lightsaber-blue").css("height", "280px");
            setTimeout(function () {
                $(".lightsaber-blue")
                    .css("height", "0px");
            }, 2000)
        }
    }, 4000);

    setTimeout(function () {
        {
            $(".lightsaber-red").css("height", "280px");
            setTimeout(function () {
                $(".lightsaber-red")
                    .css("height", "0px");
            }, 2000)
        }
    }, 6000);
    setTimeout(function () {
        {
            $(".lightsaber-blue").css("height", "280px");
            setTimeout(function () {
                $(".lightsaber-blue")
                    .css("height", "0px");
            }, 2000)
        }
    }, 8000);
    setTimeout(function () {
        {
            $(".lightsaber-green").css("height", "280px");
            setTimeout(function () {
                $(".lightsaber-green")
                    .css("height", "0px");
            }, 2000)
        }
    }, 10000);

    setTimeout(function () {
        $("#begin1").css("visibility", "visible")
        $(".level-1-btn, .level-2-btn, .level-3-btn").css("visibility", "visible")
    }, 10000);
});

// ------------------------------------------------------------- 2nd Sequence
$("#begin2").click(function () {
    {
        $("#begin2").css("visibility", "hidden")
        $("#reset2").css("visibility", "visible")
        $(".level-1-btn, .level-2-btn, .level-3-btn").css("visibility", "hidden")
    }
    $(".lightsaber-green").css("height", "280px");
    setTimeout(function () {
        $(".lightsaber-green")
            .css("height", "0px");
    }, 2000);
    setTimeout(function () {
        {
            $(".lightsaber-yellow").css("height", "280px");
            setTimeout(function () {
                $(".lightsaber-yellow")
                    .css("height", "0px");
            }, 2000)
        }
    }, 2000);
    setTimeout(function () {
        {
            $(".lightsaber-blue").css("height", "280px");
            setTimeout(function () {
                $(".lightsaber-blue")
                    .css("height", "0px");
            }, 2000)
        }
    }, 4000);
    setTimeout(function () {
        {
            $(".lightsaber-yellow").css("height", "280px");
            setTimeout(function () {
                $(".lightsaber-yellow")
                    .css("height", "0px");
            }, 2000)
        }
    }, 6000);
    setTimeout(function () {
        {
            $(".lightsaber-red").css("height", "280px");
            setTimeout(function () {
                $(".lightsaber-red")
                    .css("height", "0px");
            }, 2000)
        }
    }, 8000);
    setTimeout(function () {
        {
            $(".lightsaber-green").css("height", "280px");
            setTimeout(function () {
                $(".lightsaber-green")
                    .css("height", "0px");
            }, 2000)
        }
    }, 10000);
    setTimeout(function () {
        {
            $(".lightsaber-red").css("height", "280px");
            setTimeout(function () {
                $(".lightsaber-red")
                    .css("height", "0px");
            }, 2000)
        }
    }, 12000);

    setTimeout(function () {
        $("#begin2").css("visibility", "visible")
        $(".level-1-btn, .level-2-btn, .level-3-btn").css("visibility", "visible")
    }, 14000);
});
// ------------------------------------------------------------- 3rd Sequence
$("#begin3").click(function () {
    {
        $("#begin3").css("visibility", "hidden")
        $("#reset3").css("visibility", "visible")
        $(".level-1-btn, .level-2-btn, .level-3-btn").css("visibility", "hidden")

    };
    {
        $("#begin3").css("visibility", "hidden")
    }
    $(".lightsaber-red").css("height", "280px");
    setTimeout(function () {
        $(".lightsaber-red")
            .css("height", "0px");
    }, 2000);

    setTimeout(function () {
        {
            $(".lightsaber-green").css("height", "280px");
            setTimeout(function () {
                $(".lightsaber-green")
                    .css("height", "0px");
            }, 2000)
        }
    }, 2000);

    setTimeout(function () {
        {
            $(".lightsaber-blue").css("height", "280px");
            setTimeout(function () {
                $(".lightsaber-blue")
                    .css("height", "0px");
            }, 2000)
        }
    }, 4000);

    setTimeout(function () {
        {
            $(".lightsaber-yellow").css("height", "280px");
            setTimeout(function () {
                $(".lightsaber-yellow")
                    .css("height", "0px");
            }, 2000)
        }
    }, 6000);

    setTimeout(function () {
        {
            $(".lightsaber-green").css("height", "280px");
            setTimeout(function () {
                $(".lightsaber-green")
                    .css("height", "0px");
            }, 2000)
        }
    }, 8000);
    setTimeout(function () {
        {
            $(".lightsaber-purple").css("height", "280px");
            setTimeout(function () {
                $(".lightsaber-purple")
                    .css("height", "0px");
            }, 2000)
        }
    }, 10000);
    setTimeout(function () {
        {
            $(".lightsaber-red").css("height", "280px");
            setTimeout(function () {
                $(".lightsaber-red")
                    .css("height", "0px");
            }, 2000)
        }
    }, 12000);
    setTimeout(function () {
        {
            $(".lightsaber-yellow").css("height", "280px");
            setTimeout(function () {
                $(".lightsaber-yellow")
                    .css("height", "0px");
            }, 2000)
        }
    }, 14000);
    setTimeout(function () {
        {
            $(".lightsaber-blue").css("height", "280px");
            setTimeout(function () {
                $(".lightsaber-blue")
                    .css("height", "0px");
            }, 2000)
        }
    }, 16000);
    setTimeout(function () {
        $("#begin3").css("visibility", "visible")
        $(".level-1-btn, .level-2-btn, .level-3-btn").css("visibility", "visible")
    }, 18000);
});
//-------------------------------------------------Lightsaber activate/deactivate function for user

$(".lightsaber-handle-green").click(function () {
    $(".lightsaber-green").css("height", "280px");
    setTimeout(function () {
        $(".lightsaber-green")
            .css("height", "0px");
    }, 2000);
    usersequence1.push(".lightsaber-handle-green");
    console.log(usersequence1, usersequence2);
    
});
$(".lightsaber-handle-red").click(function () {
    $(".lightsaber-red").css("height", "280px");
    setTimeout(function () {
        $(".lightsaber-red")
            .css("height", "0px");
    }, 2000);
    usersequence1.push(".lightsaber-handle-red");
    console.log(usersequence1, usersequence2);
  
});
$(".lightsaber-handle-blue").click(function () {
    $(".lightsaber-blue").css("height", "280px");
    setTimeout(function () {
        $(".lightsaber-blue")
            .css("height", "0px");
    }, 2000);
    usersequence1.push(".lightsaber-handle-blue");
    console.log(usersequence1, usersequence2);
    
});
$(".lightsaber-handle-yellow").click(function () {
    $(".lightsaber-yellow").css("height", "280px");
    setTimeout(function () {
        $(".lightsaber-yellow")
            .css("height", "0px");
    }, 2000);
    usersequence1.push(".lightsaber-handle-yellow");
    console.log(usersequence1, usersequence2);
  
});
$(".lightsaber-handle-purple").click(function () {
    $(".lightsaber-purple").css("height", "280px");
    setTimeout(function () {
        $(".lightsaber-purple")
            .css("height", "0px");
    }, 2000);
    usersequence1.push(".lightsaber-handle-purple");
    console.log(usersequence1);
    console.log(usersequence2);
    console.log(usersequence3);
});
$(".lightsaber-handle-orange").click(function () {
    $(".lightsaber-orange").css("height", "280px");
    setTimeout(function () {
        $(".lightsaber-orange")
            .css("height", "0px");
    }, 2000);
    usersequence1.push(".lightsaber-handle-orange");
    console.log(usersequence1);
    console.log(usersequence2);
    console.log(usersequence3);
});
//-------------------------------------------------Lightsaber sequences user interaction for level 1
var sequence1 = [".lightsaber-handle-red", ".lightsaber-handle-green",
    ".lightsaber-handle-blue", ".lightsaber-handle-red",
    ".lightsaber-handle-blue", ".lightsaber-handle-green"];
var usersequence1 = [];

$(".submit1").click(function () {
    if (usersequence1.length != sequence1.length) {
        alert("You have not activated the correct number of lightsabers. Try again.");
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
        if (your_result) { alert("you win"); usersequence1 = [] }
        else { usersequence1 = []; alert("you lose") }
    }
});
//-------------------------------------------------Lightsaber sequences user interaction for level 2
var sequence2 = [".lightsaber-handle-red", ".lightsaber-handle-yellow",
    ".lightsaber-handle-blue", ".lightsaber-handle-yellow",
    ".lightsaber-handle-red", ".lightsaber-handle-green", ".lightsaber-handle-red"];
var usersequence2 = [];

$(".submit2").click(function () {
    if (usersequence2.length != sequence2.length) {
        alert("You have not activated the correct number of lightsabers. Try again.");
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
        if (your_result2) { alert("you win"); usersequence2 = [] }
        else { usersequence2 = []; alert("you lose") }
    }
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