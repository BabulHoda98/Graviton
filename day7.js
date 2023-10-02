// Date object 
// Create
// let a=new Date();
// a=new Date("May 18,2002 04:13:30");
// a=new Date(2020,10,14,6,14,50,9)
// js--month =>0-11
// a=new Date(2023,13,20,9,30,45);
// // atleast 2 values (year,month)
// a=new Date(2015,9,10,9)
// a=new Date(2022,11,20)
// a=new Date(2023,11)
// a=new Date(2020)

// // millisec to date 
// a=new Date(574684069823)
// a=new Date(30*365*24*60*60*1000)
// console.log(a); 

// const a= new Date()
// console.log(a);
// console.log(typeof(a))
// let b=a.toString();
// console.log(typeof(b));

// let c=a.toDateString()
// console.log(c);
// console.log(typeof(c)); 

// let d=a.toUTCString()
// console.log(d);
// console.log(typeof(a))

// let e=a.toISOString()
// console.log(e);

// // get date =return number data type
// const a=new Date()
// console.log(a);
// console.log(a.getFullYear());
// // month 0--->11    Week =0(sun)--->6(sat)
// console.log(a.getMonth());
// console.log(a.getDate());
// console.log(a.getHours());
// console.log(a.getMinutes());
// console.log(a.getSeconds());
// console.log(a.getDay());

// console.log(typeof(a.getDate()));


// // set Date 
// // hour =0-23   milisec =0-999   sec/min =0-59
// let a=new Date()
// console.log(a);


// a.setFullYear(1990);
// a.setMonth(10);
// a.setHours(8);
// a.setMinutes(58);
// a.setSeconds(10);

// console.log(a);


// // Math = js object 
// // properties
// console.log(Math.E);
// console.log(Math.PI);
// console.log(Math.SQRT2);
// console.log(Math.SQRT1_2);
// console.log(Math.LN2);
// console.log(Math.LN10);


// method
// math.round-(.0-0.4=same integer and 0.5-0.9=nearest integer)

// let a=8.6;
// console.log(a);
// let b=Math.round(a);
// console.log(b);

// let a=8.4;
// // let a=-8.5  //(0.6-0.9=nearest integer for negative integer)
// console.log(a)
// let b=Math.round(a);
// console.log(b);

// Math.ceil 
// let a=8.9;
// console.log(a);
// let b=Math.ceil(a);
// console.log(b);

// // Math.floor = rounded down

// let a=8.9768;
// console.log(a);
// let b=Math.floor(a);
// console.log(b);

// let a=-8.4;
// console.log(a);
// let b=Math.floor(a);
// console.log(b);

// Math.trunc =return integer

// let a=8.9764790;
// console.log(a);
// let b=Math.trunc(a);
// console.log(b);

// // math.sign 
// let a=0;
// console.log(a);
// let b=Math.sign(a);
// console.log(b);

// console.log(2**3);
// console.log(Math.pow(3,3));
// console.log(Math.sqrt(81));
// console.log(Math.abs(-87.56));  //return absolute/position value

// // math random 
// let a =Math.trunc(Math.random()*999)
// console.log(a);
 