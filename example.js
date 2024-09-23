// sample example to understand how setTimeout works

// setTimeout(() => {
//     console.log('check it in next 5 sec');
// }, 5000);

// for(let j = 1; j < 6; j++){
//     setTimeout(() => {
//         console.log('value is ', j);     
//     }, j*1000);   
// }



function x(){
    for(var i = 1; i <=5; i++){
        function closure(x){
            setTimeout(function() {
                console.log(x);
            }, x * 1000);
        }
        closure(i);
    }

    console.log('Namaste Javascript | setTimeOut');
}

x();