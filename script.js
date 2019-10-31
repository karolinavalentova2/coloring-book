"use strict";

function doStart() {
    loadSVG();
}

async function loadSVG() {
    try {
        const SVGS = {
            spongeBob: await (await fetch("./images/spongebob.svg")).text(),
            colorPicker: await (await fetch("./images/swatches-set1.svg")).text(),
            displaySwatch: await (await fetch("./images/active-color.svg")).text(),
        }

        document.getElementById('insert-SVG').innerHTML = SVGS.spongeBob;
        document.getElementById('insert-color-picker').innerHTML = SVGS.colorPicker;
        document.getElementById('insert-display-swatch').innerHTML = SVGS.displaySwatch;

    } catch(error) {
        console.error('Cannot read svg file, reason: ' + error.message);
    }
}

doStart();


