"use strict";
let emp1 = {
    name: "Intikhab",
    age: 42,
    address: "Srinagar",
    email: "abc@gmail.com",
    empid: 123,
    department: "IT",
    salary: 50000,
    startTrial() {
        return "Trial Started";
    },
    getCoupon(name, discount) {
        return 10;
    }
};
console.log(emp1);
let customer1 = {
    name: "Intikhab",
    age: 42,
    address: "Srinagar",
    email: "i@hb.com",
    startTrial: () => {
        return "Trial Started";
    },
    getCoupon: (name, discount) => {
        return 10;
    }
};
console.log(customer1);
//# sourceMappingURL=8-interfaces.js.map