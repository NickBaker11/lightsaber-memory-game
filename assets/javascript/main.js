// ------------------------------------------------------------- Themes

$("#ls-btn").click(function() {
    $("body").css("background-color","blue");
    $(".welcome").hide();
    $(".name-form-ls").css("display","block")
     $("#level-1").css("display","block")
    $(".level-btns").css("display","flex")
});
$("#ds-btn").click(function() {
    $("body").css("background-color","red");
     $(".welcome").hide();
    $(".name-form-ds").css("display","block")
     $("#level-1").css("display","block")
    $(".level-btns").css("display","flex")


});

//$(".name-sumbit").click(function() {
  //  $(".level-btns").css("display","block")
    //    $(".level-1").css("display","block")
//})



$(".lvl-1-btn").click (function(){
    $("#level-1").css("display","block");
    $("#level-2").css("display","none");
    $("#level-3").css("display","none");
    $("#level-4").css("display","none");
    $("#level-5").css("display","none");
    $("#level-6").css("display","none");
})

$(".lvl-2-btn").click (function(){
    $("#level-2").css("display","block");
    $("#level-1").css("display","none");
     $("#level-3").css("display","none");
    $("#level-4").css("display","none");
    $("#level-5").css("display","none");
    $("#level-6").css("display","none");
})
$(".lvl-3-btn").click (function(){
    $("#level-3").css("display","block");
    $("#level-1").css("display","none");
     $("#level-2").css("display","none");
    $("#level-4").css("display","none");
    $("#level-5").css("display","none");
    $("#level-6").css("display","none");
})
$(".lvl-4-btn").click (function(){
    $("#level-4").css("display","block");
    $("#level-1").css("display","none");
     $("#level-2").css("display","none");
    $("#level-3").css("display","none");
    $("#level-5").css("display","none");
    $("#level-6").css("display","none");
})
$(".lvl-5-btn").click (function(){
    $("#level-5").css("display","block");
    $("#level-1").css("display","none");
     $("#level-2").css("display","none");
    $("#level-3").css("display","none");
    $("#level-4").css("display","none");
    $("#level-6").css("display","none");
})
$(".lvl-6-btn").click (function(){
    $("#level-6").css("display","block");
    $("#level-1").css("display","none");
     $("#level-2").css("display","none");
    $("#level-3").css("display","none");
    $("#level-4").css("display","none");
    $("#level-5").css("display","none");
})

// ------------------------------------------------------------- 1st Sequence

$("#begin1").click(function() {
  {
    $("#begin1").hide()
  }
  $(".lightsaber-red").css("height", "100px");
  setTimeout(function() {
    $(".lightsaber-red")
      .css("height", "0px");
  }, 2000);

  setTimeout(function() {
    {
      $(".lightsaber-green").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-green")
          .css("height", "0px");
      }, 2000)
    }
  }, 2000);

  setTimeout(function() {
    {
      $(".lightsaber-blue").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-blue")
          .css("height", "0px");
      }, 2000)
    }
  }, 4000);

  setTimeout(function() {
    {
      $(".lightsaber-yellow").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-yellow")
          .css("height", "0px");
      }, 2000)
    }
  }, 6000);

  setTimeout(function() {
    {
      $(".lightsaber-green").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-green")
          .css("height", "0px");
      }, 2000)
    }
  }, 8000);
});
// ------------------------------------------------------------- 2nd Sequence
$("#begin2").click(function() {
  {
    $("#begin2").hide()
  }
  $(".lightsaber-purple").css("height", "100px");
  setTimeout(function() {
    $(".lightsaber-purple")
      .css("height", "0px");
  }, 2000);

  setTimeout(function() {
    {
      $(".lightsaber-yellow").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-yellow")
          .css("height", "0px");
      }, 2000)
    }
  }, 2000);

  setTimeout(function() {
    {
      $(".lightsaber-blue").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-blue")
          .css("height", "0px");
      }, 2000)
    }
  }, 4000);

  setTimeout(function() {
    {
      $(".lightsaber-yellow").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-yellow")
          .css("height", "0px");
      }, 2000)
    }
  }, 6000);

  setTimeout(function() {
    {
      $(".lightsaber-red").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-red")
          .css("height", "0px");
      }, 2000)
    }
  }, 8000);
  setTimeout(function() {
    {
      $(".lightsaber-green").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-green")
          .css("height", "0px");
      }, 2000)
    }
  }, 10000);
  setTimeout(function() {
    {
      $(".lightsaber-red").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-green")
          .css("height", "0px");
      }, 2000)
    }
  }, 12000);
});
// ------------------------------------------------------------- 3rd Sequence
$("#begin3").click(function() {
  {
    $("#begin3").hide()
  }
  $(".lightsaber-purple").css("height", "100px");
  setTimeout(function() {
    $(".lightsaber-purple")
      .css("height", "0px");
  }, 2000);

  setTimeout(function() {
    {
      $(".lightsaber-yellow").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-yellow")
          .css("height", "0px");
      }, 2000)
    }
  }, 2000);

  setTimeout(function() {
    {
      $(".lightsaber-blue").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-blue")
          .css("height", "0px");
      }, 2000)
    }
  }, 4000);

  setTimeout(function() {
    {
      $(".lightsaber-yellow").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-yellow")
          .css("height", "0px");
      }, 2000)
    }
  }, 6000);

  setTimeout(function() {
    {
      $(".lightsaber-red").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-red")
          .css("height", "0px");
      }, 2000)
    }
  }, 8000);
  setTimeout(function() {
    {
      $(".lightsaber-green").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-green")
          .css("height", "0px");
      }, 2000)
    }
  }, 10000);
  setTimeout(function() {
    {
      $(".lightsaber-red").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-green")
          .css("height", "0px");
      }, 2000)
    }
  }, 12000);
   setTimeout(function() {
    {
      $(".lightsaber-red").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-green")
          .css("height", "0px");
      }, 2000)
    }
  }, 14000);
   setTimeout(function() {
    {
      $(".lightsaber-red").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-green")
          .css("height", "0px");
      }, 2000)
    }
  }, 16000);
});

// ------------------------------------------------------------- 4th Sequence
$("#begin4").click(function() {
  {
    $("#begin4").hide()
  }
  $(".lightsaber-purple").css("height", "100px");
  setTimeout(function() {
    $(".lightsaber-purple")
      .css("height", "0px");
  }, 2000);

  setTimeout(function() {
    {
      $(".lightsaber-yellow").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-yellow")
          .css("height", "0px");
      }, 2000)
    }
  }, 2000);

  setTimeout(function() {
    {
      $(".lightsaber-blue").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-blue")
          .css("height", "0px");
      }, 2000)
    }
  }, 4000);

  setTimeout(function() {
    {
      $(".lightsaber-yellow").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-yellow")
          .css("height", "0px");
      }, 2000)
    }
  }, 6000);

  setTimeout(function() {
    {
      $(".lightsaber-red").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-red")
          .css("height", "0px");
      }, 2000)
    }
  }, 8000);
  setTimeout(function() {
    {
      $(".lightsaber-green").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-green")
          .css("height", "0px");
      }, 2000)
    }
  }, 10000);
  setTimeout(function() {
    {
      $(".lightsaber-red").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-green")
          .css("height", "0px");
      }, 2000)
    }
  }, 12000);
   setTimeout(function() {
    {
      $(".lightsaber-red").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-green")
          .css("height", "0px");
      }, 2000)
    }
  }, 14000);
   setTimeout(function() {
    {
      $(".lightsaber-red").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-green")
          .css("height", "0px");
      }, 2000)
    }
  }, 16000);
   setTimeout(function() {
    {
      $(".lightsaber-red").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-green")
          .css("height", "0px");
      }, 2000)
    }
  }, 18000);
});
// ------------------------------------------------------------- 5th Sequence
$("#begin5").click(function() {
  {
    $("#begin5").hide()
  }
  $(".lightsaber-purple").css("height", "100px");
  setTimeout(function() {
    $(".lightsaber-purple")
      .css("height", "0px");
  }, 2000);

  setTimeout(function() {
    {
      $(".lightsaber-yellow").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-yellow")
          .css("height", "0px");
      }, 2000)
    }
  }, 2000);

  setTimeout(function() {
    {
      $(".lightsaber-blue").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-blue")
          .css("height", "0px");
      }, 2000)
    }
  }, 4000);

  setTimeout(function() {
    {
      $(".lightsaber-yellow").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-yellow")
          .css("height", "0px");
      }, 2000)
    }
  }, 6000);

  setTimeout(function() {
    {
      $(".lightsaber-red").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-red")
          .css("height", "0px");
      }, 2000)
    }
  }, 8000);
  setTimeout(function() {
    {
      $(".lightsaber-green").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-green")
          .css("height", "0px");
      }, 2000)
    }
  }, 10000);
  setTimeout(function() {
    {
      $(".lightsaber-red").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-green")
          .css("height", "0px");
      }, 2000)
    }
  }, 12000);
   setTimeout(function() {
    {
      $(".lightsaber-red").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-green")
          .css("height", "0px");
      }, 2000)
    }
  }, 14000);
   setTimeout(function() {
    {
      $(".lightsaber-red").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-green")
          .css("height", "0px");
      }, 2000)
    }
  }, 16000);
   setTimeout(function() {
    {
      $(".lightsaber-red").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-green")
          .css("height", "0px");
      }, 2000)
    }
  }, 18000);
   setTimeout(function() {
    {
      $(".lightsaber-red").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-green")
          .css("height", "0px");
      }, 2000)
    }
  }, 20000);
});
// ------------------------------------------------------------- 6th Sequence
$("#begin6").click(function() {
  {
    $("#begin6").hide()
  }
  $(".lightsaber-purple").css("height", "100px");
  setTimeout(function() {
    $(".lightsaber-purple")
      .css("height", "0px");
  }, 2000);

  setTimeout(function() {
    {
      $(".lightsaber-yellow").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-yellow")
          .css("height", "0px");
      }, 2000)
    }
  }, 2000);

  setTimeout(function() {
    {
      $(".lightsaber-blue").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-blue")
          .css("height", "0px");
      }, 2000)
    }
  }, 4000);

  setTimeout(function() {
    {
      $(".lightsaber-yellow").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-yellow")
          .css("height", "0px");
      }, 2000)
    }
  }, 6000);

  setTimeout(function() {
    {
      $(".lightsaber-red").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-red")
          .css("height", "0px");
      }, 2000)
    }
  }, 8000);
  setTimeout(function() {
    {
      $(".lightsaber-green").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-green")
          .css("height", "0px");
      }, 2000)
    }
  }, 10000);
  setTimeout(function() {
    {
      $(".lightsaber-red").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-green")
          .css("height", "0px");
      }, 2000)
    }
  }, 12000);
   setTimeout(function() {
    {
      $(".lightsaber-red").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-green")
          .css("height", "0px");
      }, 2000)
    }
  }, 12000);
   setTimeout(function() {
    {
      $(".lightsaber-red").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-green")
          .css("height", "0px");
      }, 2000)
    }
  }, 12000);
   setTimeout(function() {
    {
      $(".lightsaber-red").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-green")
          .css("height", "0px");
      }, 2000)
    }
  }, 12000);
   setTimeout(function() {
    {
      $(".lightsaber-red").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-green")
          .css("height", "0px");
      }, 2000)
    }
  }, 12000);
   setTimeout(function() {
    {
      $(".lightsaber-red").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-green")
          .css("height", "0px");
      }, 2000)
    }
  }, 12000);
});
//-------------------------------------------------Lightsaber activate/deactivate function for user

$(".lightsaber-handle-green").click(function() {
    $(".lightsaber-green").css("height", "100px");
    setTimeout(function(){  $(".lightsaber-green")
    .css("height", "0px"); }, 2000);
});

$(".lightsaber-handle-red").click(function() {
    $(".lightsaber-red").css("height", "100px");
    setTimeout(function(){ $(".lightsaber-red")
    .css("height", "0px"); }, 2000);
    });

 $(".lightsaber-handle-blue").click(function() {
    $(".lightsaber-blue").css("height", "100px");
    setTimeout(function(){ $(".lightsaber-blue")
    .css("height", "0px"); }, 2000);
    });

 $(".lightsaber-handle-yellow").click(function() {
    $(".lightsaber-yellow").css("height", "100px");
    setTimeout(function(){ $(".lightsaber-yellow")
    .css("height", "0px"); }, 2000);
    });
$(".lightsaber-handle-purple").click(function() {
    $(".lightsaber-purple").css("height", "100px");
    setTimeout(function(){ $(".lightsaber-purple")
    .css("height", "0px"); }, 2000);
    });
$(".lightsaber-handle-orange").click(function() {
    $(".lightsaber-orange").css("height", "100px");
    setTimeout(function(){ $(".lightsaber-orange")
    .css("height", "0px"); }, 2000);
    });
$(".lightsaber-handle-white").click(function() {
    $(".lightsaber-white").css("height", "100px");
    setTimeout(function(){ $(".lightsaber-white")
    .css("height", "0px"); }, 2000);
    });



 