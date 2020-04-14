// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return "Engineer"
    }
    getGithub() {
        return this.github
    }
}

const engineer = new Engineer("Barry", 120, "crazy@fakemail.com", "@stranger");
engineer.getName();
engineer.getId();
engineer.getEmail();
engineer.getRole();
engineer.getGithub();

module.exports = Engineer;