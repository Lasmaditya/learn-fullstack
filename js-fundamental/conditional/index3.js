//Conditional

/**
 * Study Case 1
 * 
 * Cek bilangan ganjil dan genap
 * 
 * Contoh
 * var num = 5;
 * 
 * Result:
 * 5 adalah bilangan ganjil.
 */

var number = 2;
if (number % 2 === 0) {
    console.log(number + ' adalah bilangan genap')
} else {
    console.log(number + ' adalah bilangan ganjil')
}

/**
 * Study Case 2
 * 
 * School Grade
 * Buatlah codingan untuk cek Grade sekolah
 * 
 * Grade A : score antara 100 - 85
 * Grade B : score antara 84 - 70
 * Grade C : score antara 69 - 55
 * Grade D : score antara 54 - 40
 * Grade E : score antara 39 - 0
 */

var grade = 78;
if (grade >= 85 && grade <= 100) {
    console.log('Grade A');
} else if (grade >= 70 && grade < 85) {
    console.log('Grade B');
} else if (grade >= 55 && grade < 70) {
    console.log('Grade C');
} else if (grade >= 40 && grade < 55) {
    console.log('Grade D');
} else if (grade >= 0 && grade < 40) {
    console.log('Grade E');
} else {
    console.log('Masukkan score yang benar, trims')
}

//Study Case 3

var access = 'Protected';
var level = 2;

switch (access) {
    case access = 'Public': {
        if (level < 5) {
            console.log('Public di bawah 5');
        } else if (level > 5) {
            console.log('Public di atas 5');
        } else {
            console.log('Public five');
        }
    }
        break;
    case access = 'Protected': {
        if (level < 5) {
            console.log('Protected di bawah 5');
        } else if (level > 5) {
            console.log('Protected di atas 5');
        } else {
            console.log('Protected five');
        }
    }
        break;
    case access = 'Private': {
        if (level < 5) {
            console.log('Private di bawah 5');
        } else if (level > 5) {
            console.log('Private di atas 5');
        } else {
            console.log('Private five');
        }
    }
        break;
    case access = '':
        console.log('Input access');
    default:
        console.log('Access is not defined');
}