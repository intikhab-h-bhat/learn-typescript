var emp1 = {
    name: "Intikhab",
    age: 42,
    address: "Srinagar",
    email: "abc@gmail.com",
    empid: 123,
    department: "IT",
    salary: 50000,
    startTrial: function () {
        return "Trial Started";
    },
    getCoupon: function (name, discount) {
        return 10;
    }
};
console.log(emp1);
var customer1 = {
    name: "Intikhab",
    age: 42,
    address: "Srinagar",
    email: "i@hb.com",
    startTrial: function () {
        return "Trial Started";
    },
    getCoupon: function (name, discount) {
        return 10;
    }
};
console.log(customer1);
