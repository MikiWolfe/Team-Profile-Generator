const Employee = require("./employee");

const engineerQuestions =[
    {
        type: "input",
        message: "Enter in an name for an engineer:",
        name: "name"
    },

    {
        type: "input",
        message : "enter a ID number for the engineer",
        name: "id"
    },
    {
        type : "input",
        message: "enter an email for the engineer",
        name: "email"
    },
    {
        type: "input",
        message: "enter a gitHub username for the engineer",
        name: "github"
    }
]

class Engineer extends Employee {
    
}