let date = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let day, day_month, month, year;

day = days[date.getDay()];
day_month = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
month = months[date.getMonth()];
year = date.getFullYear();

let dateString = `${day}, ${day_month} ${month} ${year}`; 

let refresh;
document.addEventListener("DOMContentLoaded", () => {

	updateClock();

	document.getElementById("date").innerHTML = dateString + "<br>";
	refresh = window.setInterval(updateClock, 1000);

});

let timeString;
let hour, minute, second;

function updateClock() {

	date = new Date();
	hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
	minute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
	second = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();

	timeString = [hour, minute, second].join(":");

	document.getElementById("clock").innerHTML = timeString;

}


