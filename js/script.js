/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  array with 6 objects representing quotes
***/
const quotes = [
  {
    quote: "I think God, in creating man, somewhat overestimated his ability.",
    source: "Oscar Wilde"
  },
  {
    quote: "Always forgive your enemies; nothing annoys them as much.",
    source: "Oscar Wilde"
  },
  {
    quote: "Ideas are the source of all things.",
    source: "Plato"
  },
  {
    quote: "Winter is coming.",
    source: "Ned Stark",
    citation: "A Song of Ice and Fire"
  },
  {
    quote: "Any fool can know. The point is to understand.",
    source: "Albert Einstein",
  },
  {
    quote: "Definitions belong to the definers, not the defined.",
    source: "Toni Morrison",
    citation: "Beloved",
    year: 1987
  }

];

console.log(quotes);


/***
   getRandomQuotes() picks one of the objects in quotes array at random
***/
function getRandomQuote(){
  const random = Math.floor(Math.random()*quotes.length);
  return quotes[random];
}




/***
   printQuote() gets a random quote representing a quote from quotes array by calling getRandomQuote()
   It creates a html string using properties of said object,
   replaces the current html content within <div id="quote-box"></div> with new html content
   as determined by the created html string

***/
function printQuote(){
  const rQuote = getRandomQuote();
  let html_string =
    '<p class="quote">' + rQuote.quote  + '</p>'
    + '<p class="source">' + rQuote.source;
  if(rQuote.citation){
    html_string += '<span class="citation">' + rQuote.citation +  '</span>'
  }
  if(rQuote.year){
    html_string += '<span class="year">' + rQuote.year + '</span>';
  }
  html_string += '</p>';
  document.getElementById('quote-box').innerHTML = html_string;
}



/***
  An Event Listener for a click event on the button is created here
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
