const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const generateHtml = require('./dist/generateHtml');
const teamMate = [];

function buildTeam() {
  console.log(
    "Welcome to our team profile generator! Please follow these instuctions:"
  );
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter a name for the manager",
        name: "name",
      },
      {
        type: "input",
        message: "Enter a ID number for the manager",
        name: "id",
      },
      {
        type: "input",
        message: "Enter an email for the manager",
        name: "email",
      },
      {
        type: "input",
        message: "Enter a phone number for a manager",
        name: "officeNumber",
      },
    ])
    .then((data) => {
      let { name, id, email, officeNumber } = data;
      let manager = new Manager(name, id, email, officeNumber);
      teamMate.push(manager);
      askForNextAction();
    });
}
function askForNextAction() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "next",
        message: "Who would you like to add next?",
        choices: ["Engineer", "Intern", "Team complete"],
      },
    ])
    .then((data) => {
      statement = data.next;
      switch (statement) {
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();

          break;
        case "Team complete":
          addTeam();
          break;
      }
    });
}
function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter in a name for an engineer:",
        name: "name",
      },
      {
        type: "input",
        message: "enter an ID number for the engineer",
        name: "id",
      },
      {
        type: "input",
        message: "enter an email for the engineer",
        name: "email",
      },
      {
        type: "input",
        message: "enter a gitHub username for the engineer",
        name: "github",
      },
    ])
    .then((data) => {
      let { name, id, email, github } = data;
      let engineer = new Engineer(name, id, email, github);
      teamMate.push(engineer);
      askForNextAction();
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter in a name for an intern:",
        name: "name",
      },
      {
        type: "input",
        message: "enter an ID number for the intern",
        name: "id",
      },
      {
        type: "input",
        message: "enter an email for the intern",
        name: "email",
      },
      {
        type: "input",
        message: "enter a school for the intern",
        name: "school",
      },
    ])
    .then((data) => {
      let { name, id, email, school } = data;
      let intern = new Intern(name, id, email, school);
      teamMate.push(intern);

    });
}

function addTeam() {

 fs.writeFileSync("test.html", generateHtml(teamMate)) 
  .then(() => console.log("HTML has been generated."))
  .catch((err) => console.error(err))
}

buildTeam();

// TODO: Saving this for later:
// async function askForManagerInfo() {

//     try {

//     const data = await inquirer
//     .prompt
//     (questionsMan)
//          console.log(data);

//         employees.push( new Manager(data)
//         )

//         menu();

//     }
//     catch (error) {
//         console.log(error);
//     }
// }
