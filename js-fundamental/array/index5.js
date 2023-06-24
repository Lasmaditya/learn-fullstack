//ARRAY

// var numbers = [1, 2, 3, 4, 5];

// for (var i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
//}

//STUDY CASE 1

// let stats = [1.7, 0.2, 5.1, 7.3, 3.5];
// let total = 0;

// for (let i = 0; i < stats.length; i++) {
//     total += stats[i];
// } console.log("Mean = " + total / stats.length);



//STUDY CASE 2

// let checkBoard = "xxoooxoxo";

// //Teknik Flagginh
// let countx = 0;
// let counto = 0;

// for (let i = 0; i < checkBoard.length; i++) {
//     if (checkBoard[i] === "x") {
//         countx++;
//     } else {
//         counto++;
//     }
// }
// if (countx === counto) {
//     console.log(true);
// } else {
//     console.log(false);
// }

//STUDY CASE 3

let votes = ["Vincent", "Ncent", "Vincent", "Admin", "Admin", "Vincent"];

let voteVincent = 0;
let voteNcent = 0;
let voteAdmin = 0;

for (let i = 0; i < votes.length; i++) {
    switch (votes[i]) {
        case "Vincent":
            voteVincent++;
            break;
        case "Ncent":
            voteNcent++;
            break;
        case "Admin":
            voteAdmin++;
            break;
    }
}

let result = [
    ["Vincent", voteVincent],
    ["Ncent", voteNcent],
    ["Admin", voteAdmin],
];
console.log(result);

//STUDY CASE DARI PDF

let murid = [
    [1, "Vincent", 3.5],
    [2, "Udin", 3.0],
    [3, "Mamang", 2.1],
];

for (let i = 0; i < murid.length; i++) {
    if (murid[i][2] >= 3.0) {
        console.log(
            murid[i][0] + ". " +
            murid[i][1] + " IPK = " +
            murid[i][2] + ", Lulus."
        )
    } else {
        console.log(
            murid[i][0] + ". " +
            murid[i][1] + " IPK = " +
            murid[i][2] + ", Tidak Lulus."
        )
    }
}

/**
 * Study Case soal masuk kerja di Code
 * 
 * Tentukan score max dan min dari sebuah array.
 */

let scores = [7, 2, 30, 15, 75];
let max = scores[0];
let min = scores[0];

for(let i = 0; i < scores.length; i++){
    if(max < scores[i]){
        max = scores[i];
    }
    if(min > scores[i]){
        min = scores[i];
    }
}
console.log("Max: " + max);
console.log("Min: " + min);
