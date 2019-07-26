"use strict";

const phrases = [
	'creature', 'cantrip', 'stack', 'Bob', 'Gary', 'hand', 'draw', 'mulligan', 'bear', 'Jund', 'Bant', 'Esper', 'Grixis', 'Naya', 'instant', 'sorcery', 'interrupt', 'enchantment', 'planeswalker', 'artifact', 'legendary', 'color', 'multicolor', 'protection', 'exile', 'graveyard', 'aggro', 'control', 'allied colors', 'alpha strike', 'archetype', 'meta', 'metagame', 'Abzan', 'Azorius', 'beatdown', 'beats', 'beatstick', 'big butt', "he's got a bit of an ass on him", 'blink', 'blinking', 'blow up', 'board', 'board presence', 'board state', 'board wipe', 'body', 'bolt', 'bomb', 'Boros', 'bounce', 'broken', 'burn', 'card', 'card pool', 'mana pool', 'chump', 'chump block', 'CMC', 'clock', '4 turn clock', 'combo', 'crack', 'crack fetch', 'fetch', 'fetch land', 'pop', 'pop off', 'creatureball', 'hydra', 'dragon', 'curve', 'curve out', 'cut', 'dead card', 'deck', 'decking', 'dig', 'digging', 'dig for an answer', 'dome', 'dork', 'drain', 'mana dork', '1 drop', '2 drop', '3 drop', 'durdle', 'durdler', 'EDH', 'token', 'token engine', 'ETB', 'evasion', 'fatty', 'finisher', 'firebreathing', 'fixing', 'fizzle', 'float', 'floating', 'gas', 'out of gas', 'glass cannon', 'go off', 'go wide', 'Golgari', 'grind', 'grinder', 'grindy', 'Gruul', 'hard cast', 'hate', 'hate bear', 'hose', 'hoser', 'mana hose', 'in the air', 'Izzet', 'jankey', 'jankey combo', 'Jeskai', 'junk', 'keeper', 'land drop', 'land for turn', 'swing', 'in response', 'lethal', 'maindeck', 'sideboard', 'man land', 'mana rock', 'mana screwed', 'Mardu', 'midrange', 'mill', 'mirror match', 'mono', 'mono white', 'mono blue', 'mono black', 'mono green', 'mono red', 'nut draw', 'on a stick', 'shock on a stick', 'Orzhov', 'pauper', 'ping', 'Timmy', 'Johnny', 'Spike', 'Mel', 'Vorthos', 'playset', 'pro', 'pro-white', 'pro-blue', 'pro-red', 'pro-black', 'pro-green', 'prime time', 'prison', 'proxy', 'pump', 'punch', 'race', 'Rakdos', 'ramp', 'reanimate', 'reanimator', 'removal', 'response', 'ritual', 'run', 'sac', 'scoop', 'Selesnya', 'shell', 'shock', 'shock land', 'pain land', 'check land', 'beefcake', 'Simic', 'snapcaster', 'splash', 'stabilize', 'stripland', 'Sultai', 'sweeper', 'synergy', 'tapped out', 'tank', 'tempo', 'Temur', 'threat', 'timewalk', 'topdeck', 'top 8', 'trade', 'combat trick', 'tutor', 'ultimate', 'utility land', 'vanilla', 'value', 'voltron', 'wedge', 'weenie', 'wheel', 'Academy', 'Blinky', 'Chimney Pimp', 'Goyf', 'mana birds', 'moxes', 'moxen', 'Steve', 'Canadian Threshold', 'modern', 'legacy', 'vintage', 'standard', 'banned', 'restricted', 'power 9'
];

function generateRandomPhrase() {
	return phrases[Math.floor((Math.random() * phrases.length))];
};

function constructParagraph() {
	let para = "";
	while (para.length < 1400) {
		if (para.length === 0) {
			const temp = generateRandomPhrase();
			para = temp[0].toUpperCase() + temp.substring(1);
		} else {
			para = para + " " + generateRandomPhrase();
		}
	}
	return para;
};

module.exports = function generateText(numParas) {
	numParas > 20 && (numParas = 20);
	numParas < 1 && (numParas = 1);
	let text = '';
	for (let i = 0; i < numParas; i++) {
		i === 0 && (text = constructParagraph());
		i !== 0 && (text = text + `\n\n` + constructParagraph());
	};
	return text;
};