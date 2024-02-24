import "phaser";
import { CST } from "../CST";

class PreloaderScene extends Phaser.Scene {
  constructor() {
    super({
      key: CST.SCENES.PRELOADER
    });
    this.logo = null;
  }

  preload() {
    // Preload game assets here
    this.logo = this.add
      .image(CST.CONFIG.width * 0.5, CST.CONFIG.height - 25, "logo")
      .setOrigin(0.5, 1);

    // Display progress bar
    const progressBar = this.add.graphics();
    const progressHolder = this.add.image(
      CST.CONFIG.width * 0.5,
      CST.CONFIG.height * 0.5,
      "progressHolder"
    );

    const width = CST.CONFIG.width;
    const height = CST.CONFIG.height;
    let loadingText = this.make
      .text({
        x: width / 2,
        y: height / 2 - 50,
        text: "Loading...",
        style: {
          fontFamily: "Orbitron",
          fontSize: 20,
          fill: "#ffffff"
        }
      })
      .setOrigin(0.5);

    let percentText = this.make
      .text({
        x: width * 0.5,
        y: height * 0.4975,
        text: "0%",
        style: {
          fontFamily: "Orbitron",
          fontSize: 18,
          color: "#ffffff",
          align: "center"
        }
      })
      .setOrigin(0.5);

    // Optional - to show what current asset is being loaded
    let assetText = this.make
      .text({
        x: width * 0.5,
        y: height * 0.5 + 42,
        text: "",
        style: {
          fontFamily: "Orbitron",
          fontSize: 18,
          color: "#666",
          align: "center"
        }
      })
      .setPadding(0, 0, 0, 5)
      .setOrigin(0.5);

    // Progress bar animation
    this.load.on("progress", (value) => {
      const strValue = (value * 100).toString();
      loadingText.setText("Loading...");
      percentText.setText(`${strValue}%`);
      progressBar.clear();
      progressBar.fillStyle(0xd80000, 1);
      progressBar.fillRect(width * 0.08333, height * 0.5 - 10, 500 * value, 20);
    });

    // Update the file currently being loaded
    this.load.on("fileprogress", (file) => {
      assetText.setText(`Loading asset: ${file.key}`);
    });

    // Remove progress bar when complete and tidy up
    this.load.on("complete", () => {
      progressBar.destroy();
      progressHolder.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      // Optional - *** Load gameData Object here ***
      // Example of loading a JSON file and storing it in an object
      // Remember to load the JSON file in the load game assets below
      // const gameValues = Object.assign({}, this.cache.json.get("gameData"));
      this.scene.start(CST.SCENES.GAME /* gameValues */);
      // Tidy up
      this.destroy();
    });

    // Load game assets here
    this.load.audio("click", "./assets/sounds/Click.m4a");

    // Optional - create and save game settings to local storage
  }

  destroy() {
    // Clean up code here
    this.load.off("progress");
    this.load.off("fileprogress");
    this.load.off("complete");
  }
}

export default PreloaderScene;
