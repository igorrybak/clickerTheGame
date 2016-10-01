"use strict";

let Enemies = [
	{ name: "Blued", health: 100 },
	{ name: "Pinking", health: 170 },
	{ name: "Jumper", health: 250 }];

let enemyHTML = document.getElementById("enemy");
const Damage = 10;
let i = 0;

const doDamage = (event, enemy) => {
	// console.log(event);
	enemyHTML.innerHTML += '<div id="tempFlash" style="position: fixed; top:' + (event.clientY - 25) + 'px; left:' + (event.clientX - 25) + 'px;"><img src="./img/flash1.png"></div>';
	setTimeout(() => { document.getElementById("tempFlash").remove(); }, 70);

	if (i < Enemies.length) {
		if (enemy.health > 0) {
			enemy.health -= (Math.floor(Math.random() * 11) + 1);
			document.getElementById("health").innerHTML = enemy.health;
			if (enemy.health <=0 ) {
				i++;
				startGame();
			}
		}
		else {
			// console.log("__STOP__");
			i++;
			startGame();
		};
	}
	else {
		document.body.innerHTML = '<div class="end-label"><h1>The end</h1><a href="">Start game again!</a></div>'
	};
};

const startGame = () => {
	// console.log("-------------Game started-----------");
	enemyHTML.innerHTML = '<div class="enemy-attributes"><div id="name" class="enemy-name">' + Enemies[i].name + '</div><div id="health" class="enemy-health">' + Enemies[i].health + '</div></div><div id="enemy" class="enemy-img"><img src="./img/gif/enemy'+i+'.gif"></div>';
	// setInterval(() => { getElementById("health").innerHTML =  }, 1000);
	enemyHTML.removeEventListener("click", startGame);
	enemyHTML.addEventListener("click", (event) => { doDamage(event, Enemies[i]); });
};

enemyHTML.addEventListener("click", startGame);