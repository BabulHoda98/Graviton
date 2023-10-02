// // Function 
// let a=8
// let b=4
// let sum=a+b;
// let sq=sum**2;
// console.log(sq);

// function declaration
// function one (a,b){
//     let sum=a+b;
//     return sum**2;
// }
// console.log(one(9,2));
// console.log(one(2,3));

// function funcName(para){
//     return para * 10
// }
// funcName(argument); //invoking or calling a function

// function one(a,b){
//     console.log(`a is ${a} and b is ${b}`);
//     let sum=a+b;
//     console.log('console log says '+sum);
//     console.log(typeof(sum));
//     // return sum;
//     // return 'jam';
//     return `Return says Jam`
// }
// console.log(one(2,4));
// console.log(one('Milk','Main'));
// console.log(one('Milk',400));

// // functional,Expression 

// const one =function(para1,para2){
//     return para1*para2;
// }
// console.log(one(2,3));

// // arrow function 
// const one =(para)=>{
//     return para**2
// }
// console.log(one(10));

// const one=(para,para2)=>{
//     return para+para2
// }
// console.log(one(5,10));

// const one=para=>para + 5
// console.log(one(5,10));

// function a(x){
//     console.log(x);
// }
// function b(){
//     a('B says jame vardy')
// }
// function c(){
//     a('C says Lion Scholari')
// }
// c()
// b()

// console.log('------------------')

// // callback func=func returned or passed as parameter
// function a(){
//     return function b(){
//         return 'B is returned'
//     }
// }
// console.log(a()());

// function a (para){
//     return para
// }
// console.log(a(function b(){return'B'}()));

// even or odd 
// function one(para){
//     if(para%2==0){
//         return 'EVEN'
//     }else{
//         return 'ODD'
//     }
// }
// console.log(one(23));