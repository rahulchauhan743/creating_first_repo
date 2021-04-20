 //activity 

 // wCat is a clone of cat command available in bash but not in windows cmd.

 // It is used to display or make a copy content of one or more files in the terminal

 // General Syntax:
 // node wcat - [options][files]
 // option to remove big line break (-s)
 // 
 // option to add line number to non empty lines(-b)
 // option to add line numbers to all lines(-n)

 // Commands:
 // 1 - node wcat.js filepath => displays content of the file in the terminal
 // 2 - node wcat.js filepath1 filepath2 filepath3... => displays content of all files in the terminal in (contactinated form) in the given order.
 // 3 - node wcat.js - s filepath => convert big line breaks into a singular line
 // break
 // 4 - node wcat - n filepath => give numbering to all the lines
 // 5 - node wcat - b filepath => give numbering to non - empty lines
 // We can mix and match the options.
 // Edge cases:
 // 1 - If file entered is not found then it gives file does not exist error.
 // 2 - -n and - b are 2 options which are mutually exclusive so
 // if user types both of them together only the first enter option should work.






 let fs = require('fs');
 //taking input
 let input = process.argv.slice(2);
 console.log("input", input);
 // creating array which will store options and filepaths
 let options = [];
 let filepaths = [];
 //if it was '-s' , '-b', '-n' then store in options array and if they were filepath store in filepath array
 for (let i = 0; i < input.length; i++) {
     if (input[i] == '-s' || input[i] == '-b' || input[i] == '-n') {
         options.push(input[i]);
     } else {
         filepaths.push(input[i]);
     }

 }

 // console.log("options", options);
 // console.log("filepaths", filepaths);

 //if filepaths file exist then do nothing if not exist then print "does not exist"
 for (let i = 0; i < filepaths.length; i++) {

     let isfilepresent = fs.existsSync(filepaths[i]);

     if (isfilepresent == false) {
         console.log("filepath", filepaths[i], "does not exist");
         return;
     }

 }

 // reading file content
 let totalcontent = "";
 for (let i = 0; i < filepaths.length; i++) {
     let contentofcurrent = fs.readFileSync(filepaths[i]);
     totalcontent += contentofcurrent + '\r\n';

 }
 // console.log(totalcontent);

 //-s option implement

 let issoption = options.includes("-s");
 if (issoption == true) {
     //split on the basis of line break
     let contentarr = totalcontent.split("\r\n");
     // console.log(contentarr);
     let temparr = [];
     //identify and remove empty line break
     for (let i = 0; i < contentarr.length; i++) {
         if (contentarr[i] !== "") {
             temparr.push(contentarr[i]);
         }
     }
     totalcontent = temparr.join("\r\n");
 }


 console.log(totalcontent);




 let isnoption = options.includes("-n");
 let isboption = options.includes("-b");
 let finaloption;
 if (isnoption == true) {
     if (isboption == true) {
         //the option which comes first->will be executed first
         let idxb = options.indexOf("-b");
         let idxn = options.indexOf("-n");
         // agar b ka index small so vo execute hoga phele
         finaloption = idxb < idxn ? "-b" : "-n";


     } else { //isnoption==true
         finaloption = "-n";
     }
 } else if (isboption == true) {
     finaloption = "-b";
 }


 //-n option implement
 if (finaloption == "-n") {
     let count = 1;
     let contentarr = totalcontent.split("\r\n");
     for (let i = 0; i < contentarr.length; i++) {
         contentarr[i] = count + "." + contentarr[i];
         count++;
     }

     totalcontent = contentarr.join("\r\n"); //add all element of array in string
 }
 console.log(totalcontent);


 // -b option implement

 if (finaloption == "-b") {
     let count = 1;
     let contentarr = totalcontent.split("\r\n");
     for (let i = 0; i < contentarr.length; i++) {
         if (contentarr[i] !== "") {
             contentarr[i] = count + "." + contentarr[i];
             count++;
         }

     }
     totalcontent = contentarr.join("\r\n");


 }
 console.log(totalcontent);