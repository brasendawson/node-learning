(function (message) {
    const superHero = "Batman"
    console.log(message, superHero);
})("Hello");

(function (message) {
    const superHero = "Superman"
    console.log(message, superHero);
})("Hey");
// imediately invoked function expression
//Before a modules code is executed, node.js will wrap it with a function wrapper that provides module scope
//iife allows youto repeat variable or function names without any conflicts
//each loaded modulce in node.js is wrapped with an iife that provides private scoping of code
//before a modules code is executed node js will wrap it with a fuction that contains five paremeters including , exports, requiere, module, __filename, __dirname