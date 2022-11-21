const inquire = require("inquirer");
console.log("Welcome to my APP");
console.log("Please registr to contiune");
console.log("*********************************");

inquire
  .prompt([
    /* Pass your questions in here */
    {
      type: "input",
      messsage: "Enter the your username",
      name: "username",
    },
    {
      type: "password",
      messsage: "Enter the your password",
      name: "password",
    },
    {
      type: "password",
      messsage: "Retype your password",
      mask: "*",
      name: "confirmPassword",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log("answer", answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
