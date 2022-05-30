const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Esto es algo asincrono'))
        : reject(err => console.error(err))
    });
}

const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}

console.log('Before');
doSomething();
console.log('After');

// una buena practica es capturar el error en el caso te tenerlo con un catch,
// y para eso se usa try and catch

const doSomething2 = async () => {
    try {
        const something2 = await doSomethingAsync();
        console.log(something2);
    } catch (error) {
        console.log('Tenemos un error aca: ', error);
    }
}

console.log('Before2');
doSomething2();
console.log('After2');