import React, { useState } from 'react'

const RandomQuote = () => {
    const [quote, setQuote] = useState()
    const quotes = [
        "The only way to do great work is to love what you do. – Steve Jobs",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
        "Believe you can and you're halfway there. – Theodore Roosevelt",
        "Your time is limited, don’t waste it living someone else’s life. – Steve Jobs",
        "Happiness is not something ready-made. It comes from your own actions. – Dalai Lama",
        "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
        "Dream big and dare to fail. – Norman Vaughan",
        "You miss 100% of the shots you don’t take. – Wayne Gretzky",
        "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
        "It always seems impossible until it’s done. – Nelson Mandela",
        "Strive not to be a success, but rather to be of value. – Albert Einstein",
        "I have not failed. I’ve just found 10,000 ways that won’t work. – Thomas Edison",
        "Don’t be pushed by your problems, be led by your dreams. – Ralph Waldo Emerson",
        "Act as if what you do makes a difference. It does. – William James",
        "The future depends on what you do today. – Mahatma Gandhi",
        "Keep your face always toward the sunshine—and shadows will fall behind you. – Walt Whitman",
        "Opportunities don’t happen. You create them. – Chris Grosser",
        "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
        "Do what you can, with what you have, where you are. – Theodore Roosevelt",
        "It does not matter how slowly you go as long as you do not stop. – Confucius"
    ];
    const generateQuotes = () => {
        const radom = Math.floor(Math.random() * quotes.length)
        setQuote(quotes[radom])
    }

    return (
        <div className='w-screen h-screen bg-white flex items-center justify-start pt-32 flex-col'>
            <h1 className='text-6xl font-medium leading-none tracking-tighter mb-10'>Random Quote Generator</h1>
            <button className=' w-[40%] hover:bg-purple-500 mb-4 px-6 py-2 bg-indigo-500 rounded-md' onClick={generateQuotes}>Generate Quote</button>
            <p className='font-bold text-xl mt-10'>{quote}</p>
        </div>
    )
}

export default RandomQuote
