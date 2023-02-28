const main = document.querySelector('main');

const mainDiv = document.createElement('div');
mainDiv.classList.add('mainDiv');
 
const colorSelection = document.querySelector('#colorSelection');
console.log(colorSelection);

const redButton = document.createElement('button');
redButton.classList.add('redButton');
redButton.textContent = 'Red';

const blueButton = document.createElement('button');
blueButton.classList.add('blueButton');
blueButton.textContent = 'Blue'

const greenButton = document.createElement('button');
greenButton.classList.add('greenButton');
greenButton.textContent = 'Green';

colorSelection.appendChild(redButton);
colorSelection.appendChild(blueButton);
colorSelection.appendChild(greenButton);

for (let i = 0; i < 16; i++) {
    const vertDiv = document.createElement('div');
    vertDiv.classList.add('vertDiv');

    for (let j = 0; j < 16; j++) {
        const horiDiv = document.createElement('div');
        horiDiv.classList.add('horiDiv');
        vertDiv.appendChild(horiDiv);
    }
    mainDiv.appendChild(vertDiv);
}

main.appendChild(mainDiv);


const squares = document.querySelectorAll('.horiDiv');

squares.forEach(square => {
    square.addEventListener('mouseover', function (e) {
       changeColor(square); 
    })
});

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        if (button.classList.contains('redButton')) {
            setColor('red');
        } else if (button.classList.contains('blueButton')) {
            setColor('blue');
        } else if (button.classList.contains('greenButton')) {
            setColor('green');
        } else {
            setColor('black');
        }
    })
})


let color = 'black';

function setColor(newColor) {
    color = newColor;
}

function changeColor(square) {
    switch (color) {
        case 'red':
            square.classList.add('hovered-red');
            break;
        case 'blue':
            square.classList.add('hovered-blue');
            break;
        case 'green':
            square.classList.add('hovered-green');
            break;
        default:
            square.classList.add('hovered-black');
    }
   
}