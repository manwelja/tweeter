window.addEventListener('DOMContentLoaded', () => {
  //Catch when user clicks on "new" link in nav bar and toggle the display of the compose section
  $("#compose-tweet").on("click", function(event) {
    event.preventDefault();
    if ($(".new-tweet").hasClass("hide")) {
      displayComposeSection();
    } else {
      //If the compose section is being hidded, reset relevant fields
      resetComposeSection();
      resetErrorSection();
    }
    //scroll to the top of the page
    $('html, body').animate({ scrollTop: 0 }, 'fast');
  });
  
  // Catch when the user scrolls down the screen
  $(window).scroll(function() {
    //if the user has started scrolling, show them the up button
    //Hide the button if they move back up to the top of the page
    $(".div-scroll-button").removeClass("hide");
    if ($(window).scrollTop() > 0) {
      $(".div-scroll-button").removeClass("hide");
    } else {
      $(".div-scroll-button").addClass("hide");
    }
  });

  $("#scroll-button").on("click", function(event) {
    // When the user clicks on the button, scroll to the top of the document
    $('html, body').animate({ scrollTop: 0 }, 'fast');

    if($(".new-tweet").hasClass("hide")) {
      displayComposeSection();
    }
  });
  
});

