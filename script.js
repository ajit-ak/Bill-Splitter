const billAmountInput = document.querySelector('#bill-amount')
const numberOfPeopleInput = document.querySelector('.number-of-people')
const generateBillleInput = document.querySelector('.generate-bill-btn')
const customTipInput = document.querySelector('.custom-tip ')
const tipAmountOutput = document.querySelector('.tip-amount span')
const totalBillOutput = document.querySelector('.total span')
const eachPersonBillOutput = document.querySelector('.each-person-bill span')
const tipsContainer = document.querySelector('.tip-container')
const resetBtn = document.querySelector('.reset-btn')

let tipPersentage = 0

generateBillleInput.addEventListener('click', () => {
    const billAmount = parseInt(billAmountInput.value)
    const numberOfpeople = parseInt(numberOfPeopleInput.value)

    const tipAmount = billAmount * (tipPersentage / 100)

    const totalBill = billAmount + tipAmount

    const eachPersonBill = totalBill / numberOfpeople

    tipAmountOutput.innerText = `$${tipAmount}`
    totalBillOutput.innerText = `$${totalBill}`
    eachPersonBillOutput.innerText = `$${eachPersonBill}`
 
    resetBtn.disabled = false
})

tipsContainer.addEventListener('click', (e) => {
    if(tipsContainer.classList.contains('disabled')) return
    if (e.target !== tipsContainer) {
        [...tipsContainer.children].forEach((tip) => tip.classList.remove('selected'))
        e.target.classList.add('selected')
        tipPersentage = (parseInt(e.target.innerText))
        customTipInput.value = ''

        if(numberOfPeopleInput.value && tipPersentage){
            generateBillleInput.disabled = false
        }else{
            generateBillleInput.disabled = true
        }
    }
})
customTipInput.addEventListener('input', () => {
    tipPersentage = parseInt(customTipInput.value);
    [...tipsContainer.children].forEach((tip) => tip.classList.remove('selected'))
    
    if(numberOfPeopleInput.value && tipPersentage){
        generateBillleInput.disabled = false
    }else{
        generateBillleInput.disabled = true
    }

})
resetBtn.addEventListener('click', () => {
    tipPersentage = 0;
    billAmountInput.value = '';
    numberOfPeopleInput.value = '';
    customTipInput.value = '';
    tipAmountOutput.innerText = '';
    totalBillOutput.innerText = '';
    eachPersonBillOutput.innerText = '';
    [...tipsContainer.children].forEach((tip) => tip.classList.remove('selected'));
    resetBtn.disabled = true
    generateBillleInput.disabled = true
})
billAmountInput.addEventListener('input' , ()=>{
    if(billAmountInput.value) {
        customTipInput.disabled = false;
        numberOfPeopleInput.disabled = false;
        tipsContainer.classList.remove('disabled')
        
    }else{
        customTipInput.disabled = true;
        numberOfPeopleInput.disabled = true;
        tipsContainer.classList.add('disabled')
    }
})
numberOfPeopleInput.addEventListener('input',()=>{
    if(tipPersentage){
        generateBillleInput.disabled=false
    }
    if(numberOfPeopleInput.value && tipPersentage){
        generateBillleInput.disabled = false
    }else{
        generateBillleInput.disabled = true
    } 
})