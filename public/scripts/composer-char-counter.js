$(document).ready(function() {
  const MAX_TWEET = 140;

  // when tweet-text is clicked, run the function
  $("#tweet-text").keyup(function() {
    const $countField = $(this.form.elements.counter);
  
    //set the count to MAX - tweet length
    $countField.text(MAX_TWEET - this.value.length);
        
    if (Number($countField.text()) < 0 && !$countField.hasClass('red')) {
      $countField.addClass('red');
    }
    if (Number($countField.text()) >= 0 && $countField.hasClass('red')) {
      $countField.removeClass('red');
    }

  });
});