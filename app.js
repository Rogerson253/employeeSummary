const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```

// Array holding role information
let arr = [];

// Function that generates questions in terminal
function questions() {
inquirer
  .prompt([
    {
        type: "input",
        message: "What is your name?",
        name: "name"
      },
      {
        type: "number",
        message: "What is your id?",
        name: "id"
      },
      {
        type: "input",
        message: "What is your email?",
        name: "email"
      },
      {
        type: "checkbox",
        message: "What is your role?",
        name: "role",
        choices: [
          "Manager",
          "Engineer",
          "Intern"
        ]
      },
  ])
  .then(function(answers) {
    
    // Asks manager specific question
      if (answers.role[0] === "Manager") {
        inquirer
          .prompt({
            type: "number",
            message: "What is your office number?",
            name: "number",
          })
          .then(function(manAnswer) {
            const newManager = new Manager(answers.name, answers.id, answers.email, manAnswer.number);

            arr.push(newManager);
      
            fs.writeFile(outputPath, render(arr), function(err) {
                if (err) {
                  return console.log(err);
                }
            })
            
            inquirer
              .prompt({
                type: "confirm",
                message: "Would you like to add another employee?",
                name: "add",
              })
              .then(function(addEmployee) {
                if (addEmployee.add) {
                  return questions();
                }
                else {
                  console.log("All employees added!")
                }
              })
        })
      }
      // Asks engineer specific question
      else if (answers.role[0] === 'Engineer') {
        inquirer
          .prompt({
            type: "input",
            message: "What is your github name?",
            name: "github",
          })
          .then(function(engAnswer) {
            const newEngineer = new Engineer(answers.name, answers.id, answers.email, engAnswer.github);

            arr.push(newEngineer);
          
                fs.writeFile(outputPath, render(arr), function(err) {
                    if (err) {
                      return console.log(err);
                    }
                })
             
              inquirer
                .prompt({
                  type: "confirm",
                  message: "Would you like to add another employee?",
                  name: "add",
                })
                .then(function(addEmployee) {
                  if (addEmployee.add) {
                    return questions();
                  }
                  else {
                    console.log("All employees added!")
                  }
                })
        })
      }
      // Asks intern specific question
      else if (answers.role[0] === 'Intern') {
        inquirer
        .prompt({
          type: "input",
          message: "What school did you attend?",
          name: "school",
        })
        .then(function(intAnswer) {
          const newIntern = new Intern(answers.name, answers.id, answers.email, intAnswer.school);

          arr.push(newIntern);
        
              fs.writeFile(outputPath, render(arr), function(err) {
                  if (err) {
                    return console.log(err);
                  }
              })
              
              inquirer
                .prompt({
                  type: "confirm",
                  message: "Would you like to add another employee?",
                  name: "add",
                })
                .then(function(addEmployee) {
                  if (addEmployee.add) {
                    return questions();
                  }
                  else {
                    console.log("All employees added!")
                  }
                })
        })
      }
  })
  .catch(error => {
    if(error) {
      console.log(error)
    } 
  });
}

questions();
