// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes

var quotes=[
  {
    quote:“Be yourself; everyone else is already taken.”,
    source: " - Oscar Wilde",
    citation: false
  },
  {
    quote:“You only live once, but if you do it right, once is enough.”,
    source:" - Mae West",
    citation: false
  },
  {
    quote:“Nature can be lethal. But it doesn't hold a candle to man.”,
    source:" - Samuel L. Jackson",
    citation:"<i>Deep Blue Sea, 1999</i>"
  },
  {
    quote:"I never look back darling, it distracts from the now.",
    source:" - Edna Mode",
    citation: "<i>The Incredibles, 2004</i>"
  },
  {
    quote: "Endurance is the crowning quality, And patience all the passion of great hearts.",
    source:" - James Russell Lowell",
    citation: false
  },
  {
    quote: "Popularity is not an indication of quality.",
    source: " - Vanna Bonta"
    citation: false
  }
]



// Create the getRandomQuuote function and name it getRandomQuote



// Create the printQuote funtion and name it printQuote



// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
