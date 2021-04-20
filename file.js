let fs = require('fs');

// let s = fs.readFileSync('sdf.txt');
// console.log(s); //gives me buffer value
// console.log(s.toString()); //read the file sdf.txt
// let sw = fs.readFileSync('sdfw.txt'); //will create an error as a file which is not present is tried to be read
// console.log(sw.toString());

// let wdata = "this is demo text which is to be written in file";
// fs.writeFileSync('sdf.txt', wdata);//will write the data in that file
// 
// let wdwata = "this is demo text which will override the text if a text is already present in that file";
// fs.writeFileSync('sdf.txt', wdwata);// if some data was already present in file so data to be written will replace it

// let appendedtext = "this is demo text which is to be appended at the end of earlier text present in the file"
// fs.appendFileSync('sdf.txt', appendedtext); // will add the text at the end of text present earlier in that file

// fs.unlinkSync('wer.txt'); //deletes the file whose location is provided

// let a = fs.existsSync('sdf.txt');
// console.log(a); //return true or false if a file exist or not

// fs.mkdirSync('wert'); //create a new directory or a new folder