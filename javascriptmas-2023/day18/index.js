/* HuggingFace Setup */ 
import { HfInference } from 'https://cdn.jsdelivr.net/npm/@huggingface/inference@2.6.4/+esm'
//import { HfInference } from '@huggingface/inference'
const hf = new HfInference()
import { blobToBase64 } from '/utils'

const dialogModal = document.getElementById('dialog-modal')
dialogModal.show()

document.addEventListener('submit', function(e) {
    e.preventDefault()
    const imageDescription = document.getElementById('user-input').value
    dialogModal.close()
    generateImage(imageDescription)
})

async function generateImage(imageToGenerate) {
    const response = await hf.textToImage({
        inputs: imageToGenerate,
        model: 'stabilityai/stable-diffusion-2'
    })
    const imageUrl = await blobToBase64(response)
    generateAltText(imageUrl)
}

async function generateAltText(imageUrl) {
    renderImage(imageUrl)
}

function renderImage(imageUrl, altText) {
    console.log(altText)
    const imageContainer = document.getElementById('image-container')
    imageContainer.innerHTML = ''
    const image = document.createElement('img')
    image.src = imageUrl
    image.alt = altText
    imageContainer.appendChild(image)
}