
var starting_bid = 500;

document.getElementById("submit").onclick = function () {
    var degree = document.getElementById("education").value;
	var networth = document.getElementById("networth").value;
	var skills = {
		dombra: document.getElementById("dombra"),
		cook: document.getElementById("cook"),
		easychar: document.getElementById("easychar"),
		singing: document.getElementById("sing")
	};
	var age = {
		young: document.getElementById("young"),  
	    middle: document.getElementById("middle"),
	    old: document.getElementById("old")
	};
	var reputation = {
		gossip_parent: document.getElementById("badp"),
	    gossip_char: document.getElementById("gchar"),  
		gossip_person: document.getElementById("personality")
	};  
	var form = document.getElementById("form");

	if(degree!="blank"){
		if(degree=="bachelor"){
			starting_bid*=1.5;
		} else if(degree=="college"){
			starting_bid*=1.2;
		} else if(degree=="high_school"){
			starting_bid*=1.05;
		} else if(degree=="middle_school"){
			starting_bid*=0.9;
		}
	}
	if(networth!="blank"){
		if(networth=="upper_class"){
			starting_bid*=2;
		} else if(networth=="middle_class"){
			starting_bid*=1.5;
		} else if(networth=="lower_class"){
			starting_bid*=1.2;
		}
	}
	if(skills.dombra) starting_bid+=100;
	if(skills.cook) starting_bid+=200;
	if(skills.easychar) starting_bid+=150;
	if(skills.singing) starting_bid+=100;
	if(age.young) starting_bid*=1.5;
	if(age.middle)starting_bid*=1.2;
	if(age.old) starting_bid*=0.95;
	if(reputation.gossip_parent) starting_bid*=0.85;
	if(reputation.gossip_char) starting_bid*=0.9;
	if(reputation.gossip_person) starting_bid-=200;
	form.style.display = "none";
	var h2 = document.createElement("h2");
	h2.style.width = "100%";
	h2.style.height = "100px";
	h2.style.fontSize = "30px";
	h2.style.textAlign = "center";
	h2.style.color = "black";
	h2.innerHTML = "Bribe price is "+Math.round(starting_bid);

	document.getElementById("body").appendChild(h2);
}
