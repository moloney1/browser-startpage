var xhr = new XMLHttpRequest();
xhr.open("GET","http://quotes.rest/qod.json?category=inspire",false);
xhr.send();
var response = JSON.parse(xhr.responseText);
if (!response.error){
	var quoteObj = response.contents.quotes[0];
	// console.log(quoteObj.quote);
	// console.log(quoteObj.author);
	var quoteText = "\"" + quoteObj.quote + "\" -" + quoteObj.author;
	document.addEventListener("DOMContentLoaded", function(){
		document.getElementById("quote").innerHTML = quoteText;
	})
	
}
