"use strict";

let Enemies = [
	{ name: "Octopus", health: 100 },
	{ name: "Dino", health: 170 },
	{ name: "Ghost", health: 250 }];

let enemyHTML = document.getElementById("enemy");
const Damage = 10;
let i = 0;

const doDamage = (enemy) => {
	enemyHTML.innerHTML += '<div id="tempFlash" style="position: fixed; top:' + (event.clientY - 25) + 'px; left:' + (event.clientX - 25) + 'px;"><img src="./img/flash1.png"></div>';
	setTimeout(() => {enemyHTML.removeChild(document.getElementById("tempFlash"));}, 70);

	if (i < Enemies.length) {
		if (enemy.health > 0) {
			enemy.health -= Damage;
			document.getElementById("health").innerHTML = '<div id="health">' + enemy.health + '</div>';
		}
		else {
			console.log("__STOP__");
			i++;
			startGame();
		};
	}
	else {
		document.body.innerHTML = '<h1 class="end-label">The end</h1><a href="" class="end-label">Start game again!</a>'
	};
};

const startGame = () => {
	console.log("-------------Game started-----------");
	enemyHTML.innerHTML = '<div class="enemy-attributes"><div id="name" class="enemy-name">' + Enemies[i].name + '</div><div id="health" class="enemy-health">' + Enemies[i].health + '</div></div><div id="enemy" class="enemy-img"><img src="./img/enemy'+i+'.png"></div>';
	enemyHTML.removeEventListener("click", startGame);
	enemyHTML.addEventListener("click", () => { doDamage(Enemies[i]) });
};

enemyHTML.addEventListener("click", startGame);