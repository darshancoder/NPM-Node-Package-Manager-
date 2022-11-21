const inquire = require("inquirer");
console.log("Welcome to Pizza APp");
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
  .then((userDetails) => {
    // Use user feedback for... whatever!!
    console.log("Welcome Back", userDetails.username);

    inquire
      .prompt([
        {
          type: "Confirm",
          name: "forDelivery",
          messsage: "Do you want the pizza to be delivered ?",
          default: true,
        },
        {
          type: "input",
          name: "phone",
          messsage: "What is your phone number ?",
          validate(value) {
            const pass = value.length === 10;
            if (pass) {
              return true;
            }
            return "Please Enter a valid phone number!";
          },
        },
        {
          type: "input",
          name: "Qty",
          messsage: "How Many Pizzas do you need?",
          validate(value) {
            const valid = !isNaN(parseInt(value));
            return valid || "Please enter a Number";
          },
          filter(value) {
            return parseInt(value);
          },
        },
        {
          type: "list",
          name: "toppings",
          messsage: "Please select your pizza topping",
          choices: ["Panner", "Chizz", "Corn and Cheese"],
        },
        {
          type: "list",
          name: "size",
          messsage: "Please select your pizaa Size?",
          choices: ["L", "M", "S"],
        },
      ])
      .then((answers) => {
        console.log("Order details are:");
        console.log(answers);
        console.log("username", userDetails.username);
      });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
