// //Array of objects
// const account1={
//     owner:'Jons Smadmann',
//     movement:[200,400,-400,3000,-650,-130,70,1300],
//     interestRate:1.5,
//     pin:1111,
// };
// const account2={
//     owner:'Jasicka Devis',
//     movement:[5000,3400,150,-790,-3210,-1000,8500,30],
//     interestRate:1.5,
//     pin:2222,
// };
// const account3={
//     owner:'Stivan Thomas Willliams',
//     movement:[200,-200,340,-300,-20,50,400,-460],
//     interestRate:0.5,
//     pin:3333,
// };
// const account4={
//     owner:'Sarah Smith',
//     movement:[430,1000,700,50,90],
//     interestRate:1,
//     pin:4444,
// };
// const accounts=[account1,account2,account3,account4];       //array of objects
// // console.log(accounts);


// // create a new array with only namew
// let a=accounts.map((ele)=>{
//     // console.log(ele)
// return ele.owner
// })
// console.log(a);

// //create a new array with only pinnum
// let b =accounts.map(ele=>ele.pin).reduce((acc,ele)=>acc+ele)
// console.log(b);

// //grt only +ve movement nums
// let c=accounts
//     .map(ele=>ele.movement)
//     .flat(Infinity)
//     .filter(ele=>ele>0)
//     // .reduce((acc,ele)=>acc+ele)

// console.log(c);

// let d=accounts.map(ele=>{
//     return Object.entries(ele)
// })
// console.log(d);