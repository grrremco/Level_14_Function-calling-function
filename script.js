// Hey kiddo

const ageCheck = function (number) {
    if (number >= 18) {
        return 'true';
    }
    return 'false';
}

console.log(ageCheck(21));
console.log(ageCheck(14));


const greeting = function (number) {
    const adult = ageCheck(number);
    if (adult == "true") {
        return 'Hello there';
    }
    return 'Hey kiddo';
}

console.log(greeting(8));
console.log(greeting(42));



//VAT exercise 1

const highVat = function(number) {
    console.log("Entering highVat..");
    console.log("Total excl. VAT ", number);
    return number * 0.21;
}

const lowVat = function(number) {
    console.log("Entering lowVat..");
    console.log("Total excl. VAT ", number);
    return number * 0.09;
}

const calculateInclHighVat = function(number) {
    console.log("Entering calculateInclHighVat..")
    const vat = highVat(number);
    console.log("VAT 21% ", vat);
    const total = vat + number;
    console.log("Total incl. VAT ", total)
    return total;
}

const calculateInclLowVat = function(number) {
    console.log("Entering calculateInclLowVat..")
    const vat = lowVat(number);
    console.log("VAT 9% ", vat);
    const total = vat + number;
    console.log("Total incl. VAT ", total)
    return total;
}


console.log(calculateInclHighVat(1000));
console.log(calculateInclLowVat(2));


//VAT exercise 2

const baseHighVat = function(number) {
    console.log("Entering baseHighVat..");
    console.log("Total incl. VAT ", number);
    return (number - (number / 1.21));
}

const baseLowVat = function(number) {
    console.log("Entering baseLowVat..");
    console.log("Total incl. VAT ", number);
    return (number - (number / 1.09));
}

const calculateExclHighVat = function(number) {
    console.log("Entering calculateBaseHighVat..")
    const inclVat = baseHighVat(number);
    console.log("VAT 21% ", inclVat);
    const total = number - inclVat;
    console.log("Total excl. VAT ", total)
    return total;
}

const calculateExclLowVat = function(number) {
    console.log("Entering calculateBaseLowVat..")
    const inclVat = baseLowVat(number);
    console.log("VAT 9% ", inclVat);
    const total = number - inclVat;
    console.log("Total excl. VAT ", total)
    return total;
}

console.log(calculateExclHighVat(1210));
console.log(calculateExclLowVat(2.18));