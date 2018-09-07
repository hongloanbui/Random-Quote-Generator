// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes

//declaration of variables involved in creating final string printed to webpage
var message="";
var quoteText="";
var sourceText="";
var citationText="";
var tagText = "";
const loadQuote = document.getElementById("message");

//adding array of hex code colors for randomized background color

var colors = ["#5dd8b5", "#4973c6", "#bfa54a", "#c669e0", "#030342", "#4c8257", "#848157", "#60125c", "#1f4151",
            "#5a7703", "#aa6600", "#a50938", "#602034", "#62048e", "#00594b", "#10a328", "#4242ff"]


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
    quote: '“Get busy living or get busy dying.”',
    source: " - Stephen King",
    citation: false,
    tag: "Life Thoughts"
  }
];



// Create the getRandomQuote function and name it getRandomQuote

//function creating a random number for index in array

function getRandomQuote(quotes){
  return Math.floor(Math.random() * quotes.length);
    }
// for loop to create string of variables from array

for(var i=0; i<=1; i++){
    i = getRandomQuote(quotes);
    quoteText = quotes[i].quote;
    sourceText = quotes[i].source;
    tagText = quotes[i].tag;
    message +="<h1>"+ quoteText +"</h1>";
    message+="<h2>"+ sourceText +"</h2><br>";
  if(quotes[i].citation != false){
    citationText = quotes[i].citation;
  message += "<h3>"+ citationText +"</h3><br>";
  i+=1;
  }
  message+="<h4>"+ tagText +"</h4><br>";
}



// Create the printQuote funtion and name it printQuote

function printQuote (message){
 var outputDiv = document.getElementById("quote-box");
 outputDiv.innerHTML = message;
}

//printing string of variables to page

printQuote(message);

// crearing variable to generate random index in array to display background color
var changeBackground = function(){
  document.body.style.background = colors[Math.floor(Math.random()*colors.length)];
}


//set timer to automatically reload page and create new random quote

var message2="";
var quoteText2="";
var sourceText2="";
var citationText2="";
var tagText2= "";
var elem = document.getElementById("quote-box");


setInterval(function(){
    elem.innerHTML="";
  changeBackground();
  function getRandomQuote2(quotes){
    return Math.floor(Math.random() * quotes.length);
      }
  // for loop to create string of variables from array

  for(var i=0; i<=1; i++){
      i = getRandomQuote2(quotes);
      quoteText2 = quotes[i].quote;
      sourceText2 = quotes[i].source;
      tagText2 = quotes[i].tag;
      message2 +="<h1>"+ quoteText2 +"</h1>";
      message2+="<h2>"+ sourceText2 +"</h2><br>";
    if(quotes[i].citation != false){
      citationText2 = quotes[i].citation;
    message2 += "<h3>"+ citationText2 +"</h3><br>";
    i+=1;
    }
    message2+="<h4>"+ tagText2 +"</h4><br>";
  }

  function reprintQuote (message2){
   var outputDiv = document.getElementById("quote-box");
   outputDiv.innerHTML = message2;
  }

    elem.innerHTML=message2;
}, 10000);

setInterval(function(){
    message2="";
}, 19998);



// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

//button click by guest to create new random quote


document.getElementById('loadQuote').addEventListener("click", printQuote, false);
