var fs = require('fs');
var outfile = "hello.txt";
var output = "A startup is a business built to grow rapidly.\n";
fs.writeFileSync(outfile,output);
console.log("Script: "+__filename+"\nWrote: "+output+"To: "+outfile);
