import "phaser";
import { CST } from "../CST";

class BootScene extends Phaser.Scene {
	constructor() {
		super({
			key: CST.SCENES.BOOT
		});
	}

	init() {
		console.log("BootScene Init");
	}

	preload() {
		this.load.image("logo", "./assets/outcan-games-logo.png");
		this.load.image("progressHolder", "./assets/progress-holder.png");
	}

	create() {
		this.scene.start(CST.SCENES.PRELOADER);
	}

}

export default BootScene;