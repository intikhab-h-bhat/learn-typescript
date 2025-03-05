var score = 10;
var user = { name: "sai", age: 22 };
user = { username: "sai", age: 22 };
function getDbId(id) {
    //return `The DB id is ${id}`
    //return id.toUpperCase()    //error
    if (typeof id === "string") {
        return id.toUpperCase();
    }
}
getDbId(3);
console.log(getDbId("3"));
