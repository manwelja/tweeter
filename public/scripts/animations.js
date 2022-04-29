window.addEventListener('DOMContentLoaded', () => {
  //Catch when user clicks on "new" link in nav bar and toggle the display of the compose section
  $("#compose-tweet").on("click", function(event) {
    event.preventDefault();
    if($(".new-tweet").hasClass("hide")) {
      $(".new-tweet").slideDown(1000);
      $(".new-tweet").removeClass("hide");
    } else {
      //If the compose section is being hidded, reset relevant fields
      $(".new-tweet").slideUp(1000);
      $(".new-tweet").addClass("hide");
      $("#tweet-text").val("");
      $('output[name="counter"]').val(140);
    }
    //scroll to the top of the page
    $('html, body').animate({ scrollTop: 0 }, 'fast');
  });
  
});

/**** scroll button code placeholder *****/