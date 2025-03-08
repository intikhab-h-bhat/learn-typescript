
// type User={
//     readonly _id:number,//readonly you can't change the value
//     name:string,
//     age:number,
//     email:string
//     cardnumber?:number //optional
// }
// // function creatreuser(user:User):User{
// //    return {name:user.name,age:user.age,email:user.email}
// // }

// // let newuser =creatreuser({name:"sai",age:22,email:"i@ih.com"})
// // console.log(newuser)

// let newuser:User= {_id:34,name:"Intikhab",age:22,email:"i@ih.com"}

// //newuser._id=45 //error
// console.log(newuser)


// type CardNumber={
//     cardnumber:number
// }
// type CardDate={
//     carddate:string
// }

// type CardDetails=CardNumber & CardDate


// //Arrays

// let superheros: string[]=[]
// let numarray:number[]=[]
// let difeerentarray:Array<string>=[]

// superheros.push("Ironman")
// numarray.push(1)
// difeerentarray.push("Ironman")



// type UserArray={
//     name:string,
//     age:number
// }

// let users:UserArray[]=[]

// users.push({name:"sai",age:22})
// users.push({name:"Intikhab",age:22})
// console.log(users)