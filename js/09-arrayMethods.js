const arr1=['a','b','c','d','e','f']
const arr0=[1,2,3,4]
//const arr2 =[...arr1,...arr0]
//start element 2
//end element 4
//const arr2=arr1.slice(2,4)
//const arr2=arr1.splice(-1)
const arr2 = arr1.concat(arr0)
console.log(arr2.join(' - '))

//const arr2= arr1.reverse()

//console.log(...arr1, ...arr0)
//console.log(arr2)