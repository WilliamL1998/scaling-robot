const Employee = require('./employee')
// Engineer is a subclass of Employee and uses "super" to use Employee's constructor for name, id, and email properties
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() { return this.github; }
    getRole() { return "Engineer"; }
}

module.exports = Engineer;