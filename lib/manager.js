const inquierer =require('inquirer')
const manager = [];

const managerQuestions = 

inquierer
.prompt([
{
    type :"input",
    message : "Enter a name for the manager",
    name : "name"
},
{
    type: "input",
    message: "enter a ID number for the manager",
    name: "id"
},
{
    type : "input",
    message: "enter an email for the manager",
    name: "email"
},
{
    type: "input",
    message: "enter a phone number for a manager",
    name: "phone"
},
{
    type: "list",
    name:"",
    message: "",
    choices: ""
},
])

