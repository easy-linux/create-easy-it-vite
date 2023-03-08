import './styles/main.scss'
import image from './images/background.jpg'

const img = document.createElement('img')
img.style.width = '100px'
img.style.height = '100px'
img.src = image

document.querySelector('body').appendChild(img)
