
let tuser:(string|number)[]=[22,"22"];// here the order doesnot matter

// let tuser1:[string,number]=[22,"22"];//error order is not maintained first string then number
let tuser1:[string,number]=["22",22];


type User=[string,number];

const newuser:User=["sai",22];
// const seconduser:User=[22,"sai"];//error

newuser[0]="ram";
// newuser.push(true);//error



export {}