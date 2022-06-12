const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const fs = require("fs");
var team = [];
const build = require("./src/build");

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
            team.push(manager);
            promptMenu();
        })
}

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
            team.push(engineer);
            promptMenu();
        })
}

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
            team.push(intern)
            promptMenu();
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
                    promptEngineer();
                    break;
                case "Add an intern":
                    promptIntern();
                    break;
                case "Finish building my team":
                    console.log(team)
                    buildHtml();
                    break;
            }
        })
}

const buildHtml = () => {
    fs.writeFile("test.html", build(team), (err) =>
    err ? console.error(err) : console.log('Success!'))
}




promptManager()