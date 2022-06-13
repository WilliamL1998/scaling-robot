const Engineer = require("../lib/engineer");
const engineer1 = new Engineer("Will", "1", "williamliao1998@gmail.com", "WilliamL1998");

describe("Engineer", () => {
    describe("constructor", () => {
        test("the properties of the new object named engineer1 matches expected properties", () => {
            expect(engineer1.name).toBe("Will");
            expect(engineer1.id).toBe("1");
            expect(engineer1.email).toBe("williamliao1998@gmail.com");
            expect(engineer1.github).toBe("WilliamL1998");
        });
    })
    describe("getName", () => {
        test("if getName() returns the name of the engineer", () => {
            expect(engineer1.getName()).toBe("Will");
        })
    })
    describe("getId", () => {
        test("if getId() returns the ID of the engineer", () => {
            expect(engineer1.getId()).toBe("1");
        })
    })
    describe("getEmail", () => {
        test("if getEmail() returns the email of the engineer", () => {
            expect(engineer1.getEmail()).toBe("williamliao1998@gmail.com");
        })
    })
    describe("getGithub", () => {
        test("if getGithub() returns the GitHub of the engineer", () => {
            expect(engineer1.getGithub()).toBe("WilliamL1998");
        })
    })
    describe("getRole", () => {
        test("if getRole() returns the role of the engineer", () => {
            expect(engineer1.getRole()).toBe("Engineer");
        })
    })
})