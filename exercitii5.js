
let arrCollection = ['H','e','l','l','o','g']

let getFirstItem = (collection, cb=()=>{
return  collection[0]
}) => {
   return cb()

    // invoke the callback function and pass the first item from the collection in as an argument
};

console.log(getFirstItem(arrCollection));


const getLength = (collection, cb=()=>{
   return  collection.length
}) => {
    return cb()
    // Write a function called getLength that passes the length of the array into the callback
};

console.log(getLength(arrCollection));

const getLastItem = (collection, cb=()=>{
    return collection.pop()
}) => {

return cb()
    // Write a function called getLastItem which passes the getLastItem item of the array into the callback
};
console.log(getLastItem(arrCollection));

const sumNums = (x, y, cb=()=>{
    return x+y
}) => {
   return cb() // Write a function called sumNums that adds two numbers and passes the result to the callback
};

console.log(sumNums(2, 4));
const multiplyNums = (x, y, cb=()=>{
    return x*y
}) => {
    cb()
    // Write a function called multiplyNums that multiplies two numbers and passes the result to the callback
};

const contains = (collection, item, cb) => {
    // Write a function called contains that checks if an item is present inside of the given array.
    // Pass true to the callback if it is, otherwise pass false
};

const removeDuplicates = (collection, cb) => {
    // Write a function called removeDuplicates that removes all duplicate values from the given array.
    // Pass the array to the callback function.  Do not mutate the original array.
};

// module.exports = {
//     getFirstItem,
//     getLength,
//     getLastItem,
//     sumNums,
//     multiplyNums,
//     contains,
//     removeDuplicates
// };
