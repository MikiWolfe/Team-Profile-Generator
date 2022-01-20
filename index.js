const inquirer = require("inquirer");
const fs = require("fs");
const path = require('path');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHtml = require('./src/generateHtml');
const { match } = require("assert");

let output = path.resolve(__dirname, "dist", "team.html")
const teamMates = [];

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
        validate: async (input) => {
          if (input == "" || (/[0-9]/g).test(input)){
            return "Please enter a valid name"
          }
          return true
        }
      },
      {
        type: "input",
        message: "Enter a ID number for the manager:",
        name: "id",
        validate: async (input) => {
          if (input == ""){
            return "Please enter a valid id"
      }  return true
    }
  },
      {
        type: "input",
        message: "Enter an email for the manager:",
        name: "email",
      validate: async (input) => {
        if (input == ""){
          return "Please enter a valid email"
    }  return true
  }
      },
      {
        type: "input",
        message: "Enter the office phone number of the manager:",
        name: "officeNumber",
        validate: async (input) => {
          if (input == ""|| (/[^0-9]/g).test(input)){
            return "Please enter a valid phone number"
      }  return true
    }
      },
    ])
    .then((data) => {
      let {name, id, email, officeNumber} = data;
      let manager = new Manager(name, id, email, officeNumber);
      teamMates.push(manager);
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
        validate: async (input) => {
          if (input == "" || (/[0-9]/g).test(input)){
            return "Please enter a valid name"
          }
          return true
        }
      },
      {
        type: "input",
        message: "Enter an ID number for the engineer:",
        name: "id",
        validate: async (input) => {
          if (input == ""){
            return "Please enter a valid id"
      }  return true
    }
      },
      {
        type: "input",
        message: "Enter an email for the engineer:",
        name: "email",
        validate: async (input) => {
          if (input == ""){
            return "Please enter a valid email"
      }  return true
    }
        
      },
      {
        type: "input",
        message: "Enter a gitHub username for the engineer:",
        name: "github",
        validate: async (input) => {
          if (input == ""){
            return "Please enter a valid gitHub"
      }  return true
    }
      },
    ])
    .then((data) => {
      let { name, id, email, github } = data;
      let engineer = new Engineer(name, id, email, github);
      teamMates.push(engineer);
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
        validate: async (input) => {
          if (input == "" || (/[0-9]/g).test(input)){
            return "Please enter a valid name"
          }
          return true
        }
      },
      {
        type: "input",
        message: "Enter an ID number for the intern:",
        name: "id",
        validate: async (input) => {
          if (input == ""){
            return "Please enter a valid id"
      }  return true
    }
      },
      {
        type: "input",
        message: "Enter an email for the intern:",
        name: "email",
        validate: async (input) => {
          if (input == ""){
            return "Please enter a valid email"
      }  return true
    }
      },
      {
        type: "input",
        message: "Enter a school for the intern:",
        name: "school",
        validate: async (input) => {
          if (input == ""){
            return "Please enter a valid school"
      }  return true
    }
      },
    ])
    .then((data) => {
      let { name, id, email, school } = data;
      let intern = new Intern(name, id, email, school);
      teamMates.push(intern);
      askForNextAction();
    });
}
buildTeam();

function addTeam() {

 fs.writeFileSync(output, generateHtml(teamMates), 'utf-8')
  return "HTML has been generated."
  }
  

