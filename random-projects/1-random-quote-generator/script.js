// 1. Create an array inside a function an call that function on window load
// 2. Retrive quotes/author form the array
// 3. Onclick of the button, pick a random quote from the array
// 4. Use the index generated to displya the quotes and author into the paragraph using innerHTML
// 5. Call the function onclick

const generateQuote = function() {
    const quotes = [
        {
            quote: "To live is the rarest thing in the world. Most people exist, that is all",
            author: "Oscar Wilde"
        },
        {
            quote: "Perhaps one did not want to be loved so much as to be understood",
            author: "George Orwell"
        },
        {
            quote: "It is not what we think or feel that makes us who we are. It is whatwe do. Or fail to do",
            author: "Jane Austen"
        },
        {
            quote: "You cannot find peace by avoiding life",
            author: "Virginia Woolf"
        },
        {
            quote: "What good are wings without the courage to fly",
            author: "Atticus"
        },
        {
            quote: "never trust your fears they don't know your strength",
            author: "athena singh"
        },
        {
            quote: "She never cared for the crown. She preferred a sword",
            author: "R.h. Sin"
        },
        {
            quote: "She's mad but she's magic. There's no lie in her fire",
            author: "Charles Bukowski"
        },
        {
            quote: "I am my own muse. I am the subiect I know best. The subject I want to know better",
            author: "Frida Kahlo"
        },
        {
            quote: "Crying does not indicate that you are weak. Since birth, it has always been a sign that you are alive",
            author: "Charlotte Bronte"
        },
        {
            quote: "We lie best when we lie to ourselves",
            author: "Stephen King"
        },
        {
            quote: "A mistake repeated more than once is a decision",
            author: "Paulo Coelho"
        },
        {
            quote: "Expectation is the root of all heartache",
            author: "William Shakespeare"
        },
        {
            quote: "You can't have a better tomorrow, if you keep thinking about yesterday",
            author: "Taylor Swift"
        },
        {
            quote: "Beware; for I am fearless, and therefore powerful",
            author: "Mary Shelley"
        },
        {
            quote: "You don't have to be perfect but you have to be 100% committed.",
            author: "AOC"
        },
        {
            quote: "I'm not sleep. My mind is alive",
            author: "Taylor Swift"
        },
        {
            quote: "Never give up on a dream that you've been chasing almost of your life",
            author: "Park Jimin"
        },
        {
            quote: "No one can make you feel inferior without your consent",
            author: "Eleanor Roosevelt"
        },
        {
            quote: "Be yourself; everyone else is already taken",
            author: "Oscar Wilde"
        }
    ]
    //console.log(quotes[3])
    let arrayIndex = Math.floor(Math.random() * quotes.length)

    document.getElementById("quote").innerHTML = quotes[arrayIndex].quote
    document.getElementById("author").innerHTML = quotes[arrayIndex].author
}



window.onload = function() {
    generateQuote()
    document.getElementById("generate").addEventListener('click', generateQuote)
}