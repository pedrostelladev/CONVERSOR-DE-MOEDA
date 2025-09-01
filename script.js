const convertButton = document.querySelector('.convert-button') 

function convertValues(){
    const inputValue = document.querySelector('.input-value').value
        
    const dolarToday = 5.0

    let result = inputValue/dolarToday

    console.log(result)
}

convertButton.addEventListener('click', convertValues)