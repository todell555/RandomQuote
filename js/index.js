var currentQuote = '';
var availableQuotes = ['It\'s OK to have your eggs in one basket as long as you control what happens to that basket.', 'Any product that needs a manual to work is broken.', 'The future of humanity is going to bifurcate in two directions: Either it\'s going to become multiplanetary, or it\'s going to remain confined to one planet and eventually there\'s going to be an extinction event.', 'I think it matters whether someone has a good heart.', 'I don\'t create companies for the sake of creating companies, but to get things done.', 'Really, the only thing that makes sense is to strive for greater collective enlightenment.', 'I think it\'s very important to have a feedback loop, where you\'re constantly thinking about what you\'ve done and how you could be doing it better.', 'I think you should always bear in mind that entropy is not on your side.', 'My opinion is it\'s a bridge too far to go to fully autonomous cars.', 'The reason we should do a carbon tax is because it\'s the right thing to do. It\'s economics 101, elementary stuff.'];

function setRandomQuote() {
  //clear the fluid blockquote container first, otherwise it won't resize correctly to the new quote if it is much shorter
  document.getElementById("quote").innerHTML = ""
  
  //now grab a new random quote to display
	currentQuote = availableQuotes[Math.floor(Math.random()*availableQuotes.length)];
	
	$('#quote').html(currentQuote);
	$('#tweetQuote').attr('href', 'https://twitter.com/intent/tweet?text='+currentQuote+' -Elon Musk').attr('target', '_blank');
}

$(function() {
	$('#randomQuote').click(function() {
		setRandomQuote();
	});
});