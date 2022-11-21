const { Command } = require('commander');
const program = new Command();

program.version('0.0.1')

// program.argument("<username>","user login details")
// .argument("[password]","password for user , if needed","default")
// .action(function(username,password){
//     console.log("username",username);
//     console.log("password",password);
// })

program.argument("<name>","name to print")
.argument("[number]","number of times to print",1)
.action(function(name,number){
    number = Number(number)
    for(var i=0; i<number;i++){
        console.log(name);
    }
})

// program
//   .option('-d, --debug', 'output extra debugging')
//   .option('-s, --small', 'small pizza size')
//   .option('-p, --pizza-type <type>', 'flavour of pizza');

program.parse(process.argv);

// const options = program.opts();
// if (options.debug) console.log(options);
// console.log('pizza details:');
// if (options.small) console.log('- small pizza size');
// if (options.pizzaType) console.log(`- ${options.pizzaType}`);

// const QRCode = require("qrcode")


// QRCode.toDataURL('I am a pony!', function (err, url) {
//     console.log(url)
//   })

// QRCode.toString('I am a Darshan!',{type:'terminal'}, function (err, url) {
//     console.log(url)
//   })