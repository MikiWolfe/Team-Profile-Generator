const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const generateHtml = require('./src/generateHtml');
const console = require("console");
const teamMate = [];

function buildTeam() {
  console.log(
    "Welcome to our team profile generator! Please follow these instuctions:"
  );
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter the name of the manager:",
        name: "name",
      },
      {
        type: "input",
        message: "Enter a ID number for the manager:",
        name: "id",
      },
      {
        type: "input",
        message: "Enter an email for the manager:",
        name: "email",
      },
      {
        type: "input",
        message: "Enter the office phone number of the manager:",
        name: "officeNumber",
      },
    ])
    .then((data) => {
      let {name, id, email, officeNumber} = data;
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
        message: "Enter the name of the engineer:",
        name: "name",
      },
      {
        type: "input",
        message: "Enter an ID number for the engineer:",
        name: "id",
      },
      {
        type: "input",
        message: "Enter an email for the engineer:",
        name: "email",
      },
      {
        type: "input",
        message: "Enter a gitHub username for the engineer:",
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
        message: "Enter the name of the intern:",
        name: "name",
      },
      {
        type: "input",
        message: "Enter an ID number for the intern:",
        name: "id",
      },
      {
        type: "input",
        message: "Enter an email for the intern:",
        name: "email",
      },
      {
        type: "input",
        message: "Enter a school for the intern:",
        name: "school",
      },
    ])
    .then((data) => {
      let { name, id, email, school } = data;
      let intern = new Intern(name, id, email, school);
      teamMate.push(intern);
      askForNextAction();
    });
}
buildTeam();

function addTeam() {

 fs.writeFileSync("test.html", generateHtml(teamMate))
  
  
}


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
