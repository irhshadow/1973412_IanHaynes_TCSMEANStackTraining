function makePost(){
    const prompt = require("prompt-sync")({ sigint: true});
    const fs = require("fs");

    let firstName = prompt("What is your first name? ");
    let lastName = prompt("What is your last name? ");
    let gender = prompt("What is your gender? ");
    let email = prompt("What is your email? ");
    let time = new Date();
    let day = time.getDay();
    let month = time.getMonth();
    let year = time.getFullYear();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    const timeStamp = month + "/" + day + "/" + year + " " + hours + ":" + minutes;
    debugger;

    let entry = {
        firstName,
        lastName,
        gender,
        email,
        timeStamp,
    }

    try{
        let entries = JSON.parse(fs.readFileSync("records.json"));
        entries.push(entry);
        fs.writeFileSync("records.json", JSON.stringify(entries));
        debugger;
    }catch(err){
        console.log(err);
        let entries = new Array();
        entries.push(entry);
        fs.writeFileSync("records.json", JSON.stringify(entries));
        debugger;
}

}

exports.makePost = makePost();