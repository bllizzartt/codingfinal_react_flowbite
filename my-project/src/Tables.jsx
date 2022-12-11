import React, { Component } from 'react'
import './App.css';

class Tables extends Component {
  render() {
    return (
     

<div class="overflow-x-auto relative">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                    Product name
                </th>
                <th scope="col" class="py-3 px-6">
                    Color
                </th>
                <th scope="col" class="py-3 px-6">
                    Category
                </th>
                <th scope="col" class="py-3 px-6">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Nintendo Switch
                </th>
                <td class="py-4 px-6">
                    Blue/Red
                </td>
                <td class="py-4 px-6">
                    Portable Console
                </td>
                <td class="py-4 px-6">
                    $399
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    PS2 
                </th>
                <td class="py-4 px-6">
                    Black
                </td>
                <td class="py-4 px-6">
                    Home Console
                </td>
                <td class="py-4 px-6">
                    $300
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Iphone 14 Pro Max 
                </th>
                <td class="py-4 px-6">
                    Midnight Black
                </td>
                <td class="py-4 px-6">
                    Phone
                </td>
                <td class="py-4 px-6">
                    $1499
                </td>
            </tr>
        </tbody>
    </table>
</div>


    )
  }
}

export default Tables