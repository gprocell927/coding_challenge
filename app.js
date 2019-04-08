/*
* i3logix Code Challenge
* 
* Please refer to the README.md for challenge questions and complete your challenge below.
*/
const single = {
     0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine',
};

const tens = {
    0: 'ten', 1: 'eleven', 2: 'twelve', 3: 'thirteen', 4: 'fourteen', 5: 'fifteen', 6: 'sixteen', 7: 'seventeen', 8: 'eighteen', 9: 'nineteen',
};

const double = {
    2: 'twenty', 3: 'thirty', 4: 'fourty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety',
};

const triple = 'hundred';

const quadruple = 'thousand';
function AppController() {
    function checkInputSize(input) {
        const splitNumber = input.toString().split('');
        switch(splitNumber.length){
            case 1:
                return single[splitNumber[0]];
            case 2:
                if (splitNumber[0] === '1'){
                    return tens[splitNumber[1]];
                } else if (splitNumber[1] === '0') {
                    return double[splitNumber[0]];
                }
                return `${double[splitNumber[0]]}-${single[splitNumber[1]]}`;
            case 3: // evaluate hundreds
                if (splitNumber[1] === '0' && splitNumber[2] === '0'){
                    return `${single[splitNumber[0]]} ${triple}`;
                } else if (splitNumber[1] === '0' && splitNumber[2] !== '0') {
                    return `${single[splitNumber[0]]} ${triple} ${single[splitNumber[2]]}`;
                } else if (splitNumber[2] === '0') {
                    return `${single[splitNumber[0]]} ${triple} ${double[splitNumber[1]]}`;
                } else {
                    return `${single[splitNumber[0]]} ${triple} ${double[splitNumber[1]]}-${single[splitNumber[2]]}`;
                }   
            case 4: // evaluate thousands
                if (splitNumber.filter(el => el === '0').length === 3 ) {
                return `${single[splitNumber[0]]} ${quadruple}`; // ex: 4000
            } else if (splitNumber[2] === '0' && splitNumber[3] === '0') { // ex: 4100
                return `${single[splitNumber[0]]} ${quadruple} ${single[splitNumber[1]]} ${triple}`;
            } else if (splitNumber[1] === '0' && splitNumber[2] === '0') { // ex: 4004
                return `${single[splitNumber[0]]} ${quadruple} ${single[splitNumber[3]]}`;
            } else if (splitNumber[1] === '0' && splitNumber[3] === '0') { //ex: 4050
                return `${single[splitNumber[0]]} ${quadruple} ${double[splitNumber[2]]}`;
            } else if (splitNumber[1] === '0') { //ex: 4056
                return `${single[splitNumber[0]]} ${quadruple} ${double[splitNumber[2]]}-${single[splitNumber[3]]}`;
            } else if (splitNumber[2] === '0') { //ex: 4606
                return `${single[splitNumber[0]]} ${quadruple} ${single[splitNumber[1]]} ${triple} ${single[splitNumber[3]]}`;
            }
                else {
                return `${single[splitNumber[0]]} ${triple} ${double[splitNumber[1]]}-${single[splitNumber[2]]}`;
            }   
                
        }

    }
    // Wanted this to work for the hundreds eval as it is easier on the eyes, but it wouldn't pass the tests:
    // function evaluateHundreds(inputNumber) {
    //     switch (inputNumber) {
    //         case (inputNumber[1] === '0' && inputNumber[2] === '0'):
    //             return `${single[inputNumber[0]]} ${triple}`;

    //         case (inputNumber[1] === '0' && inputNumber[2] !== '0'):
    //             return `${single[inputNumber[0]]} ${triple} ${single[inputNumber[2]]}`;

    //         case (inputNumber[2] === '0'):
    //             return `${single[inputNumber[0]]} ${triple} ${double[inputNumber[1]]}`;

    //         case (!inputNumber.includes('0')):
    //             return `${single[inputNumber[0]]} ${triple} ${double[inputNumber[1]]}-${single[inputNumber[2]]}`;
    //     }
    // }


    return {
        checkInputSize
    }
}

module.exports = AppController();