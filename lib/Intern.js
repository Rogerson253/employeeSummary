// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
      super(name, id, email)
      this.school = school;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.school;
    }
}

const intern = new Intern("Brent", 25, "brentasaurus@fakemail.com", "School of Brent");
intern.getName();
intern.getId();
intern.getEmail();
intern.getRole();
intern.getSchool();

module.exports = Intern;