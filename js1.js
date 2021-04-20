// console.log("asdf");
// let a = 14;
// if (a % 2 == 0) {
// console.log("even");
// } else {
// console.log("odd");
// }
// let a = 18;
// let b = 18;
// let c = 180;
// if (a > b && a > c) {
// console.log(a);
// } else if (b > c && b > a) {
// console.log(b);
// } else {
// console.log(c);
// }

// for (let i = 1; i <= 20; i++) {
// if ((i % 3 == 0) && (i % 5 == 0)) {
// console.log(i + " FIZZBUZZ");
// } else if (i % 5 == 0) {
// console.log(i + " BUZZ");
// } else if (i % 3 == 0) {
// console.log(i + " FIZZ");
// 
// }
// }
// function f1() {
// console.log("asdcv");
// }
// f1(); //asdcv
// 
// function f1(param) {
// console.log(param);
// return 3;
// }
// 
// let val = f1("asdf"); //asdf
// console.log(val); //3
// 

// function decimaltobinary(a) {
// let rev = 0;
// let c = 1;
// while (a > 0) {
// let rem = a % 2;
// rev = rev + rem * c;
// 
// c = c * 10;
// a = Math.floor(a / 2);
// }
// console.log(rev);
// }
// 
// decimaltobinary(15);


// function nthtoap(a, n, d) {
// 
// 
// let ae = a + (n - 1) * d;
// console.log(ae);
// }
// 
// nthtoap(1, 5, 3);
//array
// let a = [1, 2];
// console.log(a);

// let a = [1, 2, 3, 4, 5];
// 
// function name2(params) {
// console.log(params);
// 
// }
// 
// 
// name2(a);
// let a = [1, 2, 3, 4, 5];

// function smallestnumberandlargestnumberinarray(a) {
// let small = a[0];
// for (let i = 1; i < a.length; i++) {
// if (small > a[i]) {
// small = a[i];
// }
// }
// console.log(small);
// 
// let large = a[0];
// for (let i = 1; i < a.length; i++) {
// if (large < a[i]) {
// large = a[i];
// }
// }
// console.log(large);
// }
// 
// smallestnumberandlargestnumberinarray(a);

// taking input from user
// function sdd(params) {
// console.log(params + 2);
// }
// 
// 
// sdd(parseInt(process.argv[2]));

//taking multiple input from user
// let input = process.argv.slice(2); it is array of path 
// console.log(input);

// function df(params) {
// for (let i = 0; i < params.length; i++) {
// console.log(params[i]);
// }
// }
// df(process.argv.slice(2));

// let a = [1, 2, 3, 4, 5];
// let b = a.slice(2, 4);
// console.log(b); // [3,4]
// console.log(a); //[1,2,3,4.5] original array remains same

// let arr = [1, 2, 3, 4, 5, 6];
// let a = arr.splice(1, 3);
// console.log(a); //[2,3,4]
// console.log(arr); //[1,5,6]

// let arr = [1, 2, 3, 4, 5, 6];
// let a = arr.splice(1, 3, 7, 8, 9);
// console.log(a); //[2,3,4]
// console.log(arr); //[1,7,8,9,5,6]


function checkPalindrome(string) {

    const arrayValues = string.split('');

    // reverse the array values
    const reverseArrayValues = arrayValues.reverse();

    // convert array to string
    const reverseString = reverseArrayValues.join('');

    if (string == reverseString) {
        console.log('It is a palindrome');
    } else {
        console.log('It is not a palindrome');
    }

}

checkPalindrome("aba");