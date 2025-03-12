function copy() {
	navigator.clipboard.writeText(result.replace(/<br>/g, "\n"))
}

function safe(input) {
    return input
        .replace(/&/g, "&amp;")  // Escapes the '&' character
        .replace(/</g, "&lt;")   // Escapes the '<' character
        .replace(/>/g, "&gt;")   // Escapes the '>' character
        .replace(/"/g, "&quot;") // Escapes the '"' character
        .replace(/'/g, "&#39;"); // Escapes the "'" character
}

var Times = Number(safe(prompt("How many times?")))
var Txt = safe(prompt("What do you want to show at first when A talks?"))

var result = "A: " + Txt + "<br>B: Did I ask?"
if (Times == 0) {
	var result = result + "<br>A: Okay. No, sorry"
} else {
	var DidIAsk = "Did I ask?"
	for(i=1;i<=Times;i++) {
		var DidIAsk = "Did I ask you to ask me " + "‘" + DidIAsk + "’" + "?"
		if (((i+1)%2) == 0) {
			var AorB = "A: "
		} else {
			var AorB = "B: "
		}
		var result = result + "<br>" + AorB + DidIAsk
	}
}
document.getElementById("result").innerHTML = result
