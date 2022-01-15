const inquirer =require('inquirer');
const fs =  require('fs');
// const { generateHtml } = require('./template')
const teamProfile = [];

// action needed:

// ask them for MANAGER info 

    // prompt the user for data

        // THEN creat and store an object for the manager

        // THEN "ask what they would like to do next"

// ask them for ENGINEER info

    // prompt the user for the data 
    
        // THEN create and store an object for the engineer

        // THEN "ask what they would like to do next"

// ask them for INTERN info

    // prompt the user for the data 
    
        // THEN create and store an object for the intern

        // THEN "ask what they would like to do next"

// Ask that they would like to do next 

    // Add engineer, interen, be done

        // if 'Add Engineer' -> 'Ask them for engineer info'

        // if 'Add Intern' -> 'Ask them for intern info'

        // if 'Be done' -> 'build an html page'

// Use all of the collected employee data to build an HTML page.

const managerQuestions = 

console.log("Welcome to our team profile generator! Please follow these instuctions:")
inquirer
.prompt([
{
    type :"input",
    message : "Enter a name for the manager",
    name : "name"
},
{
    type: "input",
    message: "Enter a ID number for the manager",
    name: "id"
},
{
    type : "input",
    message: "Enter an email for the manager",
    name: "email"
},
{
    type: "input",
    message: "Enter a phone number for a manager",
    name: "phone"
},
{
    type: "list",
    name:"next",
    message: "Who would you like to add next?",
    choices:["Engingeer", "Intern", "Be done"]
},
])
async function askForManagerInfo(){

    const data = await inquirer.prompt(
        employees.push( new Manager ())
        // askForNextAction()
        
    )
}
console.log(teamProfile)

// const engineerQuestions =[
//     {
//         type: "input",
//         message: "Enter in an name for an engineer:",
//         name: "name"
//     },

//     {
//         type: "input",
//         message : "enter a ID number for the engineer",
//         name: "id"
//     },
//     {
//         type : "input",
//         message: "enter an email for the engineer",
//         name: "email"
//     },
//     {
//         type: "input",
//         message: "enter a gitHub username for the engineer",
//         name: "github"
//     },
// {
//     type: "list",
//     name:"next",
//     message: "Who would you like to add next?",
//     choices:["Engingeer", "Intern", "Be done"]
// },
// ]

// const internQuestions =[
//     {
//         type: "input",
//         message: "Enter in an name for an intern:",
//         name: "name"
//     },

//     {
//         type: "input",
//         message : "enter a ID number for the inter",
//         name: "id"
//     },
//     {
//         type : "input",
//         message: "enter an email for the intern",
//         name: "email"
//     },
//     {
//         type: "input",
//         message: "enter a school for the intern",
//         name: "school"
//     },
// {
    //     type: "list",
    //     name:"next",
    //     message: "Who would you like to add next?",
    //     choices:["Engingeer", "Intern", "Be done"]
    // },
// ]


askForManagerInfo()
