const convertButton = document.querySelector('.convert-button') 

function convertValues(){
    const inputValue = document.querySelector('.input-value').value
    const currencyValueToConvert = document.querySelector('.currency-value-to-convert')
    const currencyValueToConverted = document.querySelector('.currency-value-converted')


    const dolarToday = 5.0

    let result = inputValue/dolarToday

currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
    style:'currency',
    currency:'BRL'
}).format(inputValue)


currencyValueToConverted.innerHTML = new Intl.NumberFormat('en-US', {
    style:'currency',
    currency:'USD'
}).format(result)

console.log(result)
}

convertButton.addEventListener('click', convertValues)