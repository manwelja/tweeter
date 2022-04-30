//functions to reset error message section
const resetErrorSection = function() {
  $("#error-message").slideUp(1000);
  $("#error-message").addClass("hide");
  $("#error-message").val("");
};

//Function to reset and hide text field/counter for displaying new tweets
const resetComposeSection = function() {
  $(".new-tweet").slideUp(1000);
  $(".new-tweet").addClass("hide");
  $("#tweet-text").val("");
  $('output[name="counter"]').val(140);
  $('output[name="counter"]').removeClass("red");
};

//function to display text field for composing new tweets
const displayComposeSection = function() {
  $(".new-tweet").slideDown(1000);
  $(".new-tweet").removeClass("hide");
};
