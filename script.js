const convertButton = document.querySelector('.convert-button') 
const currencySelect = document.querySelector('.currency-select')



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
    
convertValues()
}

currencySelect.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValues)