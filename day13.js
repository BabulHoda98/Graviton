// // find 
// let a = [false, 56, 'rat', 23, 'D', 34, 77, 'H', true, 'G']
// console.log(a);

// let f = a.find((ele, index) => {
//     // return ele>50
//     return ele === 'rat'
// })
// console.log(f);



// let b=[56,78,34,23]
// let f=b.find(a=>a>50)
// console.log(f)

// let f1 = b.filter((a,b,c)=> {
//     return a> 50
// })
// console.log(f1);

// let m=b.map(a=>{
//     return a>50
// })
// console.log(m);

// let a = [false, 56, 'rat', 23, 'D', 34, 77, 'H', true, 'G']
// console.log(a);

// let ma=a.map(ele=>{
//     return ele + 1001
// })
// console.log(ma);

// let a=[[1,2,[3,4,[5,6[7,8[9,99]]]]]]
// console.log(a); 


// let b=a.flat(Infinity).filter(ele>ele>5).map(ele=>ele*100)
// // console.log(b);

// let c=[1,2,3,4,5]
// console.log(c)

// let d=c.reduce((acculumutor,ele,index,arr)={
//     return acculumutor
// })
// console.log(d);

// // sort 
// // let a=[23,45,67,43,21,32]
// let a=[203,15665,167,743,21,32]
// console.log(a)
// console.log(a.sort());


// let a=[203,15565,167,743,21,32]
// console.log(a);

// let b=a.sort((c,d)=>{
//     return c-d
// })
// console.log(b);

// let d=a.sort((c,d)=>{
//     return d-c
// })
// console.log(d);

// //objects key:value 1pair of key:value=1 property
// const a={
//     name:'ravi',
//     profession:'Trainer',
//     age:56,
//     department:''
// }
// a.name='Babul Hoda'
// a.hobbies='swimming'
// console.log(a);
// console.log(Object.keys(a));
// console.log(Object.entries(a));
// -------------------------
// let resturant = {
//     name: "Hoda Bhai",
//     localtedAt: "22Sec44 Gurgaon",
//     starters: ['Lemino', 'Sandwish', 'Coffee'],
//     mainCourse: ['Pizza', 'Braid','Nonvage'],
//     timings: {
//         mon: {
//             open: 11, close: 21
//         },
//         tue: {
//             open: 12, close: 22
//         },
//         wed: {
//             open: 13, close: 23
//         }
//     }

// }
// console.log(resturant);
// //dot method-------------------------
// console.log("-------------------");
// console.log(resturant.name);
// console.log(resturant.mainCourse);
// console.log(resturant.starters);
// console.log(resturant.timings.mon);
// console.log(resturant.timings.wed.open);
// console.log(resturant.timings.wed.close);
// console.log(resturant.timings);
// //Bracket Method
// console.log('-----------');
// console.log(resturant,['name']);
// console.log(resturant,['starters']);



// -------------------------
// dstructuring

// let {name,starters,LocatedAt}=resturant
// console.log(name,LocatedAt,starters);

// let {name:one,starters:two,locatedAt:three}=resturent
// console.log(one,two,three);

// let {timings:{mon:{open}}}=resturent
// console.log(timings);
// console.log(mon);
// console.log(open);

//methods=inside objects
// var age=99
// let a={
//     name:'Hoda Bhai',
//     age:21,
//     // calcSalary:function(){
//     //     return this.age*1000
//     // }

//     // calsSalary(){
//     //     return this.age*100
//     // }
//     calsSalary:()=>{
//         return this.age*100
//     }
// }
// console.log(a);
// console.log(a.calsSalary());


// //exercise
// let a={
//     name:'Hoda',height:'176cm',weight:67,calcBMI(){
//         return `BMI of $(this.name) is $(this.weight/(this.height**2))`
//     }
// }
// let b={
//     name:'Ajay',height:'176cm',weight:67,calcBMI(){
//         return `BMI of $(this.name) is $(this.weight/(this.height**2))`
//     }
// }
// let colcBMI=function(){
//     return `BMI of $(this.name) is $(this.weight/(this.height**2))}`
//     }

// let c=colcBMI.call(a)
// console.log(c)

// let d=colcBMI.call(b)
// console.log(d)
