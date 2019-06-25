const Url = "http://quotes.rest/qod.json?category=inspire";
fetch(Url)
.then(res =>  res.json())
.then(data => {

	let quoteObj = data.contents.quotes[0];
	let quoteTxt = `"${quoteObj.quote}"`;
	if (quoteObj.author != null) {
		quoteTxt += ` -${quoteObj.author}`;
	}

	document.getElementById("quote").innerHTML = quoteTxt;
	console.log(quoteTxt);

})
.catch(err => console.log(err))
