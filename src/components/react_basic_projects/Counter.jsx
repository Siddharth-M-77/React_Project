import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const [history, setHistory] = useState([0])
    const [currentIndex, setCurrentIndex] = useState(0)

    const countIncrement = () => {
        if (count >= 0) {
            const newCount = count + 1
            const updateHistory = history.slice(0, currentIndex + 1);
            console.log(updateHistory)
            setHistory([...updateHistory, newCount])
            setCurrentIndex(currentIndex + 1)
            setCount(newCount)
        }
    }
    const countDecrement = () => {
        if (count > 0) {
            const newCount = count - 1
            const updateHistory = history.slice(0, currentIndex + 1);
            setHistory([...updateHistory, newCount])
            setCurrentIndex(currentIndex + 1)
            setCount(newCount)
        }
    }
    const undo = () => {
        if (currentIndex > 0) {
            const newIndex = currentIndex - 1
            setCurrentIndex(newIndex)
            setCount(history[newIndex])
        }
    }
    const redo = () => {
        if (currentIndex < history.length - 1) {
            const newIndex = currentIndex + 1
            setCurrentIndex(newIndex)
            setCount(history[newIndex])
        }
    }
    return (
        <div className='w-screen h-screen flex items-center justify-center bg-white flex-col '>
            <h1 className='text-4xl mb-4'>Count:{count}</h1>
            <div className='flex items-center justify-center gap-3 p-4'>
                <button onClick={countIncrement} className='px-4 py-2 text-white hover:bg-blue-700 bg-blue-600 rounded-lg border-none shadow-lg '>Increment</button>
                <button onClick={countDecrement} className='px-4 py-2 text-white hover:bg-blue-700 bg-blue-600 rounded-lg border-none shadow-lg '>Decrement</button>
                <button onClick={undo} className='px-4 py-2 text-white hover:bg-blue-700 bg-blue-600 rounded-lg border-none shadow-lg '>Undo</button>
                <button onClick={redo} className='px-4 py-2 text-white hover:bg-blue-700 bg-blue-600 rounded-lg border-none shadow-lg '>Redo</button>
            </div>
        </div>
    )
}

export default Counter
