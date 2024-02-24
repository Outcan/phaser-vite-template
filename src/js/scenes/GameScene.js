import "phaser";
import { CST } from "../CST";

class GameScene extends Phaser.Scene {
  constructor() {
    super({
      key: CST.SCENES.GAME
    });
  }

  init() {}

  preload() {}

  create() {
    this.add
      .image(CST.CONFIG.width * 0.5, CST.CONFIG.height - 25, "logo")
      .setAlpha(0.4)
      .setOrigin(0.5, 1);

    // Game title
    this.add
      .text(CST.CONFIG.width * 0.5, 50, "Amazing game here", {
        fontFamily: "Orbitron",
        fontSize: 24,
        color: "#000",
        align: "center"
      })
      .setOrigin(0.5);
  }

  update() {}
}

export default GameScene;
