const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Employee = require("../lib/Employee");



function generateHtml(teamMate) {
loop(teamMate);
return `

<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="src/style.css" />
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Team Porfiles</title>
  </head>

  <body>
    <h1>My Team</h1>

  <section>
  
<div class="container">
<div class="card">
  <h3>${managerName}</h3>
    <h3>${getRole(teamMate)}</h3>
   <div class="text">
       <p>ID: ${id}</p>
      <br />
      <p>Email: ${email}</p>
     <br />
     <p>Office phone:${getOfficeNumber(teamMate)} </p>
     </div>
     </div>
     </div>

     <div class="container">
<div class="card">
  <h3>${managerName}</h3>
    <h3>${getRole(teamMate)}</h3>
   <div class="text">
       <p>ID: ${id}</p>
      <br />
      <p>Email: ${email}</p>
     <br />
     <p>Office phone:${getOfficeNumber(teamMate)} </p>
     </div>
     </div>
     </div>
     
     </section>
     </body>
     </html>
     `
    }
    function loop (teamMate){
        for(let i = 0; i < teamMate.length; i++){
            // const element = teamMate[i]
            let managerName = teamMate[i].name
            
            
            let id = teamMate[i].id
            let email = teamMate[i].email
            //     <a class="link" href="https://github.com/${gitHub}" target="_blank">GitHub</a>
            //   <p> School: ${school}</p>
            // let phone = getOfficeNumber(teamMate[i])
            // let gitHub =getGithub(teamMate[i])
    // let school = getSchool(teamMate[i])
  }
  }

module.exports =  generateHtml