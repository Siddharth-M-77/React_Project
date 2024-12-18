import React, { useRef, useState } from 'react'

const StopWatch = () => {
    const [timer, setTimer] = useState(0)
    // const intervalRef = useRef(null)  //to store interval id
    const [intervalID, setIntervalID] = useState(null)




    const startHandler = () => {
        if (intervalID) return
        const id = setInterval(() => {
            setTimer((prev) => prev + 1)
        }, 100);
        setIntervalID(id)
    }
    const stopHandler = () => {
        if (intervalID) {
            clearInterval(intervalID)

        }
    }
    const resetHandler = () => {
        stopHandler()
        setTimer(0)
    }
    return (
        <div className='w-screen h-screen bg-teal-950 flex items-center justify-center text-white flex-col'>

            <div className='flex items-center justify-center gap-5'>
                <h1 className='text-7xl font-sans mb-2'>Timer :</h1>
                <h1 className='text-8xl font-bold '>{timer}</h1>
            </div>
            <div className='flex items-center justify-center gap-3 p-4'>
                <button onClick={startHandler} className='w-32 px-4 py-2 text-white hover:bg-blue-700 bg-blue-600 rounded-lg border-none shadow-lg '>Start</button>
                <button onClick={stopHandler} className='w-32 px-4 py-2 text-white hover:bg-blue-700 bg-indigo-600 rounded-lg border-none shadow-lg '>Stop</button>
                <button onClick={resetHandler} className='w-32 px-4 py-2 text-white hover:bg-blue-700 bg-teal-600 rounded-lg border-none shadow-lg '>Reset</button>

            </div>

        </div>
    )
}

export default StopWatch
