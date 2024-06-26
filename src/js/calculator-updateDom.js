import {getCalcScreen} from "./calculator-getDOM.js";

function updateCalcScreen (equation) {
    const screen = getCalcScreen();
    screen.textContent = `${equation}`
}


export  {updateCalcScreen,};
