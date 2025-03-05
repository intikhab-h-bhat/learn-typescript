function add(num) {
    return num + 5;
    // return "Hello World"
}
add(5);
var usercred = function (name, password) {
    console.log(name);
    console.log(password);
};
usercred("admin", 1234556);
//providing defatult value to the parameter
function getDeatails(name, age, isActive) {
    if (isActive === void 0) { isActive = false; }
    return "Name is ".concat(name, " and age is ").concat(age, " and isActive is ").concat(isActive);
}
getDeatails("admin", 25);
