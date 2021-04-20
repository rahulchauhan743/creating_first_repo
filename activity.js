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
console.log(input[0]);
let extFolderPath = folderPath;

function createfolder() {
    console.log(extFolderPath);
    fs.mkdirSync(extFolderPath);
}

function checkFolder(extension, folderPath) {
    for (let key in extensions) {
        let arr = extensions[key];
        //array.includes values array exist or not
        let eon = arr.includes(extension);
        if (eon == true) {
            // console.log(true);
            // console.log(key);
            extFolderPath = path.join(folderPath, key); // creates path for the extension which is founded
            //example .bmp was found in images so it created a path E:\pepcoding\New folder\Images
            // console.log(extFolderPath);
            break;
        }

    }
    return fs.existsSync(extFolderPath); //tell only that the folder is created or not

}

let content = fs.readdirSync(folderPath); //read the folder of which location is provided and tell its all content

for (let i = 0; i < content.length; i++) {
    // console.log(content[i]);// it gives the file name 
    //extensions
    // console.log(path.extname(content[i])) //it provides the extension of file which is provided to it
    let extensionname = path.extname(content[i]);
    let extensionfolderexist = checkFolder(extensionname, folderPath);
    // console.log(extensionfolderexist);
    if (extensionfolderexist == false) {
        createfolder();
        //file move kra dena iss folder k andar
    } else {
        //file move kra dena
    }

}