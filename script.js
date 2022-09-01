var counter = 0
var timeReaming = {
	days:10000,
	hours:0,
	minutes:0,
	seconds:0,
}
var timers = [
   document.getElementById("day"),
   document.getElementById("hour"),
   document.getElementById("minute"),
   document.getElementById("second"),
]

setInterval(() => {
	if (timeReaming.hours < 0) {
		timeReaming.days -= 1
		timeReaming.hours = 23
	}
	if (timeReaming.minutes < 0) {
		timeReaming.hours -= 1
		timeReaming.minutes = 59
	}
	if (timeReaming.seconds < 0) {
		timeReaming.minutes -= 1
		timeReaming.seconds = 59
	}
	timeReaming.seconds -= 1
	timers[0].innerText = timeReaming.days
	timers[1].innerText = timeReaming.hours
	timers[2].innerText = timeReaming.minutes
	timers[3].innerText = timeReaming.seconds
	document.getElementById("count").innerText = counter
}, 1000)