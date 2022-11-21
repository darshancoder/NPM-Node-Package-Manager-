# NPM-Node-Package-Manager-
Learning Node Package Manger


## `QR Code Package Learn`
- qrcode -o name.png "Masai School"
- qrcode -o darshan.png "Darshan_Kale"
- qrcode -o google.png "www.google.com


# Day-2 NPM
- 1st Package We are Learning 
## [`inquirer`]
- If you want take input from terminal You Can use this labriray
- CMD [`npm install --save inquirer@`]
- const inquire = require('inquirer');
console.log("Welcome to my APP");
console.log("Please registr to contiune");
console.log("*********************************");

inquire
  .prompt([
    /* Pass your questions in here */
    {
        type:"input",
        messsage:"Enter the your username",
        name:"username"
    },
    {
        type:"password",
        messsage:"Enter the your password",
        name:"password"
    },
    {
        type:"password",
        messsage:"Retype your password",
        mask:"*",
        name:"confirmPassword"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log("answer",answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

- Ctrl `c` stop the Node server
### Start Server And end Server 
- "prestart": "echo Hello",
- "poststart":"echo Hey!",


## Creating Packge## Convert NPMJS
## `npm adduser`
- First login then use username\ password\email\and final OTP
- [EveryThing be okay to publish your package]
## `npm publish --access public`


## If I want update my code So first update version then update code
- <npm version 0.02>
- <npm publish>

## For `orginization` create` Private package `
