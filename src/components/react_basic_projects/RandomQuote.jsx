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
        "It does not matter how slowly you go as long as you do not stop. – Confucius",
        "The best time to plant a tree was 20 years ago. The second-best time is now. – Chinese Proverb",
        "What lies behind us and what lies before us are tiny matters compared to what lies within us. – Ralph Waldo Emerson",
        "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
        "In the middle of every difficulty lies opportunity. – Albert Einstein",
        "Courage is not the absence of fear, but the ability to act in spite of it. – Mark Twain",
        "Do what you feel in your heart to be right—for you’ll be criticized anyway. – Eleanor Roosevelt",
        "Don’t let yesterday take up too much of today. – Will Rogers",
        "Go confidently in the direction of your dreams. Live the life you have imagined. – Henry David Thoreau",
        "The greatest glory in living lies not in never falling, but in rising every time we fall. – Nelson Mandela",
        "Fall seven times and stand up eight. – Japanese Proverb",
        "Whether you think you can or think you can’t, you’re right. – Henry Ford",
        "It’s not whether you get knocked down; it’s whether you get up. – Vince Lombardi",
        "Do not wait to strike till the iron is hot; but make it hot by striking. – William Butler Yeats",
        "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
        "Don’t count the days, make the days count. – Muhammad Ali",
        "If opportunity doesn’t knock, build a door. – Milton Berle",
        "The harder you work for something, the greater you’ll feel when you achieve it. – Unknown",
        "Success doesn’t come to you. You go to it. – Marva Collins",
        "If you can dream it, you can do it. – Walt Disney",
        "A journey of a thousand miles begins with a single step. – Lao Tzu",
        "Keep your eyes on the stars, and your feet on the ground. – Theodore Roosevelt",
        "Do not be embarrassed by your failures, learn from them and start again. – Richard Branson",
        "If you want to achieve greatness, stop asking for permission. – Anonymous",
        "Great things never come from comfort zones. – Unknown",
        "What you get by achieving your goals is not as important as what you become by achieving your goals. – Zig Ziglar",
        "Don’t stop when you’re tired. Stop when you’re done. – Unknown",
        "Work hard in silence; let success make the noise. – Frank Ocean",
        "Doubt kills more dreams than failure ever will. – Suzy Kassem",
        "The way to get started is to quit talking and begin doing. – Walt Disney",
        "I never dreamed about success. I worked for it. – Estee Lauder",
        "If you are not willing to risk the usual, you will have to settle for the ordinary. – Jim Rohn",
        "The secret of getting ahead is getting started. – Mark Twain",
        "We generate fears while we sit. We overcome them by action. – Dr. Henry Link",
        "Don’t let the fear of losing be greater than the excitement of winning. – Robert Kiyosaki",
        "Success is walking from failure to failure with no loss of enthusiasm. – Winston Churchill",
        "Nothing will work unless you do. – Maya Angelou",
        "Success is not how high you have climbed, but how you make a positive difference to the world. – Roy T. Bennett",
        "It does not matter how slowly you go as long as you do not stop. – Confucius",
        "Your limitation—it’s only your imagination. – Unknown",
        "Push yourself, because no one else is going to do it for you. – Unknown",
        "Great things are done by a series of small things brought together. – Vincent Van Gogh",
        "A little progress each day adds up to big results. – Satya Nani",
        "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. – Chantal Sutherland",
        "What you do today can improve all your tomorrows. – Ralph Marston",
        "Do something today that your future self will thank you for. – Sean Patrick Flanery",
        "Success is getting what you want. Happiness is wanting what you get. – Dale Carnegie",
        "Don’t limit your challenges. Challenge your limits. – Jerry Dunn",
        "Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway. – Earl Nightingale",
        "Don’t wait. The time will never be just right. – Napoleon Hill",
        "Believe in yourself and all that you are. – Christian Larson",
        "Act as if what you do makes a difference. It does. – William James",
        "The man who has confidence in himself gains the confidence of others. – Hasidic Proverb",
        "In the middle of difficulty lies opportunity. – Albert Einstein",
        "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
        "Don’t give up because things are hard, give up because things are impossible. – Unknown",
        "What seems to us as bitter trials are often blessings in disguise. – Oscar Wilde",
        "Challenges are what make life interesting and overcoming them is what makes life meaningful. – Joshua J. Marine",
        "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
        "Keep going. Everything you need will come to you at the perfect time. – Unknown",
        "Life is not about finding yourself. Life is about creating yourself. – George Bernard Shaw",
        "There is no substitute for hard work. – Thomas Edison",
        "Go the extra mile. It’s never crowded. – Wayne Dyer",
        "A winner is a dreamer who never gives up. – Nelson Mandela",
        "Don’t let small minds convince you that your dreams are too big. – Unknown"
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
