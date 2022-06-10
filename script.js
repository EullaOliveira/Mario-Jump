const mario = document.querySelector('.mario')
const tubo = document.querySelector('.tubo')
const msg = document.querySelector('.resultado')

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')  
    }, 500)
}

const loop = setInterval(() => {
    const tuboPosition = tubo.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace
    ('px', '')

    if (tuboPosition <= 120 && tuboPosition > 0 && marioPosition < 80) {
        tubo.style.animation = 'none'
        tubo.style.left = `${tuboPosition}px`

        mario.src = './Imagens/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop)
        msg.innerHTML = '<strong>VOCÊ PERDEU! Aperte F5 para reiniciar!</strong>'
    }
}, 10)

document.addEventListener('keydown', jump)