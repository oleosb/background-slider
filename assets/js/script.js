let body = document.body
let cards = document.querySelectorAll('.card')
let prev = document.querySelector('.prev')
let next = document.querySelector('.next')
let activeCard = 0


next.addEventListener('click', () => {
        activeCard++

        if (activeCard >= cards.length) {
                activeCard = 0
        }

        updateBackground()
})

prev.addEventListener('click', () => {
        activeCard--

        if (activeCard <= -1) {
                activeCard = cards.length - 1
        }

        updateBackground()
})

function updateBackground() {
        cards.forEach(card => card.classList.remove('show'))

        cards[activeCard].classList.add('show')

        body.style.backgroundImage = cards[activeCard].style.backgroundImage
}