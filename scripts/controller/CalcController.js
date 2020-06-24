/* const display = document.querySelector('#display');


function timeDate() {

    const currentDate = new Date();

    const time = document.querySelector('#time');
    const timeEl = currentDate.toLocaleTimeString('pt-BR');
    time.innerHTML = `<p>${timeEl}</p>`

    const date = document.querySelector('#date');
    const dateEl = currentDate.toLocaleDateString('pt-BR');
    date.innerHTML = `<p>${dateEl}</p>`

}
function initialize() {
    timeDate()
    setInterval(()=> {
        timeDate()
    },1000)
}
initialize()  */
class CalcController {
    constructor() {

        this._timeElement = document.querySelector('#time');
        this._dateElement = document.querySelector('#date');
        this.currentDate;
        this._locale = 'pt-BR';

        this._displayCalcElement = document.querySelector('#values');

        this.initialize();
        this._operation = [];
        this.initButtonsEvents();
    }

    initialize() {
        this.setDisplayDateTime();
        setInterval(() => {
            this.setDisplayDateTime();
        }, 1000);
    }

    setDisplayDateTime() {
        this.displayDate = this.currentDate.toLocaleDateString(this._locale);
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    addEventListenerAll(element, events, fn) {
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false);
        });
    }

    initButtonsEvents() {
        let buttons = document.querySelectorAll('#buttons > li');
        buttons.forEach((btn, index) => {
            btn.addEventListener('click', e => {
                let textBtn = btn.className.replace('btn-', '');
                this.execBtn(textBtn)
            })
        })
    }

    clearAll() {
        this._operation = [];
        this.displayCalc = '0';
    }

    cancelEntry() {
        this._operation.pop();
    }

    setError() {
        this.displayCalc = 'Error';
    }

    pushOperation(value) {
        this._operation.push(value);
        console.log(this._operation);
    }

    getLastOperation() {
        return this._operation[this._operation.length - 1];
    }

    setLastOperation(value) {
        return this._operation[this._operation.length - 1] = value;
    }

    isOperator(value) {
        return (['+', '-', '*', '/', '%'].indexOf(value) > -1);
    }

    /* getLastItem(isOperator=true) {

    } */

    setLastNumberToDisplay() {

    }

    addOperation(value) {
        console.log(isNaN(this.getLastOperation()))
        if(isNaN(this.getLastOperation())) {

            if(this.isOperator(value)) {

                this.setLastOperation(value);

            } else {

                this.pushOperation(value)
                
            }
        } else {
            
            if(this.isOperator(value)) {

                this.pushOperation(value);

            } else {

                let newValue = this.getLastOperation().toString() + value.toString();

                this.setLastOperation(parseInt(newValue));
    
            }

        }

        console.log(this._operation)
    }

    execBtn(value) {
        switch (value) {
            case 'ac':
                this.clearAll();
                break;
            case 'ce':
                this.cancelEntry();
                break;
            case 'plus':
                this.addOperation('+');
                break;
            case 'minus':
                this.addOperation('-');
                break;
            case 'times':
                this.addOperation('*');
                break;
            case 'divide':
                this.addOperation('/');
                break;
            case 'porcent':
                this.addOperation('%');
                break;
            case 'dot':
                break;
            case 'equals':

                break;
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value));
                break;
            default:
                this.setError();
        }
    }


    //====getters and setters====
    get displayCalc() {
        return this._displayCalcElement.innerHTML;
    }
    set displayCalc(value) {
        this._displayCalcElement.innerHTML = value;
    }

    get displayTime() {
        return this._timeElement.innerHTML;
    }
    set displayTime(value) {
        this._timeElement.innerHTML = value;
    }

    get displayDate() {
        return this._dateElement.innerHTML;
    }
    set displayDate(value) {
        this._dateElement.innerHTML = value;
    }

    get currentDate() {
        return new Date()
    }
    set currentDate(value) {
        this.currentDate = value;
    }

}

