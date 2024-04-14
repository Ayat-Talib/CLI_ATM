#! \usr\bin\env node
import inquirer from "inquirer";
let Current_balance = 10000;
console.log("Your Current Balance is: ", Current_balance);
let mypin = 22331;
let answer = await inquirer.prompt({
    name: "Pin_code",
    type: "input",
    message: "Enter Your Pin code"
});
if (answer.Pin_code == mypin) {
    console.log("\n Authentification Sucessfull!! \n ");
    let answer1 = await inquirer.prompt({
        name: "operation",
        type: "list",
        message: "What operation do you want to do: ",
        choices: ["withdraw", "Check balance"],
    });
    const selected_operation = answer1.operation;
    if (selected_operation == "withdraw") {
        let answer2 = await inquirer.prompt({
            name: "Amount",
            type: "list",
            message: "Enter amount to withdraw: ",
            choices: ["500", "1000", "2000", "5000", "10000"],
        });
        if (answer2.Amount <= Current_balance) {
            Current_balance = Current_balance - answer2.Amount;
            console.log("After withdraw, your Current amount is:", Current_balance);
        }
        else if (answer2.Amount > Current_balance) {
            console.log("Please Enter a Sufficient Amount.");
        }
    }
    else {
        console.log("Your Current Balance is :", Current_balance);
    }
}
else {
    console.log("You Entered the wrong PIN Code!!");
}
