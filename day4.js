// Largest of 2 num 
// function one(num1,num2){
//     if(num1>num2){
//         return `${num1} is greater`
//     }else{
//         return `${num2} is greater`
//     }
// }
// let a =prompt('Enter num1')
// console.log('num1',a,typeof(a));
// let b =prompt('Enter num2')
// console.log('num2',b,typeof(b));
// console.log(one(a,b));

// ----------
// function one(num1, num2, num3) {

//     if (num1 > num2) && (num1 > num3){
//         return `${num1} is greater`
//     }else if (num2 > num1) && (num2 > num3){
//         return `${num2} is greater`
//     }else {
//         return `${num3} is greater`
//     }
// }
// console.log(one(4, 5, 6));
// console.log(one(4, 50, 6));
// console.log(one(47, 5, 6));

// // perform airthmetic operation
// function one(num1,num2,operation){
//     if(operation==='sum'){
//         return `The sum of ${num1} and ${num2} is ${num1+num2}`
//     }else if(operation==='subtract'){
//         return `The Different between ${num1} and ${num2} is ${num1-num2}`
//     }else if(operation==='divide'){
//         return `The Division of ${num1} and ${num2} is ${num1/num2}`
//     }else if(operation==='product'){
//         return `The Product of ${num1} and ${num2} is ${num1*num2}`
//     }else{
//         return null;
//     }
// }
// console.log(one(34,6,'sum'));
// console.log(one(3,60,'subtract'));
// console.log(one(35,60,'divide'));
// console.log(one(34,60,'product'));
// console.log(one(34,6,'s'));

// // find grades for marks
// //90-100=A 80-90=B 70-80=C <70=D
// function one (marks){
//     if(marks>=90 && marks<=100){
//         return 'A';
//     }else if(marks>=80 && marks<=90){
//         return 'B';
//     }else if(marks>=69 && marks<=79){
//         return 'C';
//     }else{
//         return 'D';
//     }
// }
// console.log(one(98));
// console.log(one(71));

// // loop
// let a=9
// console.log(a);
// console.log(a++);
// console.log(a);
// console.log('---------')
// let b=5
// console.log(b)
// console.log(++b);
// console.log(b);
// console.log('----------');
// let c=7
// console.log(c);
// console.log(c--);
// console.log(c);
// console.log('---------');
// let d=6;
// console.log(d);
// console.log(--d);
// console.log(d);

// for = condition will be checked forst then output will be generated
// for (let a=4;a<=10;a++){
//     console.log(a);
// }

// for (let a=10;a>0;a--){
//     console.log(a);
// }

// // while 
// let a=5;
// while(a<11){
//     a++;
//     console.log(a);
// }

// // do while loop
// let a=2
// do{
//     console.log(a);
//     a++;
// }while(a<7)

// // continue & break 
// for (let b=1;b<14;b++){
//     // if(b===6) continue;
//     if(b===7) break;
//     console.log(b);
// }

// // print odd and even num 
// for (let a=1;a<14;a++){
//     // if(a%2===0)continue;
//     if(a%2===1)continue;
//     console.log(a);
// }

// loop nesting//////////-----issue

// for (let a = 1; a <= 2; a++) {
//     console.log(`A says ${a}`);
// // for (let b = 5; a <= 7; b++) {
//     // console.log(`B says ${b}`);
// for (let c=11;c<=13;c++){
//     console.log(`C says ${c}`);
// }
// // }
// }


// star pattern making
// pattern 1
// for (let a=1;a<=5;a++){
//     document.write("*");
// for (let b=1;b<a;b++){
//     document.write('<span>*</span>');
// }
//     document.write('<br/>');
// }

// // pattern 2
// for (let a=1;a<=5;a++){
//     // document.write('Step '+a+'&nbsp;&nbsp');
//     for (let c=1;c<=5-a;c++){
//         document.write('*');
//     }

//     for (let b=1;b<=a;b++){
//         // document.write('*')
//     document.write('<span>*</span>');

//     }
//     document.write('<br/>')
// }

// // pattern 3

// for (let a = 1; a <= 5; a++) {
//     for (let c = 1; c<=5-a; c++) {
//         // document.write('&nbsp;&nbsp')
//         document.write('*');
//     }
//     for (let b = 1; b <= a; b++) {
//         document.write('<span>*</span>')
//     }
//     for (let d=1;d<a;d++){
//         document.write('<span class="second">*</span>');
//     }
//     document.write('<br/>')

// }
