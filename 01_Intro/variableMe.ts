
let name : string = "John";

let age : number;
age=25;

//we can declare it this way also as typscript is smart enough to understand the type of variable
let num=25;


console.log(name,age);


// in these case it is best to use the type if we dpnt use type it will be any
let hero : string;

function getHero(){
    return "Abc"
}
hero=getHero();


export{}