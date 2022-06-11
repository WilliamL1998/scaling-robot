const Intern = require("../lib/intern");
const intern1 = new Intern("Will", "1", "williamliao1998@gmail.com", "UofT");

describe("Engineer", () => {
    describe("constructor", () => {
        test("the properties of the new object named intern1", () => {
            expect(intern1.name).toBe("Will");
            expect(intern1.id).toBe("1");
            expect(intern1.email).toBe("williamliao1998@gmail.com");
            expect(intern1.school).toBe("UofT");
        });
    })
    describe("getName", () => {
        test("if getName() returns the name of the intern", () => {
            expect(intern1.getName()).toBe("Will");
        })
    })
    describe("getId", () => {
        test("if getId() returns the ID of the intern", () => {
            expect(intern1.getId()).toBe("1");
        })
    })
    describe("getEmail", () => {
        test("if getEmail() returns the email of the intern", () => {
            expect(intern1.getEmail()).toBe("williamliao1998@gmail.com");
        })
    })
    describe("getSchool", () => {
        test("if getSchool() returns the school of the intern", () => {
            expect(intern1.getSchool()).toBe("UofT");
        })
    })
    describe("getRole", () => {
        test("if getRole() returns the role of the intern", () => {
            expect(intern1.getRole()).toBe("Intern");
        })
    })
})