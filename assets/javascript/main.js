$(".sumbit").click(function () {
    $(".text-box").hide()
})
// ------------------------------------------------------------- Themes

$("#ls-btn").click(function () {
    $("body").css("background-color", "blue");
    $(".welcome").hide();
    $("#level-1, .main-title, .name-form-ls, .level-btns").show()

});
$("#ds-btn").click(function () {
    $("body").css("background-color", "red");
    $(".welcome").hide();
    $("#level-1, .main-title, .name-form-ds, .level-btns").show()
});

/*$(".sumbit").click(function() {
    $(".form-text").hide()
        $(".text-box").hide()
})*/


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
$(".level-4-btn").click(function () {
    $("#level-3").show();
    $(".levels").hide();
})
$(".level-5-btn").click(function () {
    $(".levels").hide();
    $("#level-5").show();
})
$(".level-6-btn").click(function () {
    $(".levels").hide();
    $("#level-6").show();
})
// ------------------------------------------------------------- 1st Sequence
$("#begin1").click(function () {
    {
        $("#begin1").css("visibility", "hidden")
        // $("#reset1").css("visibility","visible")
        $(".level-1-btn, .level-2-btn, .level-3-btn, .level-4-btn, .level-5-btn, .level-6-btn").css("visibility", "hidden")
    };

    $(".lightsaber-red").css("height", "100px");
    setTimeout(function () {
        $(".lightsaber-red")
            .css("height", "0px");
    }, 2000);

    setTimeout(function () {
        {
            $(".lightsaber-green").css("height", "100px");
            setTimeout(function () {
                $(".lightsaber-green")
                    .css("height", "0px");
            }, 2000)

        }
    }, 2000);


    setTimeout(function () {
        {
            $(".lightsaber-blue").css("height", "100px");
            setTimeout(function () {
                $(".lightsaber-blue")
                    .css("height", "0px");
            }, 2000)
        }
    }, 4000);

    setTimeout(function () {
        {
            $(".lightsaber-yellow").css("height", "100px");
            setTimeout(function () {
                $(".lightsaber-yellow")
                    .css("height", "0px");
            }, 2000)
        }
    }, 6000);

    setTimeout(function () {
        {
            $(".lightsaber-green").css("height", "100px");
            setTimeout(function () {
                $(".lightsaber-green")
                    .css("height", "0px");
            }, 2000)
        }
    }, 8000);

    setTimeout(function () {
        $("#begin1").css("visibility", "visible")
        $(".level-1-btn, .level-2-btn, .level-3-btn, .level-4-btn, .level-5-btn, .level-6-btn").css("visibility", "visible")
    }, 10000);
});


/*$("#reset1").click (function(clearTimeout){
    
    $("#reset1").css("visibility","hidden")
    $("#begin1").css("visibility","visible")
    $(".level-1-btn").css("visibility","visible")
    $(".level-2-btn").css("visibility","visible")
    $(".level-3-btn").css("visibility","visible")
    $(".level-4-btn").css("visibility","visible")
    $(".level-5-btn").css("visibility","visible")
    $(".level-6-btn").css("visibility","visible")
  }); */
// ------------------------------------------------------------- 2nd Sequence
$("#begin2").click(function () {
    {
        $("#begin2").css("visibility", "hidden")
        $("#reset2").css("visibility", "visible")
        $(".level-1-btn, .level-2-btn, .level-3-btn, .level-4-btn, .level-5-btn, .level-6-btn").css("visibility", "hidden")
    }
    $(".lightsaber-purple").css("height", "100px");
    setTimeout(function () {
        $(".lightsaber-purple")
            .css("height", "0px");
    }, 2000);

    setTimeout(function () {
        {
            $(".lightsaber-yellow").css("height", "100px");
            setTimeout(function () {
                $(".lightsaber-yellow")
                    .css("height", "0px");
            }, 2000)
        }
    }, 2000);

    setTimeout(function () {
        {
            $(".lightsaber-blue").css("height", "100px");
            setTimeout(function () {
                $(".lightsaber-blue")
                    .css("height", "0px");
            }, 2000)
        }
    }, 4000);

    setTimeout(function () {
        {
            $(".lightsaber-yellow").css("height", "100px");
            setTimeout(function () {
                $(".lightsaber-yellow")
                    .css("height", "0px");
            }, 2000)
        }
    }, 6000);

    setTimeout(function () {
        {
            $(".lightsaber-red").css("height", "100px");
            setTimeout(function () {
                $(".lightsaber-red")
                    .css("height", "0px");
            }, 2000)
        }
    }, 8000);
    setTimeout(function () {
        {
            $(".lightsaber-green").css("height", "100px");
            setTimeout(function () {
                $(".lightsaber-green")
                    .css("height", "0px");
            }, 2000)
        }
    }, 10000);
    setTimeout(function () {
        {
            $(".lightsaber-red").css("height", "100px");
            setTimeout(function () {
                $(".lightsaber-red")
                    .css("height", "0px");
            }, 2000)
        }
    }, 12000);

    setTimeout(function () {
        $("#begin2").css("visibility", "visible")
        $(".level-1-btn, .level-2-btn, .level-3-btn, .level-4-btn, .level-5-btn, .level-6-btn").css("visibility", "visible")
    }, 14000);
});
/* $("#reset2").click (function(){
   $("#reset2").css("visibility","hidden")
   $("#begin2").css("visibility","visible")
   $(".level-1-btn").css("visibility","visible")
   $(".level-2-btn").css("visibility","visible")
   $(".level-3-btn").css("visibility","visible")
   $(".level-4-btn").css("visibility","visible")
   $(".level-5-btn").css("visibility","visible")
   $(".level-6-btn").css("visibility","visible")
 });*/

// ------------------------------------------------------------- 3rd Sequence
$("#begin3").click(function () {
    {
        $("#begin3").css("visibility", "hidden")
        $("#reset3").css("visibility", "visible")
        $(".level-1-btn, .level-2-btn, .level-3-btn, .level-4-btn, .level-5-btn, .level-6-btn").css("visibility", "hidden")

    };
    {
        $("#begin3").css("visibility", "hidden")
    }
    $(".lightsaber-red").css("height", "100px");
    setTimeout(function () {
        $(".lightsaber-red")
            .css("height", "0px");
    }, 2000);

    setTimeout(function () {
        {
            $(".lightsaber-green").css("height", "100px");
            setTimeout(function () {
                $(".lightsaber-green")
                    .css("height", "0px");
            }, 2000)
        }
    }, 2000);

    setTimeout(function () {
        {
            $(".lightsaber-blue").css("height", "100px");
            setTimeout(function () {
                $(".lightsaber-blue")
                    .css("height", "0px");
            }, 2000)
        }
    }, 4000);

    setTimeout(function () {
        {
            $(".lightsaber-yellow").css("height", "100px");
            setTimeout(function () {
                $(".lightsaber-yellow")
                    .css("height", "0px");
            }, 2000)
        }
    }, 6000);

    setTimeout(function () {
        {
            $(".lightsaber-green").css("height", "100px");
            setTimeout(function () {
                $(".lightsaber-green")
                    .css("height", "0px");
            }, 2000)
        }
    }, 8000);
    setTimeout(function () {
        {
            $(".lightsaber-purple").css("height", "100px");
            setTimeout(function () {
                $(".lightsaber-purple")
                    .css("height", "0px");
            }, 2000)
        }
    }, 10000);
    setTimeout(function () {
        {
            $(".lightsaber-red").css("height", "100px");
            setTimeout(function () {
                $(".lightsaber-red")
                    .css("height", "0px");
            }, 2000)
        }
    }, 12000);
    setTimeout(function () {
        {
            $(".lightsaber-yellow").css("height", "100px");
            setTimeout(function () {
                $(".lightsaber-yellow")
                    .css("height", "0px");
            }, 2000)
        }
    }, 14000);
    setTimeout(function () {
        {
            $(".lightsaber-blue").css("height", "100px");
            setTimeout(function () {
                $(".lightsaber-blue")
                    .css("height", "0px");
            }, 2000)
        }
    }, 16000);
    setTimeout(function () {
        $("#begin3").css("visibility", "visible")
        $(".level-1-btn, .level-2-btn, .level-3-btn, .level-4-btn, .level-5-btn, .level-6-btn").css("visibility", "visible")
    }, 18000);
});
/* $("#reset3").click (function(){
   $("#reset3").css("visibility","hidden")
   $("#begin3").css("visibility","visible")
   $(".level-1-btn").css("visibility","visible")
   $(".level-2-btn").css("visibility","visible")
   $(".level-3-btn").css("visibility","visible")
   $(".level-4-btn").css("visibility","visible")
   $(".level-5-btn").css("visibility","visible")
   $(".level-6-btn").css("visibility","visible")
 });*/

// ------------------------------------------------------------- 4th Sequence
$("#begin4").click(function () {
    {
        $("#begin4").css("visibility", "hidden")
        $("#reset4").css("visibility", "visible")
        $(".level-1-btn, .level-2-btn, .level-3-btn, .level-4-btn, .level-5-btn, .level-6-btn").css("visibility", "hidden")

    }
    $(".lightsaber-green").css("height", "100px");
    setTimeout(function () {
        $(".lightsaber-green")
            .css("height", "0px");
    }, 2000);

    setTimeout(function () {
        {
            $(".lightsaber-orange").css("height", "100px");
            setTimeout(function () {
                $(".lightsaber-orange")
                    .css("height", "0px");
            }, 2000)
        }
    }, 2000);

    setTimeout(function () {
        {
            $(".lightsaber-blue").css("height", "100px");
            setTimeout(function () {
                $(".lightsaber-blue")
                    .css("height", "0px");
            }, 2000)
        }
    }, 4000);

    setTimeout(function () {
        {
            $(".lightsaber-yellow").css("height", "100px");
            setTimeout(function () {
                $(".lightsaber-yellow")
                    .css("height", "0px");
            }, 2000)
        }
    }, 6000);

    setTimeout(function () {
        {
            $(".lightsaber-red").css("height", "100px");
            setTimeout(function () {
                $(".lightsaber-red")
                    .css("height", "0px");
            }, 2000)
        }
    }, 8000);
    setTimeout(function () {
        {
            $(".lightsaber-green").css("height", "100px");
            setTimeout(function () {
                $(".lightsaber-green")
                    .css("height", "0px");
            }, 2000)
        }
    }, 10000);
    setTimeout(function () {
        {
            $(".lightsaber-red").css("height", "100px");
            setTimeout(function () {
                $(".lightsaber-red")
                    .css("height", "0px");
            }, 2000)
        }
    }, 12000);
    setTimeout(function () {
        {
            $(".lightsaber-orange").css("height", "100px");
            setTimeout(function () {
                $(".lightsaber-orange")
                    .css("height", "0px");
            }, 2000)
        }
    }, 14000);
    setTimeout(function () {
        {
            $(".lightsaber-purple").css("height", "100px");
            setTimeout(function () {
                $(".lightsaber-purple")
                    .css("height", "0px");
            }, 2000)
        }
    }, 16000);
    setTimeout(function () {
        {
            $(".lightsaber-blue").css("height", "100px");
            setTimeout(function () {
                $(".lightsaber-blue")
                    .css("height", "0px");
            }, 2000)
        }
    }, 18000);
    setTimeout(function () {
        $("#begin4").css("visibility", "visible")
        $(".level-1-btn, .level-2-btn, .level-3-btn, .level-4-btn, .level-5-btn, .level-6-btn").css("visibility", "visible")
    }, 20000);
    /*$("#reset4").click (function(){
      $("#reset4").css("visibility","hidden")
      $("#begin4").css("visibility","visible")
      $(".level-1-btn").css("visibility","visible")
      $(".level-2-btn").css("visibility","visible")
      $(".level-3-btn").css("visibility","visible")
      $(".level-4-btn").css("visibility","visible")
      $(".level-5-btn").css("visibility","visible")
      $(".level-6-btn").css("visibility","visible")
    });*/
});
// ------------------------------------------------------------- 5th Sequence
$("#begin5").click(function () {
    {
        $("#begin5").css("visibility", "hidden")
        $("#reset5").css("visibility", "visible")
        $(".level-1-btn, .level-2-btn, .level-3-btn, .level-4-btn, .level-5-btn, .level-6-btn").css("visibility", "hidden")

    }
    $(".lightsaber-orange").css("height", "100px");
    setTimeout(function () {
        $(".lightsaber-orange")
            .css("height", "0px");
    }, 2000);

    setTimeout(function () {
        {
            $(".lightsaber-yellow").css("height", "100px");
            setTimeout(function () {
                $(".lightsaber-yellow")
                    .css("height", "0px");
            }, 2000)
        }
    }, 2000);

    setTimeout(function () {
        {
            $(".lightsaber-red").css("height", "100px");
            setTimeout(function () {
                $(".lightsaber-red")
                    .css("height", "0px");
            }, 2000)
        }
    }, 4000);

    setTimeout(function () {
        {
            $(".lightsaber-green").css("height", "100px");
            setTimeout(function () {
                $(".lightsaber-green")
                    .css("height", "0px");
            }, 2000)
        }
    }, 6000);

    setTimeout(function () {
        {
            $(".lightsaber-blue").css("height", "100px");
            setTimeout(function () {
                $(".lightsaber-blue")
                    .css("height", "0px");
            }, 2000)
        }
    }, 8000);
    setTimeout(function () {
        {
            $(".lightsaber-green").css("height", "100px");
            setTimeout(function () {
                $(".lightsaber-green")
                    .css("height", "0px");
            }, 2000)
        }
    }, 10000);
    setTimeout(function () {
        {
            $(".lightsaber-blue").css("height", "100px");
            setTimeout(function () {
                $(".lightsaber-blue")
                    .css("height", "0px");
            }, 2000)
        }
    }, 12000);
    setTimeout(function () {
        {
            $(".lightsaber-orange").css("height", "100px");
            setTimeout(function () {
                $(".lightsaber-orange")
                    .css("height", "0px");
            }, 2000)
        }
    }, 14000);
    setTimeout(function () {
        {
            $(".lightsaber-blue").css("height", "100px");
            setTimeout(function () {
                $(".lightsaber-blue")
                    .css("height", "0px");
            }, 2000)
        }
    }, 16000);
    setTimeout(function () {
        {
            $(".lightsaber-red").css("height", "100px");
            setTimeout(function () {
                $(".lightsaber-red")
                    .css("height", "0px");
            }, 2000)
        }
    }, 18000);
    setTimeout(function () {
        {
            $(".lightsaber-yellow").css("height", "100px");
            setTimeout(function () {
                $(".lightsaber-yellow")
                    .css("height", "0px");
            }, 2000)
        }
    }, 20000);
    setTimeout(function () {
        $("#begin5").css("visibility", "visible")
        $(".level-1-btn, .level-2-btn, .level-3-btn, .level-4-btn, .level-5-btn, .level-6-btn").css("visibility", "visible")
    }, 22000);
    /* $("#reset5").click (function(){
       $("#reset5").css("visibility","hidden")
       $("#begin5").css("visibility","visible")
       $(".level-1-btn").css("visibility","visible")
       $(".level-2-btn").css("visibility","visible")
       $(".level-3-btn").css("visibility","visible")
       $(".level-4-btn").css("visibility","visible")
       $(".level-5-btn").css("visibility","visible")
       $(".level-6-btn").css("visibility","visible")
     });*/
});
// ------------------------------------------------------------- 6th Sequence
$("#begin6").click(function () {
    {
        $("#begin6").css("visibility", "hidden")
        $("#reset6").css("visibility", "visible")
        $(".level-1-btn, .level-2-btn, .level-3-btn, .level-4-btn, .level-5-btn, .level-6-btn").css("visibility", "hidden")

    }
    $(".lightsaber-purple").css("height", "100px");
    setTimeout(function () {
        $(".lightsaber-purple")
            .css("height", "0px");
    }, 2000);

    setTimeout(function () {
        {
            $(".lightsaber-red").css("height", "100px");
            setTimeout(function () {
                $(".lightsaber-red")
                    .css("height", "0px");
            }, 2000)
        }
    }, 2000);

    setTimeout(function () {
        {
            $(".lightsaber-blue").css("height", "100px");
            setTimeout(function () {
                $(".lightsaber-blue")
                    .css("height", "0px");
            }, 2000)
        }
    }, 4000);

    setTimeout(function () {
        {
            $(".lightsaber-yellow").css("height", "100px");
            setTimeout(function () {
                $(".lightsaber-yellow")
                    .css("height", "0px");
            }, 2000)
        }
    }, 6000);

    setTimeout(function () {
        {
            $(".lightsaber-white").css("height", "100px");
            setTimeout(function () {
                $(".lightsaber-white")
                    .css("height", "0px");
            }, 2000)
        }
    }, 8000);
    setTimeout(function () {
        {
            $(".lightsaber-green").css("height", "100px");
            setTimeout(function () {
                $(".lightsaber-green")
                    .css("height", "0px");
            }, 2000)
        }
    }, 10000);
    setTimeout(function () {
        {
            $(".lightsaber-orange").css("height", "100px");
            setTimeout(function () {
                $(".lightsaber-orange")
                    .css("height", "0px");
            }, 2000)
        }
    }, 12000);
    setTimeout(function () {
        {
            $(".lightsaber-white").css("height", "100px");
            setTimeout(function () {
                $(".lightsaber-white")
                    .css("height", "0px");
            }, 2000)
        }
    }, 14000);
    setTimeout(function () {
        {
            $(".lightsaber-red").css("height", "100px");
            setTimeout(function () {
                $(".lightsaber-red")
                    .css("height", "0px");
            }, 2000)
        }
    }, 16000);
    setTimeout(function () {
        {
            $(".lightsaber-green").css("height", "100px");
            setTimeout(function () {
                $(".lightsaber-green")
                    .css("height", "0px");
            }, 2000)
        }
    }, 18000);
    setTimeout(function () {
        {
            $(".lightsaber-blue").css("height", "100px");
            setTimeout(function () {
                $(".lightsaber-blue")
                    .css("height", "0px");
            }, 2000)
        }
    }, 20000);
    setTimeout(function () {
        {
            $(".lightsaber-white").css("height", "100px");
            setTimeout(function () {
                $(".lightsaber-white")
                    .css("height", "0px");
            }, 2000)
        }
    }, 22000);
    setTimeout(function () {
        $("#begin6").css("visibility", "visible")
        $(".level-1-btn, .level-2-btn, .level-3-btn, .level-4-btn, .level-5-btn, .level-6-btn").css("visibility", "visible")
    }, 24000);
    /* $("#reset6").click (function(){
       $("#reset6").css("visibility","hidden")
       $("#begin6").css("visibility","visible")
       $(".level-1-btn").css("visibility","visible")
       $(".level-2-btn").css("visibility","visible")
       $(".level-3-btn").css("visibility","visible")
       $(".level-4-btn").css("visibility","visible")
       $(".level-5-btn").css("visibility","visible")
       $(".level-6-btn").css("visibility","visible")
     });*/
});
//-------------------------------------------------Lightsaber activate/deactivate function for user

$(".lightsaber-handle-green").click(function () {
    $(".lightsaber-green").css("height", "100px");
    setTimeout(function () {
        $(".lightsaber-green")
        .css("height", "0px");
    }, 2000);
    usersequence1.push(".lightsaber-handle-green");
    console.log(usersequence1);
});

$(".lightsaber-handle-red").click(function () {
    $(".lightsaber-red").css("height", "100px");
    setTimeout(function () {
        $(".lightsaber-red")
        .css("height", "0px");
    }, 2000);
    usersequence1.push(".lightsaber-handle-red");
    console.log(usersequence1);
});

$(".lightsaber-handle-blue").click(function () {
    $(".lightsaber-blue").css("height", "100px");
    setTimeout(function () {
        $(".lightsaber-blue")
        .css("height", "0px");
    }, 2000);
    usersequence1.push(".lightsaber-handle-blue");
    console.log(usersequence1);
});

$(".lightsaber-handle-yellow").click(function () {
    $(".lightsaber-yellow").css("height", "100px");
    setTimeout(function () {
        $(".lightsaber-yellow")
        .css("height", "0px");
    }, 2000);
    usersequence1.push(".lightsaber-handle-yellow");
    console.log(usersequence1);
});
$(".lightsaber-handle-purple").click(function () {
    $(".lightsaber-purple").css("height", "100px");
    setTimeout(function () {
        $(".lightsaber-purple")
        .css("height", "0px");
    }, 2000);
    usersequence1.push(".lightsaber-handle-purple");
    console.log(usersequence1);
});
$(".lightsaber-handle-orange").click(function () {
    $(".lightsaber-orange").css("height", "100px");
    setTimeout(function () {
        $(".lightsaber-orange")
        .css("height", "0px");
    }, 2000);
    usersequence1.push(".lightsaber-handle-orange");
    console.log(usersequence1);
});
$(".lightsaber-handle-white").click(function () {
    $(".lightsaber-white").css("height", "100px");
    setTimeout(function () {
        $(".lightsaber-white")
        .css("height", "0px");
    }, 2000);
    usersequence1.push(".lightsaber-handle-white");
    console.log(usersequence1);
});



/*var sequence1 = [".lightsaber-handle-red", ".lightsaber-handle-green", ".lightsaber-handle-blue", ".lightsaber-handle-yellow",
    ".lightsaber-handle-green"];
var usersequence1 = []

if (usersequence1.length != sequence1.length){
    return "false";
}else {
    for (var i = 0; i < usersequence1.length; i++){
        if (sequence1[i] === usersequence1[i]);

        return "True";}
}*/