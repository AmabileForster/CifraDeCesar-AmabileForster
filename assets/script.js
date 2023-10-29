var execute = document.getElementById('execute');

execute.onclick = function(){
    console.log('entrou aqui');
    const enterPhrase = document.getElementById('enterPhrase').value;
    const operation = document.querySelector('input[name="operation"]:checked').value;
    const key = document.getElementById('key').value;

    const isNumericKey = !isNaN(key);
    let shift;

    if (isNumericKey) {
        shift = parseInt(key, 10);
    } else{
        shift = key.toLowerCase().charCodeAte(0) - 'a'.charCodeAt(0) + 1;
    }


    let result = '';

    for (let i = 0; i < enterPhrase.length; i++){
        const char = enterPhrase[i];
        if(/[a-zA-Z]/.test(char)) {
            const isUpperCase = char === char.toUpperCase();
            const baseCharCode = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);

            if (operation === 'encrypt'){
                let shiftedCharCode = (char.charCodeAt(0) - baseCharCode + shift) % 26;
                if (shiftedCharCode < 0) {
                    shiftedCharCode += 26;
                }
                result += String.fromCharCode(shiftedCharCode + baseCharCode);
            } else{
                let shiftedCharCode = (char.charCodeAt(0) - baseCharCode - shift) % 26;
                if (shiftedCharCode < 0) {
                    shiftedCharCode += 26;
                }
                result += String.fromCharCode(shiftedCharCode + baseCharCode);
            }
        } else {
            result += char;
        }
    }
    document.getElementById('output').value = result;
}