"use strict";

let enemyHTML = document.getElementById("enemy");
let i = 0;

const startGame = () => {
	enemyHTML.innerHTML = '<div class="enemy-attributes"><div id="name" class="enemy-name">' + Enemies[i].name + '</div><div id="health" class="enemy-health">' + Enemies[i].health + '</div></div><div id="enemy" class="enemy-img"><img src="./img/enemy'+i+'.png" onclick="addEvent()"></div>';
};

const changeMonster = () => {
	enemyHTML.innerHTML = '<div class="enemy-attributes"><div id="name" class="enemy-name">' + Enemies[i+1].name + '</div><div id="health" class="enemy-health">' + Enemies[i+1].health + '</div></div><div id="enemy" class="enemy-img"><img src="./img/enemy'+(i+1)+'.png" onclick="addEvent()"></div>';
	i++;
};

const doDamage = (enemy) => {
	enemyHTML.innerHTML += '<div id="tempFlash" style="position: fixed; top:' + (event.clientY - 25) + 'px; left:' + (event.clientX - 25) + 'px;"><img src="./img/flash1.png"></div>';
	setTimeout(() => {enemyHTML.removeChild(document.getElementById("tempFlash"));}, 70);

	if (i < Enemies.length) {
		if (enemy.health > 0) {
			console.log(enemy.health);
			enemy.health -= 50;	
		}
		else {
			changeMonster();
		};
	}
	else {
		document.body.innerHTML = '<h1>The end.</h1>'
	};
	
};

const addEvent = () => {
	enemyHTML.addEventListener("click", doDamage(Enemies[i]));
};

let Enemies = [
	{ name: "Octopus", health: 100 },
	{ name: "Dino", health: 150 },
	{ name: "Ghost", health: 230 }];