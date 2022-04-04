/* Data to Show*/
const data = [
  {
   quote: `“Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way.”`, 
   author: "– Michael Scott",
   emoji: "🤷🏻‍♂️", 
   image: `url(assets/The_Office.jpg)`,
   sound: `assets/The_Office_Sound.wav`
  },
  {
    quote: '“Camera, Take The Day Off! I Added Ten Pounds To Myself!”',
    author: "-Gene Belcher", 
    emoji: "🎥",
    image: `url(assets/Bobs_Burgers.jpg)`,
    sound: `assets/Bobs_Burgers_Sound.m4a`
  },
  {
    quote: '“When they say 2% milk, I don\'t know what the other 98% is.”',
    emoji: "🥛",
    author: "-Andy Dwyer", 
    image: `url(assets/Parks_Rec.jpg`,
    sound: `assets/Parks_Rec_Sound.m4a`
  },
  {
    quote: '“I can\'t be a single mom. I have never even driven on the highway. What if the baby needs to go downtown?”',
    emoji: "🚗",
    author: "-Cheyenne Lee", 
    image: `url(assets/Superstore.jpg`,
    sound: `assets/Superstore_Sound.m4a`
  },
  {
    quote: '“I always thought tea was going to taste like hot brown water. And do you know what? I was right.”',
    emoji: "🫖",
    author: "-Ted Lasso", 
    image: `url(assets/Ted_Lasso.jpg`,
    sound: `assets/Ted_Lasso_Sound.m4a`
  }
];

/*
Quote and Emoji
*/
// blockquote
const quote = document.querySelector('blockquote');
// emoji
const emoji = document.querySelector('p');
// background
const bgImage = document.querySelector('body');
//author
const author = document.querySelector('p.author');
//
var audio = new Audio();

// Check-Check: change text
quote.innerHTML = data[0].quote;
// Check-Check: change emoji text
emoji.innerHTML = data[0].emoji;
// Check-Check: change author text
author.innerHTML = data[0].author;
// Check-Check: background image
bgImage.style.backgroundImage= data[0].image;
//
playAudio(0);

/*
 * Navigate to Items with Event Listeners
 * Track Number of Items
*/
// initialize item number
let itemNumber = 0;
// get next button
const nextButton = document.querySelector("img.next");
// get previous button
const prevButton = document.querySelector("img.prev");
// get random button
const randButton = document.querySelector("img.random");

// listen for clicks on next button
nextButton.addEventListener("click", function () {
  // update, then increase item number with each click
  itemNumber = itemNumber + 1;
  
  // if at LAST item
  if ( itemNumber > data.length -1 ) {
    // reset counting to first item
    itemNumber = 0;
  }

  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
  author.innerHTML = data[itemNumber].author;
  playAudio(itemNumber);
});
  
// listen for clicks on previous button
prevButton.addEventListener("click", function () {
  // update, then DEcrease item number with each click
  itemNumber = itemNumber - 1;
  
  // if at FIRST item
  if ( itemNumber < 0 ) {
    // reset counting to last item
    itemNumber = data.length -1;
  }  
  
  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
  author.innerHTML = data[itemNumber].author;
  playAudio(itemNumber);
});

// listen for clicks on random button
randButton.addEventListener('click', function() {
  
  // generate random number, for total number, of items (data)
  randomNumber = Math.floor ( Math.random() * data.length );
  
  // display data based random number
  quote.innerHTML = data[randomNumber].quote;
  emoji.innerHTML = data[randomNumber].emoji;
  bgImage.style.backgroundImage = data[randomNumber].image;
  author.innerHTML = data[itemNumber].author;
  playAudio(randomNumber);
});

// listen for keypress next
document.addEventListener('keyup', function(){
  
  // Next Right Arrow  
  if ( event.keyCode === 39 ) {
   
   // update, then increase item number with each click
  itemNumber = itemNumber + 1;
  
  // if at LAST item
  if ( itemNumber > data.length -1 ) {
    // reset counting to first item
    itemNumber = 0;
  }

  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
  author.innerHTML = data[itemNumber].author;
  playAudio(itemNumber);
  }
  
  // Prev Left Arrow
  if ( event.keyCode === 37 ) {
  
   // update, then DEcrease item number with each click
  itemNumber = itemNumber - 1;
  
  // if at FIRST item
  if ( itemNumber < 0 ) {
    // reset counting to last item
    itemNumber = data.length -1;
  }  
  
  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
  author.innerHTML = data[itemNumber].author;
  playAudio(itemNumber);
  }
  
  // Random Spacebar
  if ( event.keyCode === 32) {
    
    // generate random number, for total number, of items (data)
    randomNumber = Math.floor ( Math.random() * data.length );

    // display data based random number
    quote.innerHTML = data[randomNumber].quote;
    emoji.innerHTML = data[randomNumber].emoji;
    bgImage.style.backgroundImage = data[randomNumber].image;
    author.innerHTML = data[randomNumber].author;
    playAudio(randomNumber);
  }
  
});


//Play audio function
function playAudio(index){
  audio.src = data[index].sound;
  audio.play();
}