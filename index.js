// Beginner-Friendly Questions (1-5)
// Conceptual:
// Explain what makes a JavaScript array different from arrays in traditional programming languages 
// like C or Python.

// Arrays in JavaScript are object and the indices are converted in to strings to be used as import("crypto").KeyPairSyncResult

// Practical:
// Write a function that takes an array of integers and returns the sum of its elements.

let arr = [1,2,3,4,5]


const sum = (acc, inital) => {
    return acc + inital
}

// arr.reduce(sum, 0)
// console.log(arr.unshift(1))
// console.log(arr)

// Practical:
// How would you add an element to the end of a JavaScript array? Show an example.

// arr.push(5)
// Case Study:
// Suppose you are implementing a to-do list app.

// How would you add a new task to an array?
// arr.push('new task')
// How would you remove a task at a specific index?
// arr.splice(1,1)
// Practical:
// Write a function that finds the largest number in an array.
// let arr2 = [12, 3, 4, 5, 6, 7, 8, 9, 10]

// const largest = (a ,b) => {
//     return a - b
// }

// console.log(arr2.sort(largest))
// Intermediate Questions (6-10)
// Conceptual:
// Explain the difference between .forEach() and .map() when iterating over an array. Provide examples.
// .forEach() => doesnot create a new array while .map() creates a new array 

// Practical:
// Write a function that rotates an array to the right by k steps. For example:
// Input: [1, 2, 3, 4, 5], k = 2
// Output: [4, 5, 1, 2, 3]


// function rotate(arr, k) {
//    for(let i = 0 ; i < k; i++) {
//         arr.unshift(arr.pop())
//    }

//    return arr
// }

// console.log(rotate(arr, 2))
// Practical:
// Implement a function that removes all duplicate elements from an array. Example:
// Input: [1, 2, 3, 2, 1, 4]
// Output: [1, 2, 3, 4]

function findDuplicate(arr){
    return [...new Set(arr)]
}

console.log(findDuplicate([1, 2, 3, 2, 1, 4]))
// Practical:
// Write a function that reverses an array in place (i.e., without using an additional array).

// Case Study:
// You’re tasked with analyzing customer transaction data stored in arrays:

// Find the total transaction value.
// Find the highest transaction value.
// Example data: [200, 450, 300, 100].
// Senior Engineer-Level Questions (11-15)
// Conceptual:
// Discuss the time complexity of common JavaScript array methods like .push(), .pop(), .shift(), .unshift(), and .splice().

// Practical:
// Write a function that merges two sorted arrays into one sorted array without using any built-in sort functions.
// Input: [1, 3, 5] and [2, 4, 6]
// Output: [1, 2, 3, 4, 5, 6]

// Practical:
// Implement a function that finds the longest contiguous subarray with a sum less than or equal to a given value k.
// Example:
// Input: [1, 2, 3, 4, 5], k = 8
// Output: [1, 2, 3]

// Case Study:
// You are building a library catalog system where book IDs are stored in arrays.

// How would you efficiently search for a specific book ID if the array is sorted?
// How would you handle dynamic updates to the array when book IDs are added or removed?
// Implement a function for one of these tasks.
// Practical:
// Write a function to find the first missing positive integer in an unsorted array.
// Example:
// Input: [3, 4, -1, 1]
// Output: 2