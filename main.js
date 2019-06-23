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
		
	let links = document.getElementById("links");
	sites.forEach(site => {
		links.innerHTML += `
			<a
				href=${site.url}
				target="_blank"
			>
				${site.displayName}</a>
			<br>
		`
	});

	let quote = document.getElementById("quote").innerHTML;
	console.log(quote.substring(184,quote.length-125));
	quote = quote.substring(186,quote.length-126);

	document.getElementById("quote").innerHTML = quote;

	function popUnder(e) {
	  let url = e.srcElement.href;
	  openNewBackgroundTab(url);
	  e.preventDefault();
	}

	function openNewBackgroundTab(url){
	  window.open(url, "s", "width= 640, height= 480, left=0, top=0, resizable=yes, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=no").blur();
	  window.focus();
	}
});

