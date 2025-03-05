"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tuser = [22, "22"]; // here the order doesnot matter
// let tuser1:[string,number]=[22,"22"];//error order is not maintained first string then number
var tuser1 = ["22", 22];
var newuser = ["sai", 22];
// const seconduser:User=[22,"sai"];//error
newuser[0] = "ram";
