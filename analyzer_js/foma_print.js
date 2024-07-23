function fomaPrint(tkn, valid) {

	var results = document.getElementById("results");
	var content = document.createElement("P");
	var ptn = [
		"[V→V]",
		"[N→V]",
		"[V→N]",
		"[N→N]"
	]; 
	var re = new RegExp(ptn.join("|"), "i");

	results.innerHTML = "";
	if(!valid) {
		results.innerHTML = "Unable to parse."
	}

	else {
		tkn.sort((a, b) => a.length - b.length);
		document.getElementById("parse").style.display = "flex";
		for (let i = 0; i < tkn.length; i++) {
			let final = [];
			content.innerHTML += `&#8227; `; 
			for (let j = 0; j<tkn[i].length; j++){
				if(j==0) { 
					content.innerHTML += `<a target="_blank" rel="noopener noreferrer" href="https://bhunt6.github.io/akuzipigestun-sangaawa/results.html?search=${tkn[i][j].toLowerCase()}&lang=akuz">${tkn[i][j]}</a> + `;
				}
				else if(!tkn[i][j].includes("→")) {
					final.push(tkn[i][j]);
				}
				else {
					content.innerHTML += `<a target="_blank" rel="noopener noreferrer" href="https://bhunt6.github.io/akuzipigestun-sangaawa/results.html?search=-${tkn[i][j].toLowerCase().replace(/[\@\–\-\+\?\±\%\:\₁]/g, "").replace(/\<su[bp]\>[\d*ef]\<\/su[bp]\>/g, "").replace(/\[.*\]/g,"").replace(/\~[sf]*/g, "").replace(/\(.*\)/g,"")}-&lang=akuz">${tkn[i][j]}</a> + `;
				}
			}
			content.innerHTML += final.join(" + ");
			content.innerHTML += "<br />".repeat(2);
		}
		results.appendChild(content);
	}
}