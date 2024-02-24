import "phaser";
import { CST } from "./CST";
import config from "./config";

import BootScene from "./scenes/BootScene";
import PreloaderScene from "./scenes/PreloaderScene";
import GameScene from "./scenes/GameScene";

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add(CST.SCENES.BOOT, BootScene);
    this.scene.add(CST.SCENES.PRELOADER, PreloaderScene);
    this.scene.add(CST.SCENES.GAME, GameScene);
    this.scene.start(CST.SCENES.BOOT);
  }
}

window.Game = new Game();
