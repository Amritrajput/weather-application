// diff bw parseInt and number

// console.log(typeof parseInt('123.45'));
// console.log(typeof Number('123.46'));

// // y does 0.1+0.2 !==0.3 in js?
// console.log(0.1+0.2===0.3);
// because js can't convert 0.1 and 0.2 in binary properly

// // sol of this problem:
// let sum = (0.1+0.2).toFixed(1)
// console.log(sum);



// create a function that reverse each word of a given sentence 

// let str = "mai hu amrit"
// let result = str.split(" ").map (word =>{
// let reversedWord = word.split('').reverse().join('')
// return reversedWord
// }).join(' ')

// console.log(result);


// in a array of no and string add only those no are not strings

// let arr = [1,2,3,'4','32k']
// let sum = 0;
//  arr.forEach(item=>{
    
//     if(typeof item === 'number'){
//         sum+=item;
//     } 
//  })
//  console.log(sum);



// //how to check a no is integer or not
// let n= 1
// console.log(Number.isInteger (5));


// reverse a no 

// function reverseNumber (n){
//   return Number( n.toString().split('').reverse().join(''))
// }
// let result = reverseNumber(47238753639)
// console.log(result);


// write a js function that returns a passed string with letters in alphabetical orders

// function sortString(str){
//   return  str.split('').sort().join('')
// }

//  let result = sortString("amrit")
//  console.log(result);
 

// or

//  function sortString(str){
//   return str.split(' ').sort().join(' ')
//  }

//   let result = sortString("amrit singh rajput")
//   console.log(result);



// create a js fun that accepts a string as a parameter and converts the first letter of each word of the string in upper case

// let s = 'hey i am amrit'
// const capitalizeFirstLetter = (str) => {
// let resultArray =  str.split(" ").map(word =>{
//    return (word.charAt(0).toUpperCase()+word.slice(1))
//  })
//  return (resultArray.join(' '));
 
// }
// let result = capitalizeFirstLetter(s)
// console.log(result);



// write a js function to get the first element of the array passing a parameter 'n' will return the first 'n' elements of the array


// function getArrayElement (arr,n){
//     if(!n){
//     return arr[0]
// }else if (n>arr.length){
// return('array index out of bound');
// }else{
//     return(arr.slice(0,n));
    
// }
// }
// let result=getArrayElement([23,4,54,'hkakaf'],4)
// console.log(result);


// write a js fuction to get a number of occurence of each letter in specified string

