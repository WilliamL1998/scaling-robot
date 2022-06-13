const Employee = require('./employee')
// Manager is a subclass of Employee and uses "super" to use Employee's constructor for name, id, and email properties
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() { return "Manager"; }
}

module.exports = Manager;