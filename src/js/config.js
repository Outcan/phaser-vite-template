import Phaser from "phaser";

export default {
	type: Phaser.AUTO,
	width: 600,
	height: 800,
	parent: "game",
	backgroundColor: "#EEE",
	physics: {
		default: "arcade",
		arcade: {
			debug: false,
			fixedStep: false,
			fps: 300,
			gravity: {
				x: 0,
				y: 0
			}
		}
	},
	pixelArt: false,
	roundPixels:true
};

