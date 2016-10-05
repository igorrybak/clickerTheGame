"use strict";

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