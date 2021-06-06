window.onload = function() {

  function classSelected() {
    document.querySelector('#color-palette .color:nth-child(1)').classList.add('selected');
  }
  classSelected();

  function changeClassSelected() {
    let colorPalet = document.querySelector('#color-palette');
    let colorPaletChildren = document.querySelectorAll('#color-palette .color');
    
    colorPalet.addEventListener('click', function(event) {
      
      if(event.target.classList.contains('color')) {
        for (let i = 0; i < colorPaletChildren.length; i += 1) {
          colorPaletChildren[i].classList.remove('selected');
        }
        event.target.classList.add('selected');
        console.log(colorPaletChildren);
      }
    });
  }
  changeClassSelected();

  function createPixelBoard(number = 5) {
    let pixelBoard = document.querySelector('#pixel-board');

    for (let indexLine = 0; indexLine < number; indexLine += 1) {
      let line = document.createElement('div');
      line.classList.add('line');
        for (let indexColumn = 0; indexColumn < number; indexColumn += 1) {
          let pixel = document.createElement('div');
          pixel.classList.add('pixel');
          line.appendChild(pixel);
        }
      pixelBoard.appendChild(line);
    }
  }
  createPixelBoard();

  function limiteBoardSize(number) {
    if (number < 5) {
      return 5;
    }
    else if (number > 50) {
      return 50;
    }
    else {
      return number;
    }
  }
  limiteBoardSize();

  // Luiza Antiques me ajudou com a questão: pixelBoard.innerHTML = "";
  function resizePixelBoard() {
    let inputNumber = document.querySelector('#board-size');
    let btnResizeBoard = document.querySelector('#generate-board');
    let pixelBoard = document.querySelector('#pixel-board');

    btnResizeBoard.addEventListener('click', () => {
      if (inputNumber.value === "") {
        alert('Board inválido!');
      }
      else {
        pixelBoard.innerHTML = "";
        let number = inputNumber.value;
        let newNumber = limiteBoardSize(number);
        createPixelBoard(newNumber);
        inputNumber.value = '';
      }
      
    });
  }

  resizePixelBoard();

  // Luiza Antiques me ajudou com a questão: window.getComputedStyle(selected).backgroundColor;
  function paintPixel() {

    let pixelBoard = document.querySelector('#pixel-board');

    pixelBoard.addEventListener('click', function(event) {

      if (event.target.classList.contains('pixel')) {
        let selected = document.querySelector('.selected');
        let bgcolor = window.getComputedStyle(selected).backgroundColor;
        event.target.style.backgroundColor = bgcolor;
      }
    })
  }
  paintPixel();


  function clearBoard() {
    let btnClearBoard = document.querySelector('#clear-board');
    let pixelList = document.querySelectorAll('#pixel-board .pixel');
    
    btnClearBoard.addEventListener('click', function() {
      for (let i = 0; i < pixelList.length; i += 1) {
        pixelList[i].style.backgroundColor = "white";
      }
    });
  }
  clearBoard();


  function generateRandomColor() {
    let firstColor = Math.floor(Math.random() * 255);
    let secondColor = Math.floor(Math.random() * 255);
    let thirdColor = Math.floor(Math.random() * 255);
    let color = `rgb(${firstColor}, ${secondColor}, ${thirdColor})`;
    return color;
  }

  function generatePaletteColors() {
    let paletteColors = document.querySelectorAll('#color-palette .color');

    for (let i = 1; i < paletteColors.length; i += 1) {
      let color = generateRandomColor();
      paletteColors[i].style.backgroundColor = color;
    }
  }
  generatePaletteColors();


}







