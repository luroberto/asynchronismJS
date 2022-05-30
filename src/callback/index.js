// this is a normal function

function sum (num1, num2){
    return num1 + num2;
}

// this is a callback function

function calcular (num1, num2, callback){
    return callback(num1, num2);
}

// ejecution

//console.log(calcular(2, 2, sum));

// this is the first function

function date (callback){
    console.log('esto sucede primero: ',new Date);
    setTimeout(function (){
        let date = new Date;
        callback(date);
    }, 2000)
}

// this is the second dunction with the values

function printDate(dateNow){
    console.log('esto sucede despues: ', dateNow);
}

// call mother function

date(printDate);