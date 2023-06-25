//Contoh
// function hello(){
//     console.log('Halo, selamat pagi!');
// }

// hello();

// function checkAngka(number){
//     if(number % 2 === 0){
//         console.log('Genap');
//     } else{
//         console.log('Ganjil');
//     }
// }

// checkAngka(4.2);
// console.log(4.2 % 2);

//Hitung jumlah kata di dalam sebuah string

// function splitToArray (str){
//     var tempArray = str.split(" ");
//     return tempArray;
// }

// function jumlahKata (kalimat){
//     var result = splitToArray (kalimat);
//     var arrayLength = result.length;
//     return arrayLength;
// }

// console.log(jumlahKata("Hello Selamat Pagi"))


//STUDY CASE 1; Cek Jumlah Faktor Suatu Bilangan
// function cekJumlahFaktor(num) {
//     var faktor = 0;
//     for (var i = 1; i <= num; i++) {
//         if (num % i === 0) {
//             faktor++;
//         }
//     }
//     return faktor;
// }
// console.log(cekJumlahFaktor (12));

//STUDY CASE 2; Cek Apakah Bilangan Prima atau Bukan

// function cekBilanganPrima(num) {
//     var jumlahFaktor = cekJumlahFaktor(num)
//     if (jumlahFaktor === 2) {
//         return 'Jumlah Faktor = ' + jumlahFaktor + ', dan merupakan Bilangan Prima'
//     } else {
//         return 'Jumlah Faktor = ' + jumlahFaktor + ', dan bukan merupakan Bilangan Prima'
//     }
// }
// console.log(cekBilanganPrima(15));

//STUDY CASE 3: Pecah Kalimat
// function pecahKalimat(str){
//     var arrResult = [];
//     var temp = '';

//     for(var i = 0; i < str.length; i++){
//         if(str[i] !== ' '){
//             temp += str[i];
//         } else{
//             arrResult.push(temp)
//             temp = ''
//         }
//         if(i === str.length-1){
//             arrResult.push(temp)
//             temp =''
//         }
//     }
//     return(arrResult)
// }
// console.log(pecahKalimat("buka puasa bersama teman kuliah"));

//STUDY CASE 4; Hitung Rata-Rata

// function countAverage(numbers){
//     var total = 0;
//     for(var i = 0; i < numbers.length; i++){
//         total += numbers[i];
//     }
//     return (total/numbers.length).toFixed(2)
// }
// console.log(countAverage([3, 5, 2, 7, 6, 5, 3, 8]));

//STUDY CASE 5: Menghitung XO

// function countxo(str){
//     var counto = 0;
//     var countx = 0;
//     for(var i = 0; i < str.length; i++){
//         if(str[i] === 'x'){
//             countx ++;
//         } else if(str[i] === 'o'){
//             counto ++;
//         }
//     }
//     if(countx === counto){
//         return true
//     } else {
//         return false
//     }
// }
// console.log(countxo('xxxxooooxoxxxxo'));


//STUDY CASE 6: Tentukan apakah sebuah kata atau kalimat adalah Palindrome.

function checkPalindrome(str) {
    var kiriKeKanan = '';
    var kananKeKiri = '';
    for (var i = 0; i < str.length; i++) {
        kiriKeKanan = str[i];
    }
    for (var i = str.length - 1; i >= 0; i--) {
        kananKeKiri = str[i];
    }
    if (str === '') {
        return 'Masukan sebuah kata';
    }
    if (kiriKeKanan === kananKeKiri) {
        return true;
    }
    else {
        return false;
    }
}
console.log(checkPalindrome('katak'));
console.log(checkPalindrome('bakso'));
console.log(checkPalindrome(''));

//STUDY CASE 7: Ubah Array Jadi String

function printWatches(watches) {
    if (watches.length !== 0) {
        let result = "Saya punya ";
        if (watches.length > 1) {
            for (let i = 0; i < watches.length; i++) {
                if (i !== watches.length - 1) {
                    result += watches[i] + ", ";
                } else {
                    result += "dan " + watches[i] + ".";
                }
            }
        } else {
            result += watches[0] + ".";
        }
        return result;
    } else {
        return "Tidak punya jam tangan, thanks.";
    }
}

// Test Case
console.log(printWatches(["Fossil", "Rolex", "Joger"]));
console.log(printWatches(["Seiko"]));
console.log(printWatches([]));