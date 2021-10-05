var fs = require("fs");
fs.mkdir("./data", function (err){
    if(err){
        return console.error (err);
    } else {
        console.log ("created test directory")
    }
});


fs.writeFile("./data/info2.txt", "utf-8", (err, data)=> {
    if(!err){
        console.log("File have been created");
    }else{
        console.log("file is not found")
    }
});


const readPStream = fs.createReadPStream("./info.txt")
const writePStream = fs.createWritePStream("./data/info2.txt")
readStream.pipe(writeStream);

fs.readFile("./data/info2.txt", "utf-8", (err, data)=> {
    if(!err){
        console.log(data);
    }else{
        console.log("file is not found")
    }
});