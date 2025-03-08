interface Customer{
    name: string;
    age: number;
    address: string;
    startTrial():string;
    getCoupon(coupname:string,dis:number):number;

}

interface Customer{
    email:string;
}

interface Employee extends Customer{
    empid:number;
    department:string;
    salary:number;}


let emp1:Employee={
    name:"Intikhab",
    age:42,
    address:"Srinagar",
    email:"abc@gmail.com",
    empid:123,
    department:"IT",
    salary:50000,
startTrial(){
    return "Trial Started"
},
getCoupon(name:"inti",discount:10){
    return 10;
}

}

console.log(emp1)



let customer1:Customer={
    name:"Intikhab",
    age:42,
    address:"Srinagar",
    email:"i@hb.com",
    startTrial:()=>{
        return "Trial Started"
    },
    getCoupon:(name:"inti",discount:10)=>{
        return 10;
    }
}

console.log(customer1)