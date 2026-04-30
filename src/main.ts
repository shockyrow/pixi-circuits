import { CircuitApp } from "./app";

const container = document.getElementById("app");

if (container === null) {
  throw new Error("Container not found");
}

const app = new CircuitApp(container);
app.run();
app.destroy();
