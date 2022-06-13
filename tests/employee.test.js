const Employee = require("../lib/employee");
const employee1 = new Employee("Will", "1", "williamliao1998@gmail.com");

describe("Employee", () => {
    describe("constructor", () => {
        test("the properties of the new object named employee1 matches expected properties", () => {
            expect(employee1.name).toBe("Will");
            expect(employee1.id).toBe("1");
            expect(employee1.email).toBe("williamliao1998@gmail.com");
        });
    })
    describe("getName", () => {
        test("if getName() returns the name of the employee", () => {
            expect(employee1.getName()).toBe("Will");
        })
    })
    describe("getId", () => {
        test("if getId() returns the ID of the employee", () => {
            expect(employee1.getId()).toBe("1");
        })
    })
    describe("getEmail", () => {
        test("if getEmail() returns the email of the employee", () => {
            expect(employee1.getEmail()).toBe("williamliao1998@gmail.com");
        })
    })
    describe("getRole", () => {
        test("if getRole() returns the role of the employee", () => {
            expect(employee1.getRole()).toBe("Employee");
        })
    })
})