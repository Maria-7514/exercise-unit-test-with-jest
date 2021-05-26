// this is my function that sums two numbers
const sum = (a,b) => {
    return a+b;
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)



// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // returnamos el valor
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar){
    //convertimos el valor a yenes
    let valueInYen = valueInDollar * 127.9;
    return valueInYen
}
const fromYanToPound = function(valueInYen){
    //convertimos el valor a libra
    let valueInPound = valueInYen * 0.8;
    return valueInPound
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYanToPound }