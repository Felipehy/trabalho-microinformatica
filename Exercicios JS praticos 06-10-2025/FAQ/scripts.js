const title = document.getElementById('title-drop')

function dropText() {
    const text = document.getElementById('content').classList.toggle("show")
}

title.addEventListener('click', dropText)
