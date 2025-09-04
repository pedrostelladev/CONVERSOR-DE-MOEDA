const convertButton = document.querySelector('.convert-button') 
const currencySelect = document.querySelector('.currency-select')

let euroToday = 6.37
let dolarToday = 5.24
let libraToday = 7.31
let bitcoinToday = 603690.75

function convertValues(){
    const inputValue = document.querySelector('.input-value').value
    const currencyValueToConvert = document.querySelector('.currency-value-to-convert')
    const currencyValueToConverted = document.querySelector('.currency-value-converted')



if(currencySelect.value == 'Dolar'){
currencyValueToConverted.innerHTML = new Intl.NumberFormat('en-US', {
    style:'currency',
    currency:'USD'
}).format(inputValue/dolarToday)
}

if(currencySelect.value == 'Euro'){
    currencyValueToConverted.innerHTML = new Intl.NumberFormat('de-DE', {
        style:'currency',
        currency:'EUR'
    }).format(inputValue/euroToday)
}

if(currencySelect.value == 'Libra'){
    currencyValueToConverted.innerHTML = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP'
    }).format(inputValue/libraToday)
}

if (currencySelect.value == 'Bitcoin') {
    currencyValueToConverted.innerHTML = 
        (Number(inputValue) / bitcoinToday).toFixed(8) + 'BTC'
}


currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
    style:'currency',
    currency:'BRL'
}).format(inputValue)

}

function changeCurrency(){
   const currencyName = document.getElementById('eua')
   const currencyImage = document.querySelector('.bandeira')

if(currencySelect.value == 'Dolar') {
    currencyName.innerHTML = 'Dolar Americano'
    currencyImage.src ='./assets/Dolar.png'
}

if(currencySelect.value == 'Euro') {
    currencyName.innerHTML = 'Euro'
    currencyImage.src = './assets/Euro.png'
}
    
if(currencySelect.value == 'Libra'){
    currencyName.innerHTML = 'Libra'
    currencyImage.src = './assets/Libra.png'
}

if(currencySelect.value == 'Bitcoin'){
    currencyName.innerHTML = 'Bitcoin'
    currencyImage.src = './assets/Bitcoin.png'
}

convertValues()
}

currencySelect.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValues)