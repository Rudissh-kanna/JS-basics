/**
 * Asynchronous operations in js
 */

const { reject } = require("async");

/**
 * Asynchronus is when we don't wait for a particular progrram to finish before executing the rest of the lines, Here we handle that lines of code asynchronously, by using callbacks, promises and async/await syntax, Eg: fetching web requests etc.
 * Callbacks used for a long time to handle asynchronous functions until ES6 update which introduced Promises
 * Promises are elegant way of handling asynchronous functions or code,
 * async/await is an extension of promises introduced in ES7 which looks elegant and close to synchronous programming.
 */

//callbacks

// const Posts = [
//     {title: "Post One", body: "This is post one"},
//     {title: "Post Two", body: "This is post two"}
// ];

// function getPosts() {
//     // simulate a fetch request we use setTimeout
//     setTimeout(() => {
//         let output = "";
//         Posts.forEach((post) => {
//             output += post.title + " "
//         } )
//         console.log(output);
//     }, 2000);
// }

// function createPost(post,callback) {
//     setTimeout(() => {
//         Posts.push(post);
//         callback()
//     }, 1000)
// }

// let post = {title: "Post Three", body: "this is post three"}

// createPost(post, getPosts);

// Promises;

const Posts = [
    {title: "Post One", body: "This is post one"},
    {title: "Post Two", body: "This is post two"}
];

function getPosts() {
    // simulate a fetch request we use setTimeout
    setTimeout(() => {
        let output = "";
        Posts.forEach((post) => {
            output += post.title + " "
        } )
        console.log(output);
    }, 2000);
}

function createPost(post) {

    // we use promises instead of callbacks to handle asynchronus operation 
    // the promis teakes in two arguments resolve and reject, we use resolve when the result is correct and reject if there is any error
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Posts.push(post);
            const error = false;

            if (!error) {
                resolve();
            }
            else {
                reject("Error: Somehting went wrong");
            }
        }, 1000)
    })
}

let post = {title: "Post Three", body: "this is post three"};

// // createPost(post)
// // .then(getPosts)
// // .catch(err => {console.log(err)})

// //Promise.all for resolving multiple promises
// const promise1 = Promise.resolve("Hello");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, "GoodBye");
// })

// Promise.all([promise1,promise2,promise3])
// .then((values) => {
//     console.log(values);
// })


//Async/Await

async function init() {
    await createPost(post);
    getPosts();
}

init();