function fomaPrint(tkn, valid) {

	var results = document.getElementById("results");
	var content = document.createElement("P");

	results.innerHTML = "";
	if(!valid) {
		results.innerHTML = "Unable to parse."
	}
	
	//else if (document.getElementById("up").checked){
	//	results.innerHTML = "<b>" + "Surface form:" + "</b>"+ "<br>" + "<br>" + tkn;
	//}

	else {
		document.getElementById("parse").style.display = "flex";
		for(i=0; i<tkn.length; i++){
			for(j=0; j<tkn[i].length; j++){
				if(j == tkn[i].length - 1){
					content.innerHTML += (tkn[i][j] + "<br>" + "<br>" + "<hr>" + "<br>");
				}
				else{
					content.innerHTML += (tkn[i][j] + "\n\n");
				}
			}
		results.appendChild(content);
		}
	}
}