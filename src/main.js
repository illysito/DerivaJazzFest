import countdown from "./scripts/countdown";
import heroCanvas from "./scripts/heroCanvas";
import heroType from "./scripts/heroType";
import infoType from "./scripts/infoType";
import program from "./scripts/programType";

// import "./styles/style.css";

function runDerivaFunctions() {
  countdown();
  const canvas = document.querySelector("#webgl");
  if (canvas) {
    heroCanvas();
  }
  heroType();
  infoType();
  program();
}

runDerivaFunctions();
