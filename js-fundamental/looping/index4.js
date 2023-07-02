// for (var i = 1; i <= 10; i++){
//     console.log(i);
// }

// var j = 1;
// while (j <= 10){
//     console.log(j);
//     j++;
// }

// var i = 1;
// while(i <= 10){
//     console.log(i);{
//     if(i %2 == 0){
//         console.log('adalah bilangan genap');
//     } else{
//         console.log('adalah bilangan ganjil')
//     }
//     }i++}

// var num = 10;
// for (var i = 1; i <= num; i++){
//     if(i %2 === 0){
//         console.log(i + ' adalah bilangan genap');
//     } else {
//         console.log(i + ' adalah bilangan ganjil');
//     }
// }


//Study Case 2

// var str = "nasi kotak";
// var temp = "";

// for (var i = 0; i < str.length; i++){
//     if (i % 2 === 0){
//         temp = temp + str[i].toUpperCase()
//     } else {
//         temp = temp + str[i].toLowerCase()
//     }
// }
// console.log(temp)

//Study Case 3

// var pantun = "makan siang bareng temen kerja";
// var temp = "";

// for (var i = 0; i < pantun.length; i++){
//     if(pantun[i] !== " "){
//         temp += pantun[i];
//     } else
// }

//Study Case 4

//Tentukan faktor
// Faktor dari sebuah bilangan = bilangan yang habis di bagi oleh faktor itu sendiri

// var n = 100;

// for (var i = 1; i <= n; i++) {
//     if (n % i === 0) {
//         console.log(i);
//     }
// }

//Study case 5

// var x = 5;
// var y = 3;
// var temp = "";

// for (var i = 0; i < x; i++){
//     for (var j = 0; j < y; j++){
//         temp += "#";
//     }
//     console.log(temp);
//     temp = "";
// }

//Study Case 6

// var x = 5;
// var temp = "";

// for (var i = 0; i < x; i++){
//     for (var j = 0; j <= i; j++){
//         temp += "#";
//     }
//     console.log(temp);
//     temp = "";
// }

// var x = 5;
// var temp = "";

// for (var i = 0; i < x; i++){
//     for (var j = 0; j <= i; j++){
//         temp += j+1;
//     }
//     console.log(temp);
//     temp = "";
// }


//Study Case 7

// var number = 5;
// var temp = "";

// for (var i = 0; i < number; i++) {
//     for (var j = 0; j < number; j++) {
//         if (i === 0 || i === number - 1) {
//             temp = temp + "#";
//         } else {
//             if (j === 0 || j === number - 1) {
//                 temp = temp + "#";
//             } else {
//                 temp = temp + " ";
//             }
//         }
//     }
//     console.log(temp);
//     temp = "";
// }


  const higherOrderFunc = param => {
    param();
    return `I just invoked ${param.name} as a callback function!`
  }
   
  const anotherFunc = () => {
    return 'I\'m being invoked by the higher-order function!';
  }
   
  higherOrderFunc(anotherFunc);

  higherOrderFunc(() => {
    for (let i = 0; i <= 10; i++){
      console.log(i);
    }
  });