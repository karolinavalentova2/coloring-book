"use strict";

let spongebobSVG;

async function processTasks() {
    try {
        // Calling fetch within a function in order to pass the returned data to .json() to be converted into a SVG
        const spongebob = await (await fetch("./images/spongebob.svg")).text();

        spongebobSVG = spongebob ? spongebob : [];
        showSVG(spongebobSVG);

    } catch(error) {
        spongebobSVG = [];
        console.error('Cannot read SVG file, reason: ' + error.message);
    }
}

processTasks();