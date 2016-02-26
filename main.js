var quote = document.getElementById("quote").innerHTML;
console.log(quote.substring(184,quote.length-125));
quote = quote.substring(186,quote.length-126);

document.getElementById("quote").innerHTML = quote;

var links = document.getElementsByTagName("a");

for (var i = 0; i < links.length; i++){
  links[i].setAttribute("target", "_blank");
//  links[i].addEventListener("click", popUnder);
}

function popUnder(e) {
  var url = e.srcElement.href;
  openNewBackgroundTab(url);
  e.preventDefault();
}

function openNewBackgroundTab(url){
  window.open(url, "s", "width= 640, height= 480, left=0, top=0, resizable=yes, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=no").blur();
  window.focus();
}