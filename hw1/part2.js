// Test if a number is prime or not
function testPrimality(num){
	var isPrime = true;
	
	// even number can't be prime except 2
	if(num%2==0){
		isPrime=false;
	}else{	//test primality
		for(var i=2;i<num;i++){
			if(num%i==0){
				isPrime = false;
			}
		}
	}
	return isPrime;
}

/**
* Do the main task, i.e., output the first 100 prime numbers
**/
var primeNum=0;		// the current number of prime being output
var testNumber=3; 	// the first number to be test
var outputString="2";	// initial the first prime is 2
while(primeNum<99){
	if(testPrimality(testNumber)==true){
		primeNum++;	// we got a prime number
		outputString += ","+testNumber;
	}
	testNumber++;
}
// console.log(outputString); // output to console for testing
var fs=require('fs');
var outfile="primes.txt";
fs.writeFileSync(outfile,outputString+"\n");

