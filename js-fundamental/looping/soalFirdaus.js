let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let str = 'webmaster';
let result = '';

for (i = 0; i < alphabet.length; i++){
    for (j = 0; j < str.length; j++){
        if (str[j] === alphabet[i]){
            result += (str[j]);
        }
    }
}
console.log(result);