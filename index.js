#! /usr/bin/env node
import inquirer from "inquirer";
let todolist = [];
let condition = true;
while (condition) {
    let answertodo = await inquirer.prompt([
        {
            message: "What do you like to add in your to do list ?",
            type: "input",
            name: "firstQuestion",
        },
        {
            message: "Would you like to add more in your to do list ?",
            type: "confirm",
            name: "secondQuestion",
            default: "true",
        },
    ]);
    todolist.push(answertodo.firstQuestion);
    console.log(todolist);
    condition = answertodo.secondQuestion;
}
