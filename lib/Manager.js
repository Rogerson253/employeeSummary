// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
       super(name, id, email);
       this.officeNumber = officeNumber;
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
        return "Manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

const manager = new Manager("Sarina", 1, "kongaroo@fakemail.com", "615-209-7207");
manager.getName();
manager.getId();
manager.getEmail();
manager.getRole();
manager.getOfficeNumber();

module.exports = Manager;