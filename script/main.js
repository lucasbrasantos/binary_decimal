
var num = binary.toString().split("").reverse().join("");
var decimal = 0;

for (let i = 0; i < num.length; i++){
    let result = convert(num[i], i)
    if (result != null) {
    	decimal += result;
    }
}

function convert(value, index){
    if(value == 1){
        return 2**index;
    }
    return null;
}

console.log(`binario: ${binary}\ndecimal: ${decimal}`);