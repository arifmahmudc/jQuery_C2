function textChange() {
    document.getElementById('p').innerHTML ="I am a <strong>Full Stack Web Developer</strong>";
}

$(document).ready(function(){
  $(".t1").click(function(){
    $(this).hide();
  });
});

$(document).ready(function(){
  $("#p1").mouseenter(function(){
    alert("You entered into the black area!!!");
  });
});
$(document).ready(function(){
  $("#p2").mouseleave(function(){
    alert("Bye! You now leave the black area!!!");
  });
});
$(document).ready(function(){
  $("#p3").mousedown(function(){
    alert("Mouse down over p1!");
  });
});
$(document).ready(function(){
  $("input").focus(function(){
    $(this).css("background-color", "yellow");
  });
  $("input").blur(function(){
    $(this).css("background-color", "tomato");
  });
});
$(document).ready(function(){
  $("#p4").on({
    mouseenter: function(){
      $(this).css("background-color", "lightgray");
    },  
    mouseleave: function(){
      $(this).css("background-color", "lightblue");
    }, 
    click: function(){
      $(this).css("background-color", "tomato");
    }  
  });
});
$(document).ready(function(){
  $(".b1").click(function(){
    $(".p5").toggle();
  });
});
$(document).ready(function(){
  $(".b2").click(function(){
    $(".p6").hide();
  });
  $(".b3").click(function(){
    $(".p6").show();
  });
});
$(document).ready(function(){
  $("#x1").click(function(){
    $("#x2").hide("slow", function(){
      b("The paragraph is now hidden");
    });
  });
});
$(document).ready(function(){
  $("#x3").click(function(){
    $("#x4").hide(1000);
    alert("The paragraph is now hidden");
  });
});
$(document).ready(function(){
  $("#x5").click(function(){
    $("#div1").fadeTo("slow", 0.6);
    $("#div2").fadeTo("slow", 0.7);
    $("#div3").fadeTo("slow", 0.8);
  });
});
$(document).ready(function(){
  $("#x6").click(function(){
    $("#div4").fadeToggle();
    $("#div5").fadeToggle("slow");
    $("#div6").fadeToggle(3000);
  });
});
$(document).ready(function(){
  $("#x7").click(function(){
    $("#div7").fadeOut();
    $("#div8").fadeOut("slow");
    $("#div9").fadeOut(3000);
  });
});
$(document).ready(function(){
  $("#x8").click(function(){
    $("#div10").fadeIn();
    $("#div11").fadeIn("slow");
    $("#div12").fadeIn(3000);
  });
});
$(document).ready(function(){
  $("#y1").click(function(){
    var div = $("#y2");
    div.animate({height: '300px', opacity: '0.4'}, "slow");
    div.animate({width: '300px', opacity: '0.8'}, "slow");
    div.animate({height: '100px', opacity: '0.4'}, "slow");
    div.animate({width: '100px', opacity: '0.8'}, "slow");
  });
});
$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown(5000);
  });
  $("#stop").click(function(){
    $("#panel").stop();
  });
});
$(document).ready(function(){
  $("#y4").click(function(){
    $("#y3").css("color", "indigo")
      .slideUp(2000)
      .slideDown(2000);
  });
  $(document).ready(function(){
  $("#y5").click(function(){
    $("#y6").empty();
  });
});
});
function afterText() {
  var txt1 = "<b>I </b>";           // Create element with HTML
  var txt2 = $("<i></i>").text("love ");  // Create with jQuery
  var txt3 = document.createElement("b");   // Create with DOM
  txt3.innerHTML = "jQuery!";
  $("#q1").after(txt1, txt2, txt3);    // Insert new elements after img
};