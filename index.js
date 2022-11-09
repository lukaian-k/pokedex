const maxPokemon = 649
let idNow = 1


const buscar = async (name) => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
    if (data.ok == true) return data.json()
    }


const imgFront = document.querySelector('.img-front')
const imgBack = document.querySelector('.img-back')

const render = async (name) => {
    imgFront.src = 'assets/loading.gif', imgBack.src = 'assets/loading.gif'
    const data = await buscar(name)

    if (data) {
        idNow = data.id
        input.value = ''
        
        imgFront.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
        imgBack.src = data['sprites']['versions']['generation-v']['black-white']['animated']['back_default'] 
        }
    else {
        imgFront.src = 'assets/not-found.svg', imgBack.src = 'assets/not-found.svg'
        }
    }


const form = document.querySelector('.form')
const input = document.querySelector('.input')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    render(input.value)
    })


const buttonLeft = document.querySelector('.button-left')
const buttonRight = document.querySelector('.button-right')

buttonLeft.addEventListener('click', () => {
    if (idNow > 1) render(String(idNow-1))
    else render(maxPokemon.toString())
    })

buttonRight.addEventListener('click', () => {
    if (idNow < maxPokemon) render(String(idNow+1))
    else render('1')
    })


render(idNow.toString())