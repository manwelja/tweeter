/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement2 = function(tweetData) {

  // Create base HTML elements
  const $article = $("<article>");
  const $header = $("<header>");
  const $divAvatarImg = $("<div>");
  const $divName = $("<div>");
  const $divHandle = $("<div>");
  const $divBody = $("<div>");
  const $divCreated = $("<div>");
  const $divLinks = $("<div>");
  const $footer = $("<footer>");
  const $iFlag = $("<i>");
  const $iHeart = $("<i>");
  const $iRetweet = $("<i>");
 
  $article.addClass("tweet");
  $article.attr('id', 'tweet');
  
  //set up header secion with avatar, usernams and handle
  $divAvatarImg.addClass("avatar");
  $divAvatarImg.append(`<img src=${(tweetData.user.avatars)}></img>`);
  $divName.append(`${tweetData.user.name}`);
  $divHandle.append(`${tweetData.user.handle}`);
 
  $divAvatarImg.append($divName);
  $header.append($divAvatarImg);
  $header.append($divHandle);
  $article.append($header);
  
  //set up content section
  $divBody.addClass("tweet-body");
  //use .text to ensure that any user entered javascript is not executed
  $divBody.text(`${(tweetData.content.text)}`);

  $article.append($divBody);

  //set up footer section
  $divCreated.append(`${timeago.format(tweetData.created_at, "pt_BR")}`);
  $footer.append($divCreated);

  $iFlag.addClass("fa-solid fa-flag");
  $iRetweet.addClass("fa-solid fa-retweet");
  $iHeart.addClass("fa-solid fa-heart");
  $divLinks.append($iFlag);
  $divLinks.append($iRetweet);
  $divLinks.append($iHeart);
  
  $footer.append($divLinks);

  $article.append($footer);

  return $article;
}

const createTweetElement = function(tweetData) {

  //escape the tweet field to ensure any user entered script is not executed when the data is loaded
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(tweetData.content.text));
  
  const $tweetHTML = `<article class="tweet" id="tweet">
    <header>
    <div class="avatar"><img src=${tweetData.user.avatars}><div>${tweetData.user.name}</div></div>
    <div>${tweetData.user.handle}</div>
    </header>
    <div class="tweet-body">${div.innerHTML}</div>
    <footer>
    <div>${timeago.format(tweetData.created_at, "pt_BR")}</div>
    <div>
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-retweet"></i>
      <i class="fa-solid fa-heart"></i>
    </div>
    </footer></article>`;
  return $tweetHTML;
};

const renderTweets = function(tweetData) {
  tweetData.forEach((element) => {
    $('#tweets-container').append(createTweetElement(element));
  });
};

window.addEventListener('DOMContentLoaded', (event) => {
  // when the new tweet form is submitted, let's display the tweets!
  $(".new-tweet-form").on("submit", function(event) {
    event.preventDefault();
    
    //get the length of the tweet for error checking
    const $tweetTextLen = $("#tweet-text").val().length;

    //If the tweet length is too long or 0, exit without submitting
    if ($tweetTextLen > 140) {
      alert(`Tweeter Error!\nYou have entered ${$tweetTextLen} characters, but the limit is 140.  Please adjust your tweet accordingly.`);
      return;
    }
    if ($tweetTextLen === 0) {
      alert(`Tweeter Error!\nYou are trying to submit an empty tweet.  Please enter something to post.`);
      return;
    }
    
    //serialize the tweet text for posting
    const tweetData = $(this).serialize();
    
    //post teh tweet data using alax
    $.ajax({
      method: "POST",
      data: tweetData,
      url: "/tweets",
    })
      .then((res) => {
        //if success, empty the tweet field and render the resulting tweet
        $("#tweet-text").val("");
        renderTweets([res]);
      })
      //alert the user if an error was encountered with the submission process
      .catch((err) => {
        alert(err);
      });
  });
});

$(document).ready(function() {

  //function to load tweet database
  const loadTweets = function() {
    //execute an ajax get request to retrieve existing tweet data
    $.ajax({
      method: "GET",
      url: "/tweets",
    })
      .then(function (morePostsHtml) {
        //pass the existing tweets to be loaded
        renderTweets(morePostsHtml);
      });
  };

  loadTweets();
});