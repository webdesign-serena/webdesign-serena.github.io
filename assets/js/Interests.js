$(document).ready(function() {


$(".card").flip({axis: 'y'});
$(".card").flip({axis: 'y'});


// jQuery Function Number 6
$(".card").hover(function(){
    $(this).css("opacity", ".5");
    }, function(){
    $(this).css("opacity", "1");
});






  //Implement the "slide to left" when the user clicks on #carousel-next here
$("#carousel-next").click(function() {
let marginQ = parseInt($('#carousel').css('margin-left').replace("px", "")); 
  if (marginQ == -5760) {
    return false
  } else {
      marginQ = marginQ - 960
      $("#carousel").css('margin-left', marginQ + "px")
  }
});
  //Implement the "slide to right" when the user clicks on #carousel-prev here

$("#carousel-prev").click(function() {
let marginQ = parseInt($('#carousel').css('margin-left').replace("px", "")); 
  if (marginQ == 0) {
    return false
  } else {
      marginQ = marginQ + 960
      $("#carousel").css('margin-left', marginQ + "px")
  }
});


});