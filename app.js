function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }else{
        return getPin();
    }
}

function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})

document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typedNUmberField = document.getElementById('typed-numbers');
    let previousTypedNumber = typedNUmberField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typedNUmberField.value = '';
        }else if(number === '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNUmberField.value = remainingDigits;
        }
    }else{
        const newTypedNumber = previousTypedNumber + number;
        typedNUmberField.value = newTypedNumber;
    }
})

document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;
    const typedNUmberField = document.getElementById('typed-numbers');
    const typedNUmber = typedNUmberField.value;
    // alert message element
    const pinCorrectMsg = document.getElementById('pin-correct');
    const pinIncorrectMsg = document.getElementById('pin-incorrect');
    if(currentPin === typedNUmber){
        pinIncorrectMsg.style.display = 'none'; //Incorrect message hide
        pinCorrectMsg.style.display = 'block'; //Correct message Show
    }else{
        pinCorrectMsg.style.display = 'none'; //Correct message hide
        pinIncorrectMsg.style.display = 'block'; //Incorrect message Show
    }
})