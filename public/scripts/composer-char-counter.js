$(document).ready(function() {
  const MAX_TWEET = 140;  
  // put a reference to the "div-two" element in a variable
  const tweetText = document.getElementById("tweet-text");

  // when tweet-text is clicked, run the function
  tweetText.addEventListener('keyup', (event) => {
  //console.log($('output[name="counter"]'))

    countField = document.getElementsByName("counter")[0];
    //set the count to MAX - tweet length
    countField.innerText = MAX_TWEET - tweetText.value.length;

    if (Number(countField.innerText) < 0) {
      countField.classList.add("red")
    }
  });

});