
// 3) CREATE CLASS TO CONTAIN ALL THE FUNCTIONS I NEED 
   
    //0. constructor takes the prev and current displays and clears every time it runs
class Calculator {
    constructor(prevTextElement,currentTextElement){
        this.prevTextElement = prevTextElement
        this.currentTextElement = currentTextElement
        this.clear()
    }
    // 1. CLEAR 
    clear() {
        this.currentOperand = ''
        this.prevOperand = ''
        this.operator = ''
    }
    // 2. DELETE
    delete() {
        this.currentOperand = this.currentOperand.slice(0,this.currentOperand.length-1)
    }

    // 3. UPDATE DISPLAY
    updateDisplay() {
        this.currentTextElement.innerText = this.formatsDisplay(this.currentOperand)
        
        if (this.operator !== ''){
            this.prevTextElement.innerText = this.formatsDisplay(this.prevOperand) + ' ' + this.operator
        } else {
            this.prevTextElement.innerText = ''
        }
    }
    // 4. APPEND NUMBER
    appendNumber(number) {
        if(number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand + number
    }
    // 5. UPDATES PREV AND CURRENT VALUES WHEN OPERATOR IS SELECTED
    identifyOperator(operator){
        if(this.currentOperand === '' && operation != '-') return
        if(this.prevOperand !== ''){
            this.compute()
        }

        this.operator = operator
        this.prevOperand = this.currentOperand
        this.currentOperand = ''
        
    }
    // 6. PERFORM CALCULATIONS BASED ON OPERATOR SELECTED
    compute(){
        if(this.prevOperand === '') return
        
        let result
        let prev = Number(this.prevOperand)
        let current = Number(this.currentOperand)

        switch(this.operator){
            case '+':
            result = prev + current
            break
            case '-':
            result = prev - current
            break
            case 'x':
            result = prev * current
            break
            case '÷':
            result = prev / current
            break
        }

        this.prevOperand = this.currentOperand
        this.currentOperand = result
        this.prevOperand = ''
        this.operator = ''
        
    }
    // 7. CONVERT NUMBERS TO EN FORMAT
    formatsDisplay(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalNumbers = stringNumber.split('.')[1]

        let integerToDisplay
        let decimaltoDisplay
        //if  integar digits is not a number, that means user has entered "."
        if(isNaN(integerDigits)) {
            integerToDisplay = ''
        } else {
            integerToDisplay = integerDigits.toLocaleString('en')
        }

        if(decimalNumbers!=null) {
            return integerToDisplay + '.' + decimalNumbers
        } else {
            return integerToDisplay
        }
        
    }

}

// 1) SELECTORS OR DEFINING WHAT VARIABLE IN THE HTML MEAN
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const deleteButton = document.querySelector('[data-delete]')
const clearButton = document.querySelector('[data-clear]')
const computeButton = document.querySelector('[data-equals]')
const prevTextElement = document.querySelector('[data-previous-input]')
const currentTextElement = document.querySelector('[data-current-input]')
const calculator = new Calculator(prevTextElement,currentTextElement)

// 2) EVENT LISTENER FOR BUTTONS AND ARRAYS

//button here is defined as a variable and we add an event listener for the text of each button
numberButtons.forEach(button => {
    button.addEventListener('click',() => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click',() => {
        calculator.identifyOperator(button.innerText)
        calculator.updateDisplay()
    })
})

clearButton.addEventListener('click',button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click',button => {
    calculator.delete()
    calculator.updateDisplay()
})

computeButton.addEventListener('click',button => {
    calculator.compute()
    calculator.updateDisplay()
})