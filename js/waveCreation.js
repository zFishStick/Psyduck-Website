function createLowerWave() {
    let upperWave = document.getElementById('lowerWave');
    let fragment = document.createDocumentFragment();
    for (let index = 0; index < 14; index++) {
        let lowWaveDiv = document.createElement("div")
        lowWaveDiv.id = "low-wave-element";
        fragment.appendChild(lowWaveDiv)
    }
    upperWave.appendChild(fragment)
}
createLowerWave()

function createUpperWave() {
    let upperWave = document.getElementById('upperWave');
    let fragment = document.createDocumentFragment();
    for (let index = 0; index < 14; index++) {
        let upWaveDiv = document.createElement("div");
        upWaveDiv.id = "up-wave-element";
        fragment.appendChild(upWaveDiv);
    }
    upperWave.appendChild(fragment); // Aggiungi tutto in un colpo solo
}
createUpperWave();