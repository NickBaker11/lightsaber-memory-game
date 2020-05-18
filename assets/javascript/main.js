// First Sequensce

$("#begin1").click(function() {
  {
    $("#begin1").hide()
  }
  $(".lightsaber-red").css("height", "100px");
  setTimeout(function() {
    $(".lightsaber-red")
      .css("height", "0px");
  }, 3000);

  setTimeout(function() {
    {
      $(".lightsaber-green").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-green")
          .css("height", "0px");
      }, 3000)
    }
  }, 3000);

  setTimeout(function() {
    {
      $(".lightsaber-blue").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-blue")
          .css("height", "0px");
      }, 3000)
    }
  }, 6000);

  setTimeout(function() {
    {
      $(".lightsaber-yellow").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-yellow")
          .css("height", "0px");
      }, 3000)
    }
  }, 9000);

  setTimeout(function() {
    {
      $(".lightsaber-green").css("height", "100px");
      setTimeout(function() {
        $(".lightsaber-green")
          .css("height", "0px");
      }, 3000)
    }
  }, 12000);
});




//Lightsaber activate/deactivate function

$(".lightsaber-handle-green").click(function() {
    $(".lightsaber-green").css("height", "100px");
    setTimeout(function(){  $(".lightsaber-green")
    .css("height", "0px"); }, 3000);
});

$(".lightsaber-handle-red").click(function() {
    $(".lightsaber-red").css("height", "100px");
    setTimeout(function(){ $(".lightsaber-red")
    .css("height", "0px"); }, 3000);
    });

 $(".lightsaber-handle-blue").click(function() {
    $(".lightsaber-blue").css("height", "100px");
    setTimeout(function(){ $(".lightsaber-blue")
    .css("height", "0px"); }, 3000);
    });

 $(".lightsaber-handle-yellow").click(function() {
    $(".lightsaber-yellow").css("height", "100px");
    setTimeout(function(){ $(".lightsaber-yellow")
    .css("height", "0px"); }, 3000);
    });



    $("#level-1-btn").click(function() {
  $(".lightsabers").slideToggle(750)
});