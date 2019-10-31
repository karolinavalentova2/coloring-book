"use strict";

let activeSwatch;
let activeSwatchColor;

async function doStart() {
    await loadSVG();
    doSetupColorSwathes();
    doSetSVGToFill();
}

function doSetSVGToFill() {
    const SVGS = document.querySelectorAll('.cls-1');

    if(SVGS.length) {
        SVGS.forEach((part) => {
            part.onclick = () => {
                setPartColor(part);
            }
        })
    }
}

async function loadSVG() {
    try {
        const SVGS = {
            spongeBob: await (await fetch("./images/spongebob.svg")).text(),
            colorPicker: await (await fetch("./images/swatches-set1.svg")).text(),
            displaySwatch: await (await fetch("./images/active-color.svg")).text(),
        };

        document.getElementById('insert-SVG').innerHTML = SVGS.spongeBob;
        document.getElementById('insert-color-picker').innerHTML = SVGS.colorPicker;
        document.getElementById('insert-display-swatch').innerHTML = SVGS.displaySwatch;

    } catch(error) {
        console.error('Cannot read svg file, reason: ' + error.message);
    }
}

function doSetupColorSwathes() {
    const swatches = document.querySelectorAll('.swatch');
    activeSwatch = document.getElementById('active-swatch');

    if(swatches.length) {
        swatches.forEach((swatch) => {
            swatch.onclick = () => {
                doSelectColor(swatch);
            }
        })
    }
}

function doSelectColor(svg) {
    if(svg) {
        activeSwatchColor = svg.getAttribute('fill');
        activeSwatch.setAttribute('fill', activeSwatchColor);
    }
}

function setPartColor(part) {
    if(part.classList.contains('cls-1')) part.classList.remove('cls-1')

    part.setAttribute('fill', activeSwatchColor);
}

document.body.onload = doStart;


