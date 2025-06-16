//Part 1
function greet(name) {
    return `Hello ${name}`;
}
console.log("Part 1");
console.log(greet('Chris'));
console.log(greet("Bob"));

//Part 2
function addNumbers(number1, number2){
    return (number1 + number2);
}
console.log("Part 2");
console.log(addNumbers(1,2));
console.log(addNumbers(5,10));

//Part 3
let x = 10;
function changeValue(){
    return x = 5;
}
console.log("PArt 3");
console.log(x);
console.log(changeValue(x));

//Part 4
function outerFunction(){
    let count = 0;
    function innerFunction(){
        count++;
        console.log(count)
    }
    return innerFunction;
}
let myClosure = outerFunction();
console.log("Part 4")
myClosure();
myClosure();
myClosure();