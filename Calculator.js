let currentDisplay='';

document.querySelector('#display').value=currentDisplay; //for text it is innerText but for input it is value

function buttonClicked(buttonValue){
  if(buttonValue=='C'){
    currentDisplay='';
  }else if(buttonValue=='='){
    let result = eval(currentDisplay);
    currentDisplay= result;
  }else if (buttonValue === 'B') {
    // Handle the backspace action.
    currentDisplay = currentDisplay.slice(0, -1);
  }
  else{
    currentDisplay+=buttonValue;
  }
  document.querySelector('#display').value=currentDisplay;
}

// Add event listener to capture keypresses
//to take keyboard input
document.addEventListener('keypress', function (event) {
  // Convert the pressed key to a string
  const keyPressed = String.fromCharCode(event.charCode);

  // Check if the pressed key is a number, operator, or 'C' (clear)
  if (/[\d+\-*/.=C]/.test(keyPressed)) {
    buttonClicked(keyPressed);
  }
});

//to take keyboard input for backspace
document.addEventListener('keydown', function (event) {
  if (event.key === 'Backspace') {
    buttonClicked('B'); // 'B' for backspace
  }else if (event.key === 'Enter') {
    buttonClicked('='); // Treat Enter key like '=' for calculation
  }
});