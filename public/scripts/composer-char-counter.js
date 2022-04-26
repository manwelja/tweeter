let count = 0;
$(document).ready(function() {
  
  // put a reference to the "div-two" element in a variable
  const tweetText = document.getElementById("tweet-text");

  // when tweet-text is clicked, run the function
  tweetText.addEventListener('input', (event) => {
  //console.log($('output[name="counter"]'))
  
    //Increment the letter counter if content is added
    if (event.inputType === "insertText") {
      document.getElementsByName("counter")[0].innerText = Number(document.getElementsByName("counter")[0].innerText) - 1;
    }
    //Decrement counter if backspace or delete are pressed
    if (event.inputType === "deleteContentBackward" || event.inputType === "deleteContentForward") {
      document.getElementsByName("counter")[0].innerText = Number(document.getElementsByName("counter")[0].innerText) + 1;
    }  
    if (Number(document.getElementsByName("counter")[0].innerText) < 0) {
      document.getElementsByName("counter")[0].classList.add("red")
    }
  });

});
