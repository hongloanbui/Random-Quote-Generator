// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes

//declaration of variables involved in creating final string printed to webpage
var message="";
var quoteText="";
var sourceText="";
var citationText="";
var tagText = "";
const loadQuote = document.getElementById("message");

//quote object array

var quotes =[
  {
    quote:'"I never look back darling, it distracts from the now."',
    source:" - Edna Mode",
    citation: "<i>The Incredibles, 2004</i>",
    tag: "Movie Madness"
  },
  {
    quote: '"Endurance is the crowning quality, And patience all the passion of great hearts."',
    source:" - James Russell Lowell",
    citation: false,
    tag: "Life Thoughts"
  },
  {
    quote: '"Popularity is not an indication of quality."',
    source: " - Vanna Bonta",
    citation: false,
    tag: "Life Thoughts"
  },
  {
    quote: '"Be yourself; everyone else is already taken."',
    source: " - Oscar Wilde",
    citation: false,
    tag: "Life Thoughts"
  },
  {
    quote: '"There is some good in this world, and it’s worth fighting for."',
    source: " - J.R.R. Tolkien",
    citation: "The Two Towers, 1954",
    tag: "Brainy Books"
  },
  {
    quote: '"Every human life is worth the same, and worth saving."',
    source: " - J.L. Rowling",
    citation: "Harry Potter and the Deathly Hallows, 2012",
    tag: "Brainy Books"
  },
  {
    quote: '"Be yourself; everyone else is already taken."',
    source: " - Oscar Wilde",
    citation: false,
    tag: "Life Thoughts"
  },
  {
    quote: '"The greatest healing therapy is friendship and love"',
    source: " - Hubert H. Humphrey",
    citation: false,
    tag: "Love one, love all"
  },
  {
    quote: '"Being deeply loved by someone gives you strength, while loving someone deeply gives you courage."',
    source: " - Lao Tzu",
    citation: false,
    tag: "Love one, love all"
  },
  {
    quote: '“Get busy living or get busy dying.”',
    source: " - Stephen King",
    citation: false,
    tag: "Life Thoughts"
  }
];

// creating array to generate for random background color
var colors = ["#5dd8b5", "#4973c6", "#bfa54a", "#c669e0", "#030342", "#4c8257", "#848157", "#60125c", "#1f4151",
            "#5a7703", "#aa6600", "#a50938", "#602034", "#62048e", "#00594b", "#10a328", "#4242ff"]

// creating fuction to execute random background color

var changeBackground = function(){
  document.body.style.background = colors[Math.floor(Math.random()*colors.length)];
}

// Create the getRandomQuote function and name it getRandomQuote

//function creating a random number for index in array

//browser had trouble with the length property inside the getRandomQuote function so I added this in and it seemed to help
var quoteLength =quotes.length;

//getRandomQuote function for randomly selecting a quote array index

function getRandomQuote(quotes){
  var quoteObj = Math.floor(Math.random() * quoteLength);
  return quoteObj;
      }

// Create the printQuote funtion and name it printQuote


function printQuote (message){
  var print = getRandomQuote();
  message = '<h1>' + quotes[print].quote + '</h1>';
  message += '<h2>' + quotes[print].source + '</h2>';
  if(quotes[print].citation !== false){
    message += '<h3>' + quotes[print].citation + '</h3>';
  }
  if(quotes[print].tag !== false){
    message += '<h3>' + quotes[print].tag + '</h3>';
  }
 var outputDiv = document.getElementById("quote-box");
 outputDiv.innerHTML = message;
 changeBackground();
}

//printing string of variables to page

printQuote(message);



//set interval to display new random quote and change the background color

var quotetimer = window.setInterval(printQuote, 10000);


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

//button click by guest to create new random quote


document.getElementById('loadQuote').addEventListener("click", printQuote, false);
