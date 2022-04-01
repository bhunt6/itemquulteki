function fomaPrintInvert(tkn, valid){

	var results = document.getElementById("output");
	var content = document.createElement("P");

	results.innerHTML = "";
	if(!valid) {
		results.innerHTML = "Invalid entry."
	}

	else {
		for(i=0; i<tkn.length; i++){
			content.innerHTML = (tkn[i] + "<br>" + "<br>" + "<hr>" + "<br>");
			results.appendChild(content);
		}
	}
}
