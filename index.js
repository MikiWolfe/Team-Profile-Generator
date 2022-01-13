const inquirer =require('inquirer');
const fs =  require('fs');
const { generateHtml } = require('./template')
const employees = [];


// manager, engineer, interns 


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

async function askForManagerInfo(){

    const data = await inquirer.prompt(
        employees.push( new Manager ())
        // askForNextAction()
        
    )
}