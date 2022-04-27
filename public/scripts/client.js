/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.


const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
};

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
  
  //set up header
  $divAvatarImg.addClass("avatar");
  $divAvatarImg.append(`<img src=${tweetData.user.avatars}></img>`);
  $divName.append(`$(tweetData.user.avatars)`);
  $divHandle.append(`$(tweetData.user.handle)`);
 
  $divAvatarImg.append($divName);
  $header.append($divAvatarImg);
  $header.append($divHandle);
  $article.append($header);
  
  //set up content
  $divBody.addClass("tweet-body");
  $divBody.append(`${tweetData.content.text}`);

  $article.append($divBody);

  //set up footer
  $divCreated.append(`${tweetData.created_at}`);
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
  
  const tweetHTML = `<article class="tweet" id="tweet">
    <header>
    <div class="avatar"><img src=${tweetData.user.avatars}><div>${tweetData.user.name}</div></div>
    <div>${tweetData.user.handle}</div>
    </header>
    <div class="tweet-body">${tweetData.content.text}</div>
    <footer>
    <div>${tweetData.created_at}</div>
    <div>
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-retweet"></i>
      <i class="fa-solid fa-heart"></i>
    </div>
    </footer></article>`;

  return tweetHTML;
};

window.addEventListener('DOMContentLoaded', (event) => {
  // when the tweet button is clicked, run the function
  $(".tweet-button").on("click", function(event) {
    event.preventDefault();

    const $tweet = createTweetElement2(tweetData);
  
    $('#tweets-container').append($tweet);
    
  });

});

//});