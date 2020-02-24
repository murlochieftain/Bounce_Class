
//Change color on submit click
$("#colorSubmit").click(function() {
  var newColor = $("#colorField").val();
  if (newColor.length == 6) {
    $(document.body).css("background-color", "#" + newColor);
  } else {
    $("#colorField").val("");
  }
});

//Listen for Enter
$("#colorFieldCont").keyup(function(event) {
  if (event.keyCode === 13) {
    $("#colorSubmit").click();
  }
});

$("#hideBtn").click(function() {
  $("#colorField").toggle();
  $("#colorSubmit").toggle();
});
