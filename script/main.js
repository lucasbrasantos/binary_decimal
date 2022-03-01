// binary to decimal //

function binaryDecimal(){

	let decimal = 0,
		binary = document.getElementById('binary').value.toString();

	let num = binary.split("").reverse().join("");

	for (let i = 0; i < num.length; i++){
	    let result = convert(num[i], i);
	    if (result != null) decimal += result;
	}

	showData(binary, decimal);
}

function convert(value, index){
    if(value == 1){
        return 2**index;
    }
    return null;
}

function showData(a, b){

	document.getElementById('binary').value = a;
	document.getElementById('decimal').value = b;

	console.log(`binario: ${a}\ndecimal: ${b}`);
}


////////////////////////////////////////////////

// decimal to binary //

function decimalBinary(){
	var binary = '',
		decimal = document.getElementById('decimal').value;



	function calcular(n){
	    let foo = true;
	    
	    while(n/2 !== 1){

	        if(n%2 == 1) binary += 1;
	        if(n%2 == 0) binary += 0;

	        n = Math.floor(n/2);

	        if (n == 1) {
	        	foo = false;
	        	break;
	        }
	    }

	    if (foo) {
	    	binary += 0;
	    	binary += 1;
	    }else {
	    	binary += 1;
	    }

	    binary = binary.split("").reverse().join("");
	}

	if (decimal !== "") {
		calcular(decimal);
	}else {
		return;
	}

	document.getElementById('decimal').value = decimal;
	document.getElementById('binary').value = binary;
}


////////////////////////////////////////////////

var trigger_ = true;

function trigger(){

	if (trigger_ == true) {
		//binary to decimal

		binaryDecimal();

	}else{
		//decimal to binary

		decimalBinary();

	}
}


function switcher(){
	
	let checker = document.getElementById('checker').checked;

	if (checker){
		trigger_ = true;
		document.getElementById('textTitle').innerHTML = 'Binary To Decimal!'
	}else {
		trigger_ = false;
		document.getElementById('textTitle').innerHTML = 'Decimal To Binary!'
	}

	console.log(trigger_);
}