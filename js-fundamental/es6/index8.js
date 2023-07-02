//Template Literal
let kata1 = "sudah";
let kata2 = "makan";
let kata3 = "siang";

//ES5
// console.log(kata1 + " " + kata2 + " " + kata3);

// //ES6
// console.log(`${kata1} ${kata2} ${kata3}`);


//High-Order Function
let scores = [1, 2, 3, 4, 5, 6, 7];

// //.forEach

// //ES5
// for (let i = 0; i < scores.length; i++){
//     console.log(scores[i]);
// };

// //ES6
// scores.forEach((score) => {
//     console.log(score);
// });


//.filter

// //ES5
// let temp = [];
// for (let i = 0; i < scores.length; i++){
//     if(scores[i] >= 5){
//         temp.push(scores[i]);
//     }
// }
// console.log(temp);

// //ES6
// scores = scores.filter((score) => score >= 5);
// console.log(scores);


//.map

//ES5
let temporary = [];
for (i = 0; i < scores.length; i++){
    temporary.push(scores[i] ** 2);
}
console.log(temporary);

//ES6
scores = scores.map((score) => score ** 2);
console.log(scores);