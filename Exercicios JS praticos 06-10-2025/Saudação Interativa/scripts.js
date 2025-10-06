const btnWelcome = document.getElementById('btnWelcome')
const txtName = document.getElementById('txtName')
const txtWelcome = document.getElementById('txtWelcome')

function welcome() {
    let name = txtName.value
    if (name){
        txtWelcome.textContent = `Bem vindo ${name}`
    } else {
        txtWelcome.textContent = "Por favor, digite seu nome"
    } 
}

btnWelcome.addEventListener('click', welcome)