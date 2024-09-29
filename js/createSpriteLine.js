const body = document.getElementById('sprite-body-page')
const imgSpriteSrc = "/img/sprites/psyduck-sprite-"
const imgSpriteSrc2 = "/img/other-sprites/psyduck-sprite-2."
const firstLine = document.getElementById('first-line');
const lastLine = document.getElementById('last-line');
const arrow = document.getElementById('arrow')
const gameName = ['Pocket Monster', 'Pokémon Rosso / Pokémon Blu', 'Pokémon Giallo', 'Pokémon Oro', 'Pokémon Argento',
    'Pokémon Rubino / Pokémon Zaffiro / Pokémon Smeraldo', 'Pokémon Rosso Fuoco / Pokémon Verde Foglia',
    'Pokémon Diamante / Pokémon Perla / Pokémon Platino', 'Pokémon HeartGold / Pokémon SoulSilver', 'Pokémon Nero / Pokémon Bianco / Pokémon Nero 2 / Pokémon Bianco 2',
    'Pokémon X / Pokémon Y / Pokémon Zaffiro Alpha / Pokémon Rubino Omega / Pokémon Sole / Pokémon Luna / Pokémon  UltraSole / Pokémon UltraLuna',
    'Pokémon Let\'' + 's Go Pikachu / Pokémon Let\'' + 's Go Eevee', 'Pokémon Spada / Pokémon Scudo', 'Pokémon Scarlatto / Pokémon Violetto']

const otherGameName = ['Pokémon Go', 'Pokémon Stadium 2', 'Pokémon Battle Trozei! / Pokémon Shuffle', 'Pokémon XD', 'Pokémon Rumble Word', 'Pokémon Battle Revolution']

function applyAnimation(element, animationName, index) {
    element.style.animationName = animationName;
    element.style.animationDuration = '0.5s';
    element.style.animationDelay = `${index / 2}s`;
    element.style.animationFillMode = 'forwards';
}

function infoBox(image, id) {
    let infoContainer = document.createElement('div')
    infoContainer.id = 'info-container'

    let infoBox = document.createElement('div')
    infoBox.id = 'info-box'

    let button = document.createElement('button')
    button.className = "info-btn"
    button.onclick = () => {
        closeWindow()
    };

    let p1 = document.createElement('p')
    p1.textContent = "x"
    button.append(p1)

    let img = document.createElement('img')
    img.className = 'info-img'
    img.src = image

    let p2 = document.createElement('p')
    p2.className = 'info-p'
    p2.textContent = "Gioco di provenienza"
    p2.appendChild(document.createElement('br'))

    let source = image.split('/')
    let game

    if (source.includes("sprites")) {
        game = gameName[id].split('/')
        infoContainer.style.left = "-50%"
    } 
    else if (source.includes("other-sprites")) {
        game = otherGameName[id].split('/')
        infoContainer.style.left = "50%"
    }


    if (game.length > 1) {
        p2.textContent = "Giochi di provenienza"
        game.forEach(element => {
            p2.appendChild(document.createElement('br'))
            let span = document.createElement('span')
            span.textContent = element
            span.classList.add('p-games')
            p2.appendChild(span)
        });
    }
    else {
        let span = document.createElement('span')
        span.textContent = game
        p2.appendChild(span)
    }

    infoBox.append(button, img, p2)
    infoContainer.appendChild(infoBox)
    body.appendChild(infoContainer)
}

function closeWindow() {
    let infoContainer = document.getElementById('info-container')
    infoContainer.remove()
}


function createSpriteLine() {
    let arrow = document.createElement('div');
    arrow.id = 'arrow'
    let resizable = true

    for (let index = 0; index <= 13; index++) {
        const line = index >= 10 ? lastLine : firstLine;
        var dotImage = document.createElement('div')
        dotImage.id = 'dot-img'

        let sprite = document.createElement('img')
        let spriteSrc = imgSpriteSrc + index + ".png"
        sprite.src = spriteSrc

        sprite.onerror = function () {
            spriteSrc = imgSpriteSrc + index + ".gif"
            sprite.src = spriteSrc
            if (resizable) {
                sprite.classList.add("width-sprite")
                resizable = false
            }
        }

        sprite.onclick = () => {
            infoBox(spriteSrc, index);
        };

        sprite.classList.add("sprite-image");
        applyAnimation(sprite, 'fade-sprite', index);

        let dottedLine = document.createElement('div');
        dottedLine.classList.add("dotted-line");
        applyAnimation(dottedLine, 'draw-dotted-line', index);

        dotImage.append(sprite, dottedLine)
        line.appendChild(dotImage)
    }

    lastLine.appendChild(arrow)
}

function drawLineAnimation() {
    setTimeout(() => {
        createSpriteLine()
    }, 3000)
}

function createOtherSprites() {
    let box = document.getElementById('other-sprites-container')

    for (let index = 0; index <= 5; index++) {

        let sprite = document.createElement('img')
        let spriteSrc = imgSpriteSrc2 + index + ".png"
        sprite.src = spriteSrc

        sprite.onerror = function () {
            spriteSrc = imgSpriteSrc2 + index + ".gif"
            sprite.src = spriteSrc
            // if (resizable) {
            //     sprite.classList.add("width-sprite")
            //     resizable = false
            // }
        }

        sprite.onclick = () => {
            infoBox(spriteSrc, index);
        };

        sprite.className = "other-sprites-images"
        box.appendChild(sprite)
    }

}

createOtherSprites()
