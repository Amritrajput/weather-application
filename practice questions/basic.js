// function getLastElement(arr) {
//     return arr[arr.length-1];
// }
// let arr=[1,2,3]

//  let lastElement=getLastElement(arr)
//  console.log(lastElement);
 
// combination of 2 Array


// let arr1=[1,2,3,4]
// let arr2=[4,45,5,66,6]
// let combinationarray=[...arr1,...arr2]
// console.log(combinationarray);

// generate a number bw 0 to 18

// let n=Math.floor(Math.random()*19)
// console.log(n);

// select only string from Array

// let arr = [0,1,"MRIR",'AAA']
// let result = arr.filter(element=>{
//     if(typeof element === 'string') return true
//     else return false
// })
// console.log(result)

// max element
// let a=[2,2,3,3,4,4,44]
// console.log(Math.max(...a))

//length of an object

// let obj = {
//     name:'amrit',
//     age:18,
//     city:'lucknow'
// }
// let lengthOfObject = (object)=>{
//     return Object.keys(object).length;
// }
// let length=lengthOfObject(obj)
// console.log(length);

// in a array of object filter who is male

// let arr = [
//     {
//         name:'amrit',
//         gender:'male'
//     },
//     {
//         name:'riya',
//         gender:'female'
//     }
// ]
// let result=arr.filter (obj =>{
//     if (obj.gender === 'male') return true
//     else return false
// })
// console.log(result);

// convert arr to uppercase

// let arr=['ar','jkd','mkl']
// let result = arr.map(elem =>{
//     return (elem.toUpperCase())
// })
// console.log(result);


// check obj is empty
// let obj ={ 
//     // name:"amrit"
// }
// let keysArr= Object.keys(obj)
// console.log(keysArr.length===0);

// doubled the arr
// let arr=[1,2,3,4,4,5]
// let result = arr.map(e =>{
// return (e*2)
// })
// console.log(result);

// convert an array of strings into a single comma seprated string
