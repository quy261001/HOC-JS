// buyIphone = true;
// let willBuyIphone = new Promise(function(resolve, reject) {
  
//     if(buyIphone) {
//       resolve("oh yeah I have new Iphone");
//       console.log("ok")
//     } else {
//       reject("oh yeah I dont new Iphone");
//       console.log("not ok")
//     }
// });

// function makePromise(buyIphone) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(() => {
//       if(buyIphone) {
//         resolve("oh yeah I have new Iphone");
//       } else {
//         reject("oh yeah I dont new Iphone");
//       }
//     }, 3000);
//   });
// }
// let haveIphone = makePromise(false);
// haveIphone.then(
//  (success) => console.log(success),
//  (reason) => console.log(reason)
// )

new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("1. run the first time");
  }, 3000);
})
.then((data) => {
  console.log(data)
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("2. run the second time");
    }, 1000);
  })
})
.then((data) => {
  console.log(data)
  return  new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("3. run the third time");
    }, 4000);
  })
})
.then((data) => {
  console.log(data)
})