const Employee = require('./employee')
// Intern is a subclass of Employee and uses "super" to use Employee's constructor for name, id, and email properties
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() { return this.school; }
    getRole() { return "Intern"; }
}

module.exports = Intern;