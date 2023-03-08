import './styles/main.scss'
import image from './images/background.jpg'

const img = document.createElement('img')
img.style.width = '100%'
img.style.height = 'auto'
img.src = image

document.querySelector('body').appendChild(img)
