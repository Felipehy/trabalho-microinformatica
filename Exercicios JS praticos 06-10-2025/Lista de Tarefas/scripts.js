const btnAddList = document.getElementById('btn-add-list')

function addList() {
    const lista = document.getElementById('lista')
    const txt = document.getElementById('input-text')
    let content =  document.createElement('li')
    let input = txt.value
    content.textContent = input
    lista.appendChild(content).classList.toggle('list-item')

    txt.value = ""
}

btnAddList.addEventListener('click', addList)