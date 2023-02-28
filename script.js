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

const eraseButton = document.createElement('button');
eraseButton.classList.add('eraseButton');
eraseButton.textContent = 'Erase';

const clearButton = document.createElement('button');
clearButton.classList.add('clearButton');
clearButton.textContent = 'Clear';


colorSelection.appendChild(redButton);
colorSelection.appendChild(blueButton);
colorSelection.appendChild(greenButton);
colorSelection.appendChild(eraseButton);
colorSelection.appendChild(clearButton);

makeCanvas(16);

function makeCanvas(numSquares) {
    mainDiv.innerHTML = '';


    for (let i = 0; i < numSquares; i++) {
        const vertDiv = document.createElement('div');
        vertDiv.classList.add('vertDiv');

        for (let j = 0; j < numSquares; j++) {
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
}




const buttons = colorSelection.querySelectorAll('button');
console.table(buttons);
buttons.forEach(button => {
    button.addEventListener('click', function () {
        if (button.classList.contains('redButton')) {
            setColor('red');
        } else if (button.classList.contains('blueButton')) {
            setColor('blue');
        } else if (button.classList.contains('greenButton')) {
            setColor('green');
        } else if (button.classList.contains('eraseButton')) {
            setColor('erase');
        } else if (button.classList.contains('clearButton')) {
            clearCanvas();
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
    square.classList.remove('hovered-red');
    square.classList.remove('hovered-blue');
    square.classList.remove('hovered-green');
    square.classList.remove('hovered-black');
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
        case 'erase':
            break;
        default:
            square.classList.add('hovered-black');
    }

}

const newCanvasButton = document.querySelector('#newCanvasButton');

newCanvasButton.addEventListener('click', function () {
    while (true) {
        let numSquares = prompt("How many squares do you want?");
        if (!Number.isInteger(parseInt(numSquares))) {
            alert("Please submit an integer!");
        } else if (numSquares > 100 || numSquares <= 0) {
            alert("Please choose a number bigger than 0 and smaller/equal 100");
        } else {
            makeCanvas(numSquares);
            break;
        }
    }

})

function clearCanvas () {
    const squares = document.querySelectorAll('.horiDiv');

    squares.forEach(square => {
        square.classList.remove('hovered-red');
        square.classList.remove('hovered-blue');
        square.classList.remove('hovered-green');
        square.classList.remove('hovered-black');
    });
}
