// we will be creating a file system organiser
//features of the project


// let firstNumber=process.argv[2]
// let secondNumber=process.argv[3]
// console.log(Number(firstNumber)+Number(secondNumber))
const fs = require('fs');

const path = require('path')

const organizewalifile =require('./commands/organize')
let inputArr = process.argv.slice(2)
let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
    documents: [
        "docx",
        "doc",
        "pdf",
        "xlsx",
        "xls",
        "odt",
        "ods",
        "odp",
        "odg",
        "odf",
        "txt",
        "ps",
        "tex",
    ],
    app: ["exe", "dmg", "pkg", "deb"],
};


// console.log(inputArr)
let command = inputArr[0]
// console.log(inputArr)

switch (command) {
    case "tree":
        console.log("tree command will be executed");
        break;
    case "organize":
        organizewalifile.organizeFnkey(inputArr[1]);
        break;
    case "help":
        console.log("help command will be executed");
        break;
    default:
        console.log("NO command will be executed")
        break;
}




