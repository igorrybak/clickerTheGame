"use strict";

import {doDamage} from "doDamage";

let Enemies = [
	{ name: "Blued", health: 100 },
	{ name: "Pinking", health: 170 },
	{ name: "Jumper", health: 250 }];

let enemyHTML = document.getElementById("enemy");
const Damage = 10;
let i = 0;



const startGame = () => {
	// console.log("-------------Game started-----------");
	enemyHTML.innerHTML = '<div class="enemy-attributes"><div id="name" class="enemy-name">' + Enemies[i].name + '</div><div id="health" class="enemy-health">' + Enemies[i].health + '</div></div><div id="enemy" class="enemy-img"><img src="./img/gif/enemy'+i+'.gif"></div>';
	// setInterval(() => { getElementById("health").innerHTML =  }, 1000);
	enemyHTML.removeEventListener("click", startGame);
	enemyHTML.addEventListener("click", (event) => { doDamage(event, Enemies[i]); });
};

enemyHTML.addEventListener("click", startGame);