/* const jokeDisplay = document.getElementById('joke-display')

import { HfInference } from 'https://cdn.jsdelivr.net/npm/@huggingface/inference@2.6.4/+esm'

const apiKey = process.env.API_KEY

const hf = new HfInference(apiKey)

async function getChristmasJoke() {
    try {
        const prompt = 'Generate Christmas Joke'
        const { generated_text } = await hf.textGeneration({
            inputs: prompt,
            model: 'tiiuae/falcon-7b-instruct',
        })
        console.log(generated_text)
    } catch (error) {
        console.log('Error: ', error)
    }
    
} */



document.getElementById('window-container').addEventListener('click', function () {

        document.querySelector('.left-door').style = "animation: left-open 0.3s forwards"
        document.querySelector('.right-door').style = "animation: right-open 0.3s forwards"
        document.querySelector('.joke-display').style = "animation: display-joke 0.3s forwards"

        getChristmasJoke()
    })

/* 
models i tried:
google/flan-t5-xxl 
bart-large-mnli (facebook/bart-large-mnli)
tiiuae/falcon-7b-instruct <- only that works but only generates only one joke *stoped working >_<
HuggingFaceH4/zephyr-7b-beta
gpt2-small-english (gpt-2/gpt2-small-english)

*/