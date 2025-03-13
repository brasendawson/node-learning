// import { upperCase } from "upper-case";

// async function greet(name) {
//     console.log(upperCase(`Hello ${name}, welcome to Coding`));
// }

// greet("Brasen");
// export { greet };


const { upperCase } = require("upper-case")

function greet(name) {
    console.log(upperCase(`Hello ${name}, welcome to Brasen!`))
}

greet("Brasen")
module.exports = greet