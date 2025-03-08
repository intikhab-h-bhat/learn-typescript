"use strict";
let score = 10;
let user = { name: "sai", age: 22 };
user = { username: "sai", age: 22 };
function getDbId(id) {
    if (typeof id === "string") {
        return id.toUpperCase();
    }
}
getDbId(3);
console.log(getDbId("3"));
let arra1 = [1, 2, 3, 4, 5];
let array2 = ["sai", "ram", "1"];
let array3 = ["sai", 1, "ram", 2];
let pi = 3.14;
let seatallotment;
//# sourceMappingURL=5-unions.js.map