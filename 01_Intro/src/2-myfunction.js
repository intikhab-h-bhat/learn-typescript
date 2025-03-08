"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(num) {
    return num + 5;
}
add(5);
let usercred = (name, password) => {
    console.log(name);
    console.log(password);
};
usercred("admin", 1234556);
function getDeatails(name, age, isActive = false) {
    return `Name is ${name} and age is ${age} and isActive is ${isActive}`;
}
getDeatails("admin", 25);
let heros = ["Ironman", "Thor", "Hulk", "Captain America"];
let hero = heros.map((h) => {
    return h.toUpperCase();
});
function handleError(errmsg) {
    throw new Error(errmsg);
}
//# sourceMappingURL=2-myfunction.js.map