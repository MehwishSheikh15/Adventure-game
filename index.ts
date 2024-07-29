import inquirer from "inquirer";
import chalk from "chalk";

class Player{
    name:string;
    fuel:number = 100;
    constructor(name:string){
        this.name = name;
        
    }
    fuelDecrease(){
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease(){
        this.fuel = 100;
        
    }
    
}
class Opponent{
    name:string;
    fuel:number = 100;
    constructor(name:string){
        this.name = name;
        
    }
    fuelDecrease(){
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}


let player = await inquirer.prompt({
    type:"input",
    name:"name",
    message:"Please Enter Your Name:"
}
)
console.log(chalk.green.bold.italic(`Welcome ${player.name}`));


let opponent = await inquirer.prompt({
    type:"list",
    name:"select",
    message:"Select Your Opponent",
    choices:["Skeleton","Assassin","Zombie"]
})
console.log(chalk.green.bold.italic(`${player.name} VS ${opponent.select}`));


let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do{
    if (opponent.select == "Skeleton") {
    console.log(`${chalk.bold.blue(p1.name)} vs ${chalk.bold.red(o1.name)}`);
    let ask = await inquirer.prompt({
     type:"list",
     name:"opt",
     message:"Select Any Option",
     choices:["Attack","Drink Portion","Run For Your Life"]
    });
    if (ask.opt == "Attack") {
     console.log("You Attack The Opponent");
     let number = Math.floor(Math.random()*2);
     if (number > 0) {
         p1.fuelDecrease();
         console.log(chalk.bold.green(`${p1.name} Fuel is ${p1.fuel}`));
         console.log(chalk.bold.red(`${o1.name} Fuel is ${o1.fuel}`));
         if (p1.fuel <= 0) {
             console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
         }
     }
     if (number <= 0) {
         o1.fuelDecrease();
         console.log(chalk.bold.green(`${p1.name} Fuel is ${p1.fuel}`));
         console.log(chalk.bold.red(`${o1.name} Fuel is ${o1.fuel}`));
     }
     if (o1.fuel <= 0) {
         console.log(chalk.green.bold.italic("Hurrah! You Win"));
         process.exit();
     }
     
 }
    if (ask.opt == "Drink Portion") {
     console.log("You Drink Portion");
     p1.fuelIncrease();
     console.log(chalk.bold.italic.green(`${p1.name} Drink Health Portion Your Fuel is ${p1.fuel}`));
 }
    if (ask.opt == "Run For Your Life") {
     console.log(chalk.red.bold.italic("You Loose,Better Luck Next Time"));
 }
 }
 if (opponent.select == "Assassin") {
    console.log(`${chalk.bold.blue(p1.name)} vs ${chalk.bold.red(o1.name)}`);
    let ask = await inquirer.prompt({
     type:"list",
     name:"opt",
     message:"Select Any Option",
     choices:["Attack","Drink Portion","Run For Your Life"]
    });
    if (ask.opt == "Attack") {
     console.log("You Attack The Opponent");
     let number = Math.floor(Math.random()*2);
     if (number > 0) {
         p1.fuelDecrease();
         console.log(chalk.bold.green(`${p1.name} Fuel is ${p1.fuel}`));
         console.log(chalk.bold.red(`${o1.name} Fuel is ${o1.fuel}`));
         if (p1.fuel <= 0) {
             console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
         }
     }
     if (number <= 0) {
         o1.fuelDecrease();
         console.log(chalk.bold.green(`${p1.name} Fuel is ${p1.fuel}`));
         console.log(chalk.bold.red(`${o1.name} Fuel is ${o1.fuel}`));
     }
     if (o1.fuel <= 0) {
         console.log(chalk.green.bold.italic("Hurrah! You Win"));
         process.exit();
     }
     
 }
    if (ask.opt == "Drink Portion") {
     console.log("You Drink Portion");
     p1.fuelIncrease();
     console.log(chalk.bold.italic.green(`${p1.name} Drink Health Portion Your Fuel is ${p1.fuel}`));
 }
    if (ask.opt == "Run For Your Life") {
     console.log(chalk.red.bold.italic("You Loose,Better Luck Next Time"));
 }
 }
 if (opponent.select == "Zombie") {
    console.log(`${chalk.bold.blue(p1.name)} vs ${chalk.bold.red(o1.name)}`);
    let ask = await inquirer.prompt({
     type:"list",
     name:"opt",
     message:"Select Any Option",
     choices:["Attack","Drink Portion","Run For Your Life"]
    });
    if (ask.opt == "Attack") {
     console.log("You Attack The Opponent");
     let number = Math.floor(Math.random()*2);
     if (number > 0) {
         p1.fuelDecrease();
         console.log(chalk.bold.green(`${p1.name} Fuel is ${p1.fuel}`));
         console.log(chalk.bold.red(`${o1.name} Fuel is ${o1.fuel}`));
         if (p1.fuel <= 0) {
             console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
         }
     }
     if (number <= 0) {
         o1.fuelDecrease();
         console.log(chalk.bold.green(`${p1.name} Fuel is ${p1.fuel}`));
         console.log(chalk.bold.red(`${o1.name} Fuel is ${o1.fuel}`));
     }
     if (o1.fuel <= 0) {
         console.log(chalk.green.bold.italic("Hurrah! You Win"));
         process.exit();
     }
     
 }
    if (ask.opt == "Drink Portion") {
     console.log("You Drink Portion");
     p1.fuelIncrease();
     console.log(chalk.bold.italic.green(`${p1.name} Drink Health Portion Your Fuel is ${p1.fuel}`));
 }
    if (ask.opt == "Run For Your Life") {
     console.log(chalk.red.bold.italic("You Loose,Better Luck Next Time"));
 }
 }
}
while (true);

