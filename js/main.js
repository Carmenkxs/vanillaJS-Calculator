//create class to contain all the elements we are displaying
class Calculator {
    contructor(prevTextElement, currentTextElement){
        this.prevTextElement = prevTextElement
        this.currentTextElement = currentTextElement
        //every time a new calculator is created, we want to clear all inputs
        this.clear();
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
      }
    

    appendNumber(number){
        this.currentOperand = number
        console.log(number + 'hello');
    }

    //numerical operation


    delete(){

    }
    

    //compute and update display
    updateDisplay(){
        // this.currentTextElement.innerText = this.currentOperand
        console.log(this.currentTextElement.innerText);
    }
}

// selectors
const numberButtons = document.querySelectorAll('[data-number]');
const operationInputs = document.querySelectorAll('[data-operations]');
const computeButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const clearButton = document.querySelector('[data-clear]');
const prevTextElement = document.querySelector('[data-previous-input]');
const currentTextElement = document.querySelector('[data-current-input]');


const calculator = new Calculator(prevTextElement,currentTextElement);

//EVENT LISTENERS
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    });
} );

//FUNCTIONS

