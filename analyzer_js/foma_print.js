function fomaPrint(tkn, valid) {

	var results = document.getElementById("results");
	var content = document.createElement("P");

	results.innerHTML = "";
	if(!valid) {
		results.innerHTML = "Unable to parse."
	}

	else {
		document.getElementById("parse").style.display = "flex";
		for (var i = 0; i < tkn.length; i++) {
			content.innerHTML += `<p>${tkn[i].join(" + ")}</p>`;
			content.innerHTML += "<br />".repeat(2);
		}
		results.appendChild(content);
	}
}


