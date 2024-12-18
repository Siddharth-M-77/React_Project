import React, { useEffect, useState } from 'react'

const ExpenseTracker = () => {
    const [expenses, setExpenses] = useState([])
    const [input, setInput] = useState('');

    useEffect(() => {
        const LoadData = JSON.parse(localStorage.getItem("expenses")) || []
        setExpenses(LoadData)
    }, [])


    const savedExpenses = (newExpenses) => {
        localStorage.setItem("expenses", JSON.stringify(newExpenses))
    }

    const addExpense = () => {
        if (input.trim()) {
            const newExpenses = [...expenses, input]
            setExpenses(newExpenses);
            savedExpenses(newExpenses)
            setInput('');
        }
    };

    const handleDelete = (id) => {
        const updateExpenses = expenses.filter((_, index) => index !== id)
        setExpenses(updateExpenses);
        savedExpenses(updateExpenses)

    };

    return (
        <div className='w-screen min-h-screen bg-gray-600 flex pt-32 gap-5 items-center flex-col '>
            <div className='flex w-[80%] mt-5 items-center justify-center gap-6 '>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    className='py-3 px-6 w-[80%] rounded-md bg-white border-none outline-dotted font-semibold '
                    placeholder='Enter your expenses...'
                />
                <button
                    onClick={addExpense}
                    className='px-6 py-2 rounded-md shadow-md outline-none border-none bg-teal-400  hover:bg-indigo-500 hover:text-white'
                >
                    Add Expense
                </button>
            </div>

            {/* Conditionally render the expenses list only if there are expenses */}
            {expenses && expenses.length > 0 && (
                <div className='w-[50%] rounded-lg mx-auto flex p-4 gap-4 bg-teal-200 flex-col '>
                    {expenses.map((item, index) => {
                        return (
                            <div key={index} className="card w-full flex justify-between p-4 bg-indigo-400 rounded-md">
                                <h1>{item}</h1>
                                <button
                                    onClick={() => handleDelete(index)}
                                    className='px-6 py-2 rounded-md shadow-md outline-none border-none bg-teal-400  hover:bg-indigo-500 hover:text-white'
                                >
                                    Delete ❌
                                </button>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default ExpenseTracker;
