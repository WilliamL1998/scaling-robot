// Import classes, inquirer, helper code, and file system
const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const fs = require("fs");
const build = require("./src/build");

// global array to store the manager, engineer, and intern objects
var team = [];

// inquirer prompts for the manager
const promptManager = () => {
    team = [];
    inquirer
        .prompt([
            {
                type: "input",
                message: "Please enter the manager's name. (Required)",
                name: "name",
                validate: (name) => {
                    if (name) {
                        return true;
                    } else {
                        console.log("Please enter the manager's name!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                message: "Please enter the manager's ID. (Required)",
                name: "id",
                validate: (id) => {
                    if (id) {
                        return true;
                    } else {
                        console.log("Please enter the manager's ID!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                message: "Please enter the manager's email address. (Required)",
                name: "email",
                validate: (email) => {
                    if (email) {
                        return true;
                    } else {
                        console.log("Please enter the manager's email address!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                message: "Please enter the manager's office number. (Required)",
                name: "officeNumber",
                validate: (officeNumber) => {
                    if (officeNumber) {
                        return true;
                    } else {
                        console.log("Please enter the manager's office number!");
                        return false;
                    }
                }
            }
        ])
        .then(answers => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
            console.log(`Hello manager ${manager.name}.`);
            // pushes the manager object to the global array and starts the menu prompt
            team.push(manager);
            promptMenu();
        })
}

// inquirer prompts for the engineer
const promptEngineer = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Please enter the engineer's name. (Required)",
                name: "name",
                validate: (name) => {
                    if (name) {
                        return true;
                    } else {
                        console.log("Please enter the engineer's name!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                message: "Please enter the engineer's ID. (Required)",
                name: "id",
                validate: (id) => {
                    if (id) {
                        return true;
                    } else {
                        console.log("Please enter the engineer's ID!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                message: "Please enter the engineer's email address. (Required)",
                name: "email",
                validate: (email) => {
                    if (email) {
                        return true;
                    } else {
                        console.log("Please enter the engineer's email address!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                message: "Please enter the engineer's GitHub username. (Required)",
                name: "github",
                validate: (github) => {
                    if (github) {
                        return true;
                    } else {
                        console.log("Please enter the engineer's GitHub username!");
                        return false;
                    }
                }
            }
        ])
        .then(answers => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            console.log(`Engineer ${engineer.name} has been added to your team.`);
            // pushes the engineer object to the global array and starts the menu prompt
            team.push(engineer);
            promptMenu();
        })
}

// inquirer prompts for the intern
const promptIntern = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Please enter the intern's name. (Required)",
                name: "name",
                validate: (name) => {
                    if (name) {
                        return true;
                    } else {
                        console.log("Please enter the intern's name!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                message: "Please enter the intern's ID. (Required)",
                name: "id",
                validate: (id) => {
                    if (id) {
                        return true;
                    } else {
                        console.log("Please enter the intern's ID!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                message: "Please enter the intern's email address. (Required)",
                name: "email",
                validate: (email) => {
                    if (email) {
                        return true;
                    } else {
                        console.log("Please enter the intern's email address!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                message: "Please enter the intern's school. (Required)",
                name: "school",
                validate: (school) => {
                    if (school) {
                        return true;
                    } else {
                        console.log("Please enter the intern's school!");
                        return false;
                    }
                }
            }
        ])
        .then(answers => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
            console.log(`Intern ${intern.name} has been added to your team.`)
            // pushes the intern object to the global array and starts the menu prompt
            team.push(intern)
            promptMenu();
        })
}

// inquirer prompts of a menu for the manager to choose
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
            // switch cases to either loop back to adding an engineer or an intern, otherwise build the html
            switch (answers.menu) {
                case "Add an engineer":
                    promptEngineer();
                    break;
                case "Add an intern":
                    promptIntern();
                    break;
                case "Finish building my team":
                    buildHtml();
                    break;
            }
        })
}

// uses the imported helper code "build()" to generate the data to make the team html
const buildHtml = () => {
    fs.writeFile("./dist/team.html", build(team), (err) =>
    err ? console.error(err) : console.log('Success!'))
}



// the manager prompts initiates it all
promptManager()