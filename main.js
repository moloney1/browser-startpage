const sites = [
        {
            "displayName": "GitHub",
            "url": "https://github.com/"
        },
        {
            "displayName": "YouTube",
            "url": "https://youtube.com/"
        }, 
        {
            "displayName": "reddit",
            "url": "https://reddit.com/"
		},
		{
			"displayName": "facebook",
			"url": "https://facebook.com/"
		},
		{
			"displayName": "adverts",
			"url": "https://adverts.ie/"
		},
		{
			"displayName": "twitter",
			"url": "https://twitter.com/"
		},
		{
			"displayName": "personal",
			"url": "https://moloney.xyz/"
		},
		{
			"displayName": "amazon",
			"url": "https://amazon.co.uk/"
		},
		{
			"displayName": "ymail",
			"url": "https://mail.yahoo.ie/"
		},
		{
			"displayName": "gmail",
			"url": "https://mail.google.com/mail/u/0/#inbox"
		},
		{
			"displayName": "twitch",
			"url": "https://twitch.tv"
		}
    ]

document.addEventListener("DOMContentLoaded", () => {

	fetch("http://localhost:5555/dump")
	.then(res => res.json())
	.then(data => {
		if (!data || data.length === 0) throw err;
		populate(data)
	})
	.catch(err => populate(sites));
	
	let links = document.getElementById("links");

	let populate = (siteList) => {
		siteList.forEach(site => {
			links.innerHTML += `
			<a
				href=${site.url}
				target="_blank"
			>
				${site.displayName}</a>
			<br>
		`
		});
	}

	let quote = document.getElementById("quote").innerHTML;
	console.log(quote.substring(184,quote.length-125));
	quote = quote.substring(186,quote.length-126);

	document.getElementById("quote").innerHTML = quote;

});

