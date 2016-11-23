/* Kayla Daphnie Ann Dumalo Diniega
Novemeber 23, 2016
Title: Javascript test review
*/

//Variables

var knight = ('Arthur');
var maiden = ('Jane');
var monster = ('Dragon');

//Arrays

var weaponChest = ('Mace', "Sorcerer's Stone", 'Excalibur');

//Object Hero

var wizard = ('Merlin');
var weapon = ('Mace');
var power = (50);

//Hail the King

function swordInTheStone (worthy){
	if ('Arthur' == "worthy")
		console.log("We have found out King worthy.");
	else
		console.log("We must keep searching, for worthy is unworthy.");
}

swordInTheStone ("Arthur");

//Hail the king and Queen

function trueLove (king, queen){
	if ('queen' == 'Guinevere' && 'king' == 'Arthur')
		console.log("Our king and queen shall rule happily ever after.");
	else
		console.log("We must keep searching, for true love must reign over Camelot.");
}

trueLove ("Arthur", "Jane");

//Merlin and Monster

function epicBattle (wizard, enemy, power){
	if (power <= 15)
		console.log("Our " + wizard + " has fallen.");
	else if (power >= 16 && power <= 40)
		console.log("Our " + wizard + " has almost slain the " + enemy + ".");
	else
		console.log("Our " + wizard + " has slain the " + enemy + "!");
}

epicBattle ("Merlin", "Dragon", 50);