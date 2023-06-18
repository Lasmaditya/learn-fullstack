var angka = 2;
if (angka == 1) {
    console.log('Angka 1');
} else {
    console.log('Angka selain 1');
}


var angka = 3;
if (angka < 2) {
    console.log('Angka di bawah 2');
} else if (angka > 2) {
    console.log('Angka di atas 2');
} else {
    console.log('Angka 2')
}


var umur = 18;
if (umur >= 17) {
    console.log('Bisa bikin KTP');
} else {
    console.log('Belum bisa bikin KTP');
}


var minuman = 'air';
switch (minuman) {
    case 'kopi':
        console.log('Kamu pilih kopi');
        break;
    case 'teh':
        console.log('Kamu pilih teh');
        break;
    default:
        console.log('Kamu tidak minum');
}


var umur = 18;
var tinggi = 151;

if (umur < 17) {
    if (tinggi < 150) {
        console.log('Tidak boleh masuk');
    } else {
        console.log('Boleh masuk');
    }
} else {
    console.log('Boleh masuk juga');
}