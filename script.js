const mainDiv = document.querySelector('#mainDiv');

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

const squares = document.querySelectorAll('.horiDiv');

squares.forEach(square => {
    square.addEventListener('mouseover', function (e) {
       changeColor(square); 
    })
});


let color = 'black';

function chooseColor() {

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
        default:
            square.classList.add('hovered-black');
    }
   
}