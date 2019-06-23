const Url = "http://quotes.rest/qod.json?category=inspire";
fetch(Url)
.then(res =>  res.json())
.then(data => {

	var quoteObj = data.contents.quotes[0];
	var quoteTxt = `"${quoteObj.quote}"`;
	if (quoteObj.author != null) {
		quoteTxt += ` -${quoteObj.author}`;
	}

	document.getElementById("quote").innerHTML = quoteTxt;
	console.log(quoteTxt);

})
.catch(err => console.log(err))
