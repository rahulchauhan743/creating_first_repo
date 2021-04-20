// file transfer activity
let fs = require('fs');
let path = require('path');


let extensions = {
    "Images": ['.png', '.jpg', '.jpeg', '.bmp'],
    'Audio': ['.mp3'],
    'Documents': ['.pdf', '.txt', '.doc'],
    'Compressed': ['.zip', '.rar'],
    'Videos': ['.mkv', '.mp4']
}

let input = process.argv.slice(2);
let folderPath = input[0];
// console.log(input[0]); //gives the folder path which we provide to it
let extfolderpath = folderPath;

function createfolder() {
    //printing the folder path which is to be created
    console.log(extfolderpath);
    // creates a folder of path extfolder
    fs.mkdirSync(extfolderpath);
}

function checkfolder(extensionname, folderPath) {
    for (let key in extensions) {
        let arr = extensions[key]; //gives all the array in the object extensions

        //array.includes values array exist or not
        let eon = arr.includes(extensionname);

        if (eon == true) {
            // console.log(extensionname); //gives the extension name of all the files present in acticity revision
            extfolderpath = path.join(folderPath, key);
            //join all the argument together and normalise the resulting path
            console.log(extfolderpath);
            break;
        }

    }
    return fs.existsSync(extfolderpath);
    //it will true or false which means the folder path is created but folder itself is not created

}



let foldercontent = fs.readdirSync(folderPath);
// console.log(foldercontent); //gives all the content which is present in the that folderpathand we pass the folder path not folder name

for (let i = 0; i < foldercontent.length; i++) {
    // console.log(foldercontent[i]); //it givees all file name in that folder

    let extensionname = path.extname(foldercontent[i]);
    // console.log(path.extname(foldercontent[i])); //gives the extension name of file which is provided to it

    let extensionfolderexist = checkfolder(extensionname, folderPath);
    // console.log(extensionfolderexist);
    if (extensionfolderexist == false) {
        //which means folder is not created 
        createfolder();

    } else {


    }






}