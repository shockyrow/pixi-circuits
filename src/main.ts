import { CircuitApp } from "./app";
import { PixiRenderer } from "./renderer/pixi-renderer";

const container = document.getElementById("app");

if (container === null) {
  throw new Error("Container not found");
}

const renderer = new PixiRenderer();
const app = new CircuitApp(container, renderer);
app.run().then(() => {
  console.log("App running...");
});
// app.destroy();
