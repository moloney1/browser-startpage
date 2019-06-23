document.addEventListener("DOMContentLoaded", () => {
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
        }
    ]

	
	let links_ = document.getElementById("links");
	sites.forEach(site => {
		links_.innerHTML += `
			<a
				href=${site.url}
				target="_blank"
			>
				${site.displayName}
			</a>
			<br>
		`
	});

	

	var quote = document.getElementById("quote").innerHTML;
	console.log(quote.substring(184,quote.length-125));
	quote = quote.substring(186,quote.length-126);

	document.getElementById("quote").innerHTML = quote;

	var links = document.getElementsByTagName("a");

	function popUnder(e) {
	  var url = e.srcElement.href;
	  openNewBackgroundTab(url);
	  e.preventDefault();
	}

	function openNewBackgroundTab(url){
	  window.open(url, "s", "width= 640, height= 480, left=0, top=0, resizable=yes, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=no").blur();
	  window.focus();
	}
});

