// sample example to understand how setTimeout works

// setTimeout(() => {
//     console.log('check it in next 5 sec');
// }, 5000);

// for(let j = 1; j < 6; j++){
//     setTimeout(() => {
//         console.log('value is ', j);     
//     }, j*1000);   
// }

// function x(){
//     for(var i = 1; i <= 5; i++){
//         function closure(x){
//             setTimeout(function() {
//                 console.log(x);
//             }, x * 1000);
//         }
//         closure(i);
//     }

//     console.log('Namaste Javascript | setTimeOut');
// }

// x();


// =---=-=--=-=--=---=---=---=---=---=---=---=---=---=
//  Difference between Fucntion Statement & Function Expression is Hoisting 

// a(); // invoking function a()  //  a invoked
console.log(a());    //  a invoked
console.log(b());    // undefined
// b(); // invoking function b() //  TypeError: b is not a function

 // Function Statement
function a(){
    console.log('a invoked');
}
// a(); // invoking function a()

// Function Expression 
var b = function(){
    console.log('b invoked');
}
// b(); // invoking function b()

