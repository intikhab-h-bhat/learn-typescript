
function add(num: number)
{
    return num + 5;
    // return "Hello World"
}

add(5)

let usercred=(name:string,password:number)=>{

    console.log(name)
    console.log(password)

}
usercred("admin",1234556)

//providing defatult value to the parameter
function getDeatails(name:string,age:number,isActive:boolean=false):string
{
    return `Name is ${name} and age is ${age} and isActive is ${isActive}`
}
getDeatails("admin",25);


let heros=["Ironman","Thor","Hulk","Captain America"]

let hero=heros.map((h:string):string=>{
    return h.toUpperCase();
})


// let consoleError=((errmsg):void=>{
    
//     console.error(errmsg)
// }
//)


function handleError(errmsg:string): never
{
  throw new Error(errmsg)
}



export{}