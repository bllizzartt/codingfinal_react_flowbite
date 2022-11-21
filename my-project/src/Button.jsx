import React from 'react'

function Button({handleClick}) {
  return (
    <button onClick={handleClick} type="button" class="text-red bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>
  )
}

export default Button
