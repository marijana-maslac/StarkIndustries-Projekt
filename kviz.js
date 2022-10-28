let prvoPitanje = ["How would you describe yourself: "];
let opcija1 = ["<input onclick=prvo() name=button001 type=radio />Genius<br /><input onclick=drugo() name=button001 type=radio />Caring<br /><input onclick=trece() name=button001 type=radio />Strong<br />"];

let drugoPitanje = ["What would you rather do when you grow up: "];
let opcija2 = ["<input onclick=prvo() name=button002 type=radio />Create new technology <br /><input onclick=drugo() name=button002 type=radio />Boxer<br /><input onclick=trece() name=button002 type=radio />Soldier<br />"];

let trecePitanje = ["Which color do you prefer: "];
let opcija3 = ["<input onclick=prvo() name=button003 type=radio />Yellow<br /><input onclick=drugo() name=button003 type=radio />Blue<br /><input onclick=trece() name=button003 type=radio />Red<br />"];

let cetvrtoPitanje = ["How much do you love someone: "];
let opcija4 = ["<input onclick=prvo() name=button004 type=radio />3000<br /><input onclick=drugo() name=button004 type=radio />normal range<br /><input onclick=trece() name=button004 type=radio />You are a ROBOT, you don't love anyone.<br />"];

let a = 0;
let b = 0;
let c = 0;
function prvo(){
	a++;
}
function drugo(){
	b++;
}
function trece(){
	c++;
}

window.onload = function() {
	pitanje.innerHTML = prvoPitanje;
	opcije.innerHTML = opcija1;
	botun.innerHTML = "<button onclick=f2()>Dalje</button>";	
}
function f2() {
	pitanje.innerHTML = drugoPitanje;
	opcije.innerHTML = opcija2;	
	botun.innerHTML = "<button onclick=f3()>Dalje</button>";
}
function f3() {
	pitanje.innerHTML = trecePitanje;
	opcije.innerHTML = opcija3;	 
	botun.innerHTML = "<button onclick=f4()>Dalje</button>";
}
function f4() {	
	pitanje.innerHTML = cetvrtoPitanje;
	opcije.innerHTML = opcija4;
	botun.innerHTML = "<button onclick=rezultat()>Zavrsi</button>";	
}
function rezultat() { 
	pitanje.innerHTML = "Rezultati: ";
	opcije.innerHTML = "";
	if(a>b && a>c){
		rez.innerHTML = "We create our own demons. Congrats!! Anthony Edward Stark, Or Tony Stark for short is known as Iron Man. Tony is a billionaire, genius, former playboy, philantropist and is also well-known as famous superhero Iron Man, owns Stark Industries - formerly acting as its CEO - lives in his house in Malibu, and is one of the founding and lead members of The Avengers. ";
	}
	else if(b>a && b>c){
		rez.innerHTML = "You're not Iron Man. You're never gonna be Iron Man. Nobody could live up to Tony. Not even Tony. Tony was my best friend. And he was a mess. Congrats!! Harold Joseph Happy Hogan is one of Tony Stark's closest friends and his personal chauffeur who formerly worked as his personal bodyguard and Head of Security of Stark Industries.";
	}
	else if(c>a && c>b){
		rez.innerHTML = "I'm just a kid from Brooklyn. Captain Steven Grant Steve Rogers is the only living, successful test subject of the Super Soldier Serum developed by Abraham Erskine during World War II, after which the patriotic super soldier became known as Captain America.";
	}
	else if(a==0 && b==0 && c==0){
		rez.innerHTML = "I am GROOT!  Groot is a Flora colossus and the accomplice of Rocket Raccoon. Together, the pair had traveled the galaxy picking up bounties until they met Star-Lord and Gamora just before the four of them were captured and put into the Kyln, where they also met Drax the Destroyer.";
	}
	else if(a==b && b==a){
		rez.innerHTML = "I am trying to do the job that you were meant to do. Virginia Pepper Potts is the CEO of Stark Industries. Originally working as Tony Stark's personal assistant, she would take care of his schedule and perform any task he wished. During this time, Potts became good friends with Stark and soon, they had begun developing romantic feelings for each other.";
	}
	else if(a==c && c==a){
		rez.innerHTML = "Started out, J.A.R.V.I.S. was just a natural language UI. Now he runs the Iron Legion. He runs more of the business than anyone besides Pepper.And we can get it easy form google and do it. Just A Rather Very Intelligent System (J.A.R.V.I.S.) was originally Tony Stark's natural-language user interface computer system, named after Edwin Jarvis, the butler who worked for Howard Stark. ";
	}
	else if(b==c && c==b){
		rez.innerHTML = "I'm just a friendly neighborhood Spider-Man.  Peter Parker is a high school student and a superhero who possesses spider-like abilities due to a spider bite and uses his superpowers to fight crime under the alter ego of Spider-Man. Despite his best efforts to keep his identity secret from the world, he was found and recruited by Tony Stark, gaining a new suit and technology in exchange. ";
	}
	botun.innerHTML = "<button onclick=ponovi()>Rijesi ponovno</button>";
}

function ponovi() {
	location.reload();
}