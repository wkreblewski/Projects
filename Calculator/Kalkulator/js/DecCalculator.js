import { Calculator } from "./Calculator";

class DecCalculator extends Calculator{
    constructor(settings) {
        super(settings);
        console.log( this.getName() );
    }

    /* Method add numbers in two array
    *  @param {array} numberX First number
    *  @param {array} numberY Second number
    *  @return {array}
    */
    add(numberX, numberY) {
        let result = [0,0,0,0,0,0,0,0,0];
        for(let i = numberX.length - 1; i >= 0  ; i--) {
            let carryBit =  numberX[i] + numberY[i] + result[i];
            if( carryBit > 9) {
                result[i] = carryBit % 10;
                result[i-1] = 1;
            } else {
                result[i] = carryBit;
            }
        }
        return result;
    }



    /* Method changing number
    *  @param {jQuery element} root Parent element
    */
    changeNumber(root) {
        let ten_span = root.find('span');
        ten_span.attr('contentEditable',true);

    }


    /* Method changing Result
    */
    updateResult() {
        let root =  this.$calculatorDOMElement;
        let $resultNumber = root.children(".group-number").children(".result-bit");
        for(let i =  this.resultNumberArray.length - 1, j = 0; i >= 0 ; i--, j++) {
            $resultNumber.eq(j).find(".active").text(this.resultNumberArray[i]);
        }
    }
    initEvents() {
        super.initEvents();
        let plus = $('.dec-calculator .operator-bar').find('span');
        plus.on('click',() => {
            console.log("dziala");
            this.checkNumber();
            this.updateResult();
        })
    }
}

export { DecCalculator };