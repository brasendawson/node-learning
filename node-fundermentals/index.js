//Module
// const add = require('./add.js');  //require is used to import a module by path

// console.log("Hello from index.js")
// const sum = add(1, 2);
// const sum2 = add(5, 9)
// console.log(sum)
// console.log(sum2)


//Module Scope
// require('./batman')
// require('./superman')  //both run without error becuase each module has its own scope 

// const superHero = require("./super-hero")
// console.log(superHero.getName())
// superHero.setName("Superman")
// console.log(superHero.getName())

// const newSuperHero = require("./super-hero")
// console.log(newSuperHero.getName()) //output is Superman becuase it has already been cached



//module caching
// const SuperHero = require("./super-hero")

// const batman = new SuperHero("Batman")
// console.log(batman.getName())
// batman.setName("Bruce Wayne")
// console.log(batman.getName())

// const superman = new SuperHero("Superman")
// console.log(superman.getName())


//module exports and imports
// const math = require("./math")

// console.log(math.add(2, 3))
// console.log(math.subtract(2, 3))

// const { add, subtract } = math

// console.log(add(2, 3))
// console.log(subtract(2, 3))

// const data = require("./data")
// //with the line above you have to becareful becuase if its a json you are trying
// //to import and you dont add the .json it will try to open a data.js file which may
// //already exist

// console.log(data.name)

// console.log("Hello World")


//Path Module
// const path = require("node:path") //or
// const path = require("path")

// console.log(__filename)
// console.log(__dirname)

// console.log(path.basename(__filename))
// console.log(path.basename(__dirname))

// console.log(path.extname(__filename))
// console.log(path.extname(__dirname))

// console.log(path.parse(__filename))
// console.log(path.format(path.parse(__filename)))

// console.log(path.isAbsolute(__filename))
// console.log(path.isAbsolute("./data.json"))

// console.log(path.join("folder1", "folder2", "index.html"))
// console.log(path.join("/folder1", "folder2", "index.html"))
// console.log(path.join("/folder1", "//folder2", "index.html"))
// console.log(path.join("/folder1", "//folder2", "../index.html"))
// console.log(path.join(__dirname, "data.json"))

// console.log(path.resolve("folder1", "folder2", "index.html"))
// console.log(path.resolve("/folder1", "folder2", "index.html"))
// console.log(path.resolve("/folder1", "//folder2", "index.html"))
// console.log(path.resolve("/folder1", "//folder2", "../index.html"))
// console.log(path.resolve(__dirname, "data.json"))


// call back function is a function that is passed into another function as an 
// argument
// the function that accepts a function as its argument is called a higher
// order function
// function greet(name) {
//     console.log(`Hello ${name}`)
// }
// function greetBrasen(greetFn) {
//     const name = "Brasen"
//     greetFn(name)
// }

// greetBrasen(greet)



//Asynchronous callbacks
//A callback that is often used to continue or resume code execution after an asynchronous operation has completed
//Callbacks are used to delay the execution of a function until a particular time or event has occurred
//In Node.js have an asynchronous nature to prevent blocking of execution
//Ex: reading data from a file, fetching data from a database or handling a network request
//SUB

// Synchronous callbacks
// A callback which is executed immediately is called a synchronous 
// callback


//events module
//allows to work with events in node
//the module events returns an emitter class, EventEmitter() which can be instanciated to make 
//an emitter object
//you can register event listiners using the .on method
//you can emit an event using .emit 
//the emit methos accepts the event name followed by arguments that need to be passed on
//to the listeners
// const EventEmitter = require("node:events")

// const emitter = new EventEmitter()

// emitter.on("order-pizza", (size, topping) => {
//     console.log(`Order received! Baking a ${size} pizza with ${topping}`)
// })

// emitter.on("order-pizza", (size) => {
//     if (size === "large"){
//         console.log("Serving complimentary drink")
//     }
// })
// console.log("Do work before even occurs in the system")
// emitter.emit("order-pizza", "large", "mushroom")

//extending from EventEmitter
// const PizzaShop = require("./pizza-shop")
// const DrinkMachine = require("./drink-machine")

// const pizzaShop = new PizzaShop()
// const drinkMachine = new DrinkMachine()

// pizzaShop.on("order", (size, topping) => {
//     console.log(`Order received! Baking a ${size} pizza with ${topping}`)
//     drinkMachine.serveDrink(size)
// })

// pizzaShop.order("large", "peperoni")
// pizzaShop.displayOrderNumber()


// buffers
// const buffer = new Buffer.from("Brasen")

// buffer.write("Code")

// console.log(buffer.toString())
// console.log(buffer)
// console.log(buffer.toJSON())




// const fs = require("node:fs/promises")

// async function readFile() {
//     try {
//         const data = await fs.readFile("file.txt", "utf-8")
//         console.log(data)
//     }   catch(err) {
//         console.log(err)
//     }
// }
// readFile()


// console.log("First")

// fs.readFile("file.txt" , "utf-8")
// .then(data => console.log(data))
// .catch((error) => console.log(error))

// console.log("Second")






// const fs = require("node:fs")


// // console.log('First')
// const fileContents = fs.readFileSync("./file.txt", "utf-8") //readfilesync will let the javascript engine /
// // /wait till the file contents are read before moving on to the next line and its a synchronous way //reading files syncronously
// console.log(fileContents)

// console.log('Second')

// fs.readFile("./file.txt", "utf-8", (error, data) => { //error first call back pattern //reading files asynchronously
//     if (error){
//         console.log(error)
//     } else {
//         console.log(data)
//     }
// })
// console.log('Third')


// fs.writeFileSync("./greet.txt", "Hello World!")

// fs.writeFile("./greet.txt", " Hello Brasen!", {flag: "a"}, (err) => {
//     if(err) {
//         console.log(err)
//     } else {
//         console.log("File written")
//     }
// })


// const fs = require("node:fs");
// const zlib = require("node:zlib")

// const gzip = zlib.createGzip()

// const readableStream = fs.createReadStream("./file.txt", {
// encoding: "utf-8",
// });

// readableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz "))

// const writeableStream = fs.createWriteStream("./file2.txt");

// readableStream.pipe(writeableStream)

// readableStream.on("data", (chunk) => {
// console.log(chunk);
// writeableStream.write(chunk);
// });

// const http = require("node:http")
// const fs = require("node:fs")

// const server = http.createServer((req, res)=> { 
//     if (req.url === "/"){
//         res.writeHead(200, {"Content-type": "text/plain"})
//         res.end("Home page")
//     }   else if (req.url === "/about"){
//         res.writeHead(200, {"Content-type": "text/plain"})
//         res.end("About page")
//     }   else if (req.url === "/api"){
//         res.writeHead(200, {"Content-type": "application/json"})
//         res.end(JSON.stringify({
//             firstName: "Bruce",
//             lastName: "Wayne"
//         }))
//     }   else {
//         res.writeHead(404)
//         res.end("Page not found")
//     }
// })

// server.listen(3000, () => {
//     console.log("Server running on port 3000")
// })

// const crypto = require("node:crypto")

// process.env.UV_THREADPOOL_SIZE = 8
// const https = require("node:https")
// const MAX_CALLS = 12


// const start = Date.now()
// for (let i = 0; i < MAX_CALLS; i++){
//     https
//      .request("https://www.google.com", (res) => {
//         res.on("data", () => {})
//         res.on("end", () => {
//             console.log(`Request: ${i + 1}`, Date.now() - start)
//         })
//      })
//      .end()
//     }
    // crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
    //     console.log(`Hash: ${i + 1}`, Date.now() - start)
    // })


// const start = Date.now()
// crypto.pbkdf2Sync ("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync ("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync ("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync ("password", "salt", 100000, 512, "sha512");
// console.log("Hash: ", Date.now() - start)



// console.log("console.log 1")
// process.nextTick(() => console.log("this is process.next 1"))
// console.log("console.log 2")

// Promise.resolve().then(() => console.log("this is Promise.resolve 1"))
// process.nextTick(() => console.log("this is process.nextTick 1"))

// process.nextTick(() => console.log("this is process.nextTick 1"));
// process.nextTick(() => {
//    console.log("this is process.nextTick 2")
//    process.nextTick(() =>
//     console.log("this is the inner next tick inside next tick")
//     )
// })

// process.nextTick(() => console.log("this is process.nextTick 3"));

// Promise.resolve().then(() => console.log("this is Promise, resolve 1"));
// Promise.resolve().then(() => {
//    console.log("this is Promise, resolve 2");
//    process.nextTick(() =>
//     console.log ("this is the inner next tick inside Promise then block")
//    )
// })

// Promise.resolve().then(() => console.log("this is Promise, resolve 3"));


// I/O Queue
// const fs = require("fs")

// fs.readFile(__filename, () => {
//     console.log("this is readFile 1")
// })

// process.nextTick(() => console.log("this is process.nextTick 1"))
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"))



// const fs = require("fs")

// fs.readFile(__filename, () => {
//     console.log("this is readFile 1")
//     setImmediate(() => console.log("this is setImmediate inside readFile"))
// })

// process.nextTick(() => console.log("this is process.nextTick 1"))
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"))


// for (let i = 0; 1 < 2000000000; i++) {}



// setImmediate(() => console.log("this is setImmediate 1"));
// setImmediate(() => {
//     console.log("this is setImmediate 2");
// });


// const fs = require("fs")

// const readableStream = fs.createReadStream(__filename)
// readableStream.close()

// readableStream.on("close", () => {
//     console.log("this is from readableStream close event callback")
// })

// setImmediate(() => console.log("this is setImmediate 3"))
// setTimeout(() => console.log("this is setTimeout 1"), 0)
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// process.nextTick(() => console.log("this is process.nextTick 1"));


const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello world!");
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log("Server is running on port 3000"));
