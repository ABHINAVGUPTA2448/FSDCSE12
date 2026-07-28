// // console.log("Hello, World!");
// // console.log("This is the FSDCSE12 project index file.");

// //let a = 10;
// //if (a > 5) {
// //   let a = 15;
// //    console.log("Inside if block: " + a); // Output: 15
// //}
// //console.log("Outside if block: " + a); // Output: 10
// //function sum(x, y) {
//   //  return x + y;
// //}
// // //console.log(sum(5, 10)); // Output: 15
// // const sum = (x, y) =>{ return x + y; };
// //  console.log(sum(5, 10)); // Output: 15

// //  const data = function(msg) {
// //     return "Hello, I am using JS: " + msg;
// //  };
// //  data("and Node");
// //  (()=>{
// //     console.log("This is an IIFE function.");
// //  })();
// //  console.log(data("This is a test message.")); // Output: Hello, I am using JS: This is a test message.
// //callback function
// // function sum(a,b){
// //     return a+b;
// // }
// // function sumWithMsg(clbk,msg){
// //     const result = clbk(5,10);
// //     console.log("Hey, the result is: " + result+" !! Well done "+msg);
// // }
// // sumWithMsg(sum,"You are a good programmer");
// // function login(msg,error){
// //     if(msg){
// //         console.log("Login successful: " + msg);
// //     }else{
// //         console.log("Login failed: " + error);
// //     }
// // }function loginHandler(username,password,callback){
// //     if(username === "admin" && password === "admin123"){
// //         callback("Welcome, admin!",""); // Successful login
// //     }else{
// //         callback("", "Invalid username or password."); // Failed login
// //     }
// //}
// // // Example usage:
// // loginHandler("admin", "admin123", login); // Successful login
// // loginHandler("user", "wrongpassword", login); // Failed login
// // console.log("One")
// // setTimeout(() => {
// //     console.log("two");
// // }, 2000);
// // console.log("Three")
// // setTimeout(() => {
// //     console.log("One");

// //     setTimeout(() => {
// //         console.log("Two");

// //         setTimeout(() => {
// //             console.log("Three");

// //             setTimeout(() => {
// //                 console.log("Four");

// //                 setTimeout(() => {
// //                     console.log("Five");

// //                     setTimeout(() => {
// //                         console.log("Six");

// //                         setTimeout(() => {
// //                             console.log("Seven");
// //                         }, 1000);

// //                     }, 1000);

// //                 }, 1000);

// //             }, 1000);

// //         }, 1000);

// //     }, 1000);

// // }, 1000);
// const mypromise = new Promise((resolve, reject) => {
//     const username = "admin";
//     const password = "admin123";
//     if (username === "admin" && password === "admin123") {
//         resolve("Login successful! Welcome, admin.");
//     } else {
//         reject("Login failed! Invalid username or password.");
// //     }
// // });
// // // mypromise.then((message) => {
// // //     console.log(message);
// // // }).catch((message) => {
// // //     console.log(message);
// // // }).finally(() => {
// // //     console.log("This is the final block, executed regardless of success or failure.");
// // // });
// // const mypromise = new Promise((resolve, reject) => {
// //     const number = 8;

// //     if (number % 2 === 0) {
// //         resolve(number + " is Even.");
// //     } else {
// //         reject(number + " is Odd.");
// //     }
// // });

// mypromise
// //     .then((message) => {
// //         console.log(message);
// //     })
// //     .catch((message) => {
// //         console.log(message);
// //     })
// //     .finally(() => {
// //         console.log("This is the final block, executed regardless of success or failure.");
// //     });
// // async function handleData() {
// //     try {
// //         const result = await mypromise;
// //         console.log(result);
// //     } catch (error) {
// //         console.log(error);
// //     } finally {
// //         console.log("This is the final block, executed regardless of success or failure.");
// //     }
// // }
// // handleData();
// // async function handleData() {
// //     try {
// //         const result = await mypromise;
// //         console.log(result);
// //     } catch (error) {
// //         console.log(error);
// //     } finally {
// //         console.log("This is the final block, executed regardless of success or failure.");
// //     }
// // }

// // handleData();
// // async function handleData() {
// //     try {
// //         const result = await mypromise;
// //         console.log(result);   
// //     } catch (error) {
// //         console.log(error);    
// //     } finally {
// //         console.log("All done!");
// //     }
// // }

// // handleData(); 
// async function handleData() {
//     try {
//         const result = await mypromise;
//         console.log(result);   // Success message
//     } catch (error) {
//         console.log(error);    // Error message
//     } finally {
//         console.log("This is the final block, executed regardless of success or failure.");
//     }
// }

// handleData(); // Calling the async function
// const mypromise = new Promise((resolve, reject) => {
//     const username = "admin";
//     const password = "admin123";

//     if (username === "admin" && password === "admin123") {
//         resolve("Login successful! Welcome, admin.");
//     } else {
//         reject("Login failed! Invalid username or password.");
//     }
// });


// async function handleData() {
//     try {
//         const result = await mypromise;
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     } finally {
//         console.log("This is the final block, executed regardless of success or failure.");
//     }
// }

// handleData();
// const promise1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Promise 1 completed");
//     }, 1000);
// });

// const promise2 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Promise 2 completed");
//     }, 2000);
// });

// const promise3 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Promise 3 completed");
//     }, 3000);
// });


// Promise.all([promise1, promise2, promise3])
// .then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error);
// });
const orderPayment = new Promise((resolve, reject) => {
    const paymentSuccess = true;

    if (paymentSuccess) {
        resolve("Payment successful");
    } else {
        reject("Payment failed");
    }
});


const orderDelivery = new Promise((resolve, reject) => {
    const itemAvailable = true;

    if (itemAvailable) {
        resolve("success Order confirmed and will be delivered");
    } else {
        reject("failed Order declined: Item not available");
    }
});


Promise.all([orderPayment, orderDelivery])
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});