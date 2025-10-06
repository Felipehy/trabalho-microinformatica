const btnPrev = document.getElementById('btn-prev')
const btnNext = document.getElementById('btn-next')
const img = document.getElementById('imgs')

const arrayImg = ["https://cdn.pixabay.com/photo/2015/11/17/13/13/puppy-1047521_640.jpg", "https://img.freepik.com/fotos-gratis/cao-bonito-do-grupo-de-cachorro-beagle-sentado-e-ofegante_1150-18198.jpg?semt=ais_hybrid&w=740&q=80", "https://www.petz.com.br/blog/wp-content/uploads/2021/04/raca-de-cachorro-docil-2.jpg", "https://fisiocarepet.com.br/wp-content/uploads/2022/02/cachorro.png"]

let currentIndex = 0

function nextImg() {
    currentIndex ++

    if (currentIndex >= arrayImg.length) {
        currentIndex = 0
    }
    console.log(currentIndex)
    img.src = arrayImg[currentIndex]
}

function previusImg() {
    currentIndex --

    if (currentIndex < 0) {
        currentIndex = arrayImg.length - 1
    }
    console.log(currentIndex)
    img.src = arrayImg[currentIndex]
}

img.src = arrayImg[currentIndex]

btnNext.addEventListener('click', nextImg)
btnPrev.addEventListener('click', previusImg)