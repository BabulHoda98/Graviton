// // call back function
// function a(){
//     return function b(){
//         return 'call back'
//     }
// }
// console.log(a()());
// // console.log(b());

// function a(para){
//     return para
// }
// console.log(()=>'CALLBACK'());

// function a(){
//     return 'Pencil'
// }
// console.log(a());
// let b=a()
// console.log(b);


// let calc=(a,b,cb)=>{
//     return cb(a,b)
// }
// // add 
// let add=calc(10,15,(c,d)=>c+d)
// console.log("Add:",add);
// //subtract
// let minus=calc(20,9,(c,d)=>c-d)
// console.log("Minus:",minus);
// // product 
// let product=calc(10,5(c,d)=>c*d)
// console.log(product);

// setTimeout(()=>{
//     console.log(45);
// },4000);




// function getCheese(cb) {
//     setTimeout(() => {
//         const cheese = "cheese";
//         console.log("Here is", cheese);
//         cb(cheese);
//     }, 3000);
// }
// function makeDough(para, cb2) {
//     setTimeout(() => {
//         const dough = para + " DOUGH";
//         console.log("Here is", dough);
//         cb2(dough);
//     }, 3000);
// }
// function makePizza(para, cb3) {
//     setTimeout(() => {
//         const pizza = para + " Pizza";
//         console.log("Here is", pizza);
//         cb3(pizza);
//     }, 3000);
// }
// getCheese((a) => {
//     makeDough(a, (b) => {
//         makePizza(b, (c) => {
//             console.log("Got the", c)
//         });
//     });
// });

// ASYNCHronous 
// console.log('1')
// console.log(alert('2'));
// console.log('3')

// console.log(1);
// setTimeout(()=>{
//     console.log(2);
// },4000);
// console.log(3);


// PROMISES
// click
// save in DB/async
// data is rendered 

// let promise=new Promise((resolve,reject)=>{
//     reject ('Promise')
// })
// console.log('One')
// setTimeout(()=>{
//     console.log('two')
// },2000);
// console.log(promise);




// let ticket = new Promise((resolve, reject) => {
//     let a = true
//     if (a) {
//         resolve('Ticket Purchased ')
//     } else {
//         reject('Ticket counter Closed')
//     }
// })
// ticket
//     .then((data) => {
//         console.log(data + 'Lets go');
//     })
//     .catch((data) => {
//         console.log(data + ' Trip canceled')
//     })
//     .finally(()=>console.log('lets us go Home'))

// exercise
function getCheese(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        const cheese=' CHEESE'
        console.log('Here is'+cheese)
        resolve(cheese)
        // reject("error")
      },2000)  
    })
}
function makeDough(para){
    return new Promise((resolve,reject)=>{
        const dough=para+' Dough'
        console.log('here is '+dough);
        // resolve(dough)
        reject("error")
    })
}

getCheese()
.then((a)=>{
    console.log('Got the '+a)
    return makeDough(a)
})
.then((b)=>{
    console.log('Got the '+b);
})
.catch((data)=>{
    console.log(data);
})