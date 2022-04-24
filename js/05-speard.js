// let oldArray = [1,2,3,4,5];
// let newArray = [...oldArray,7];
// console.log(newArray);

// let oldObject = {id:"1", name:"Ahmed Razzaq"}
// let newObject = {...oldObject, address:"Baghdad"}
// console.log(newObject.address);

let sum =(...args) =>{
    return args.filter(item=>item===8);
}
console.log(sum(1,4,9))