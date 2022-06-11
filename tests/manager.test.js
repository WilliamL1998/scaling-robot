const Manager = require("manager");
const manager1 = new Manager("Will", "1", "williamliao1998@gmail.com", "2");

describe("Engineer", () => {
    describe("constructor", () => {
        test("the properties of the new object named manager1", () => {
            expect(manager1.name).toBe("Will");
            expect(manager1.id).toBe("1");
            expect(manager1.email).toBe("williamliao1998@gmail.com");
            expect(manager1.officeNumber).toBe("2");
        });
    })
    describe("getName", () => {
        test("if getName() returns the name of the manager", () => {
            expect(manager1.getName()).toBe("Will");
        })
    })
    describe("getId", () => {
        test("if getId() returns the ID of the manager", () => {
            expect(manager1.getId()).toBe("1");
        })
    })
    describe("getEmail", () => {
        test("if getEmail() returns the email of the manager", () => {
            expect(manager1.getEmail()).toBe("williamliao1998@gmail.com");
        })
    })
    describe("getRole", () => {
        test("if getRole() returns the role of the manager", () => {
            expect(manager1.getRole()).toBe("Manager");
        })
    })
})