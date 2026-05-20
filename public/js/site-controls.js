// =========================================================
// NIGHTSKYHIGH CONTROL SYSTEM
// =========================================================

let controlState = 0;

const controlButton = document.getElementById("controlSystemButton");
const controlPanel = document.getElementById("controlSystemPanel");
const realControls = document.getElementById("realControls");

controlButton.addEventListener("click", function () {

    controlState++;

    // FIRST CLICK
    if (controlState === 1) {
        controlPanel.classList.add("show");
    }

    // SECOND CLICK
    else if (controlState === 2) {
        realControls.classList.add("show");
    }

    // THIRD CLICK
    else {
        controlPanel.classList.remove("show");
        realControls.classList.remove("show");

        controlState = 0;
    }

});
// =========================================================
// FULL SCREEN TOGGLE
// =========================================================

const fullscreenToggle = document.getElementById("fullscreenToggle");

fullscreenToggle.addEventListener("click", function () {

    if (!document.fullscreenElement) {

        document.documentElement.requestFullscreen();

    } else {

        document.exitFullscreen();

    }

});