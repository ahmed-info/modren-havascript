const lowerCase=(str)=>{
    return str.toLowerCase();
}

//Higher Order Functions
const transform = (word,fn) =>{
    return fn(word);
}

//console.log(lowerCase("AHMED"))
console.log(transform("AHMED",lowerCase))

const sayHi = (welcome) =>{
    console.log(welcome)
    return (name)=>{
        console.log(sayHi(name))
    }
}

const say = sayHi("Welcome Ahmed");
console.log(say)