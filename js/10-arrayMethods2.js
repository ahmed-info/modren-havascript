const arr1=[12,0,20,22,1,2,3,6,7,8,9]
//const arr1=['a','b','c']
//const arr2= arr1.map(item =>item >2);
//const arr2= arr1.filter(item =>item >2);
const arr2= arr1.sort();
const firstValue= arr1.find(item =>item >7);
//const arr2 = arr1.reduce((total, current)=>{
//return total+current
//})
console.log(arr1)
console.log(arr2)
console.log(firstValue)