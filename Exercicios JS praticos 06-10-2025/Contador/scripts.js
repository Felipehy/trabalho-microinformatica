const increment = document.getElementById('increment')
const Reset = document.getElementById('reset')

function incrementNumber() {
    let txtNumber = document.getElementById('txt-number')
    txtNumber.textContent = parseInt(txtNumber.textContent) + 1
}

function resetNumber() {
    let txtNumber = document.getElementById('txt-number')
    txtNumber.textContent = 0
}

increment.addEventListener("click", incrementNumber)
Reset.addEventListener("click", resetNumber)