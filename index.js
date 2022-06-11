const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const fs = require("fs");
var employeeData = []


const promptEmployee = () => {
    employeeData = []
    inquirer
        .prompt([
            {
                type: "input",
                message: "Please enter the employee's name. (Required)",
                name: "name",
                validate: (name) => {
                    if (name) {
                        return true;
                    } else {
                        console.log("Please enter the employee's name!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                message: "Please enter the employee's ID. (Required)",
                name: "id",
                validate: (id) => {
                    if (id) {
                        return true;
                    } else {
                        console.log("Please enter the employee's ID!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                message: "Please enter the employee's email address. (Required)",
                name: "email",
                validate: (email) => {
                    if (email) {
                        return true;
                    } else {
                        console.log("Please enter the employee's email address!");
                        return false;
                    }
                }
            }
        ])
        .then(answers => {
            return answers
        })
}

const promptManager = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Please enter the employee's office number. (Required)",
                name: "officeNumber",
                validate: (officeNumber) => {
                    if (officeNumber) {
                        return true;
                    } else {
                        console.log("Please enter the employee's office number!");
                        return false;
                    }
                }
            }
        ])
        .then(answers => {
            const manager = new Manager(employeeData.name, employeeData.id, employeeData.email, answers.officeNumber)
            console.log(`Hello manager ${manager.name}.`);
            promptMenu();
        })
}

const promptEngineer = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Please enter the employee's GitHub username. (Required)",
                name: "github",
                validate: (github) => {
                    if (github) {
                        return true;
                    } else {
                        console.log("Please enter the employee's GitHub username!");
                        return false;
                    }
                }
            }
        ])
        .then(answers => {
            const engineer = new Engineer(employeeData.name, employeeData.id, employeeData.email, answers.github)
            console.log(`Engineer ${engineer.name} has been added to your team.`)
        })
}

const promptIntern = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Please enter the employee's school. (Required)",
                name: "school",
                validate: (school) => {
                    if (school) {
                        return true;
                    } else {
                        console.log("Please enter the employee's school!");
                        return false;
                    }
                }
            }
        ])
        .then(answers => {
            const intern = new Intern(employeeData.name, employeeData.id, employeeData.email, answers.school)
            console.log(`Intern ${intern.name} has been added to your team.`)
        })
}

const promptMenu = () => {
    inquirer
        .prompt([
            {
                type: "list",
                message: "How would you like to continue?",
                choices: ["Add an engineer", "Add an intern", "Finish building my team"],
                name: "menu",
            }
        ])
        .then(answers => {
            switch (answers.menu) {
                case "Add an engineer":
                    promptEmployee();
                    promptEngineer();
                    break;
                case "Add an intern":
                    promptEmployee();
                    promptIntern();
                    break;
                case "Finish building my team":
                    build();
                    break;
            }
        })
}