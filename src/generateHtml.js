function generateHtml(teamMate) {

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

  <section${cardstogohere}>
       
     </section>
     </body>
     </html>
     `
    }
 
 
//  Manager card:
 `
  <div class="container">
<div class="card">
  <h3>${manager.name}</h3>
    <h3>${manager.role}</h3>
   <div class="text">
       <p>ID: ${manager.id}</p>
      <br />
      <a class="link" href="mailto: ${manager.email}"> Email</a>
     <br />
     <p>Office phone:${officeNumber} </p>
     </div>
     </div>
     </div>
 
 `
// Engineer card:
`
<div class="container">
<div class="card">
  <h3>${engineer.name}</h3>
    <h3>${engineer.role}</h3>
   <div class="text">
       <p>ID: ${engineer.id}</p>
      <br />
      <a class="link" href="mailto: ${engineer.email}"> Email</a>
     <br />
     <a href="https://github.com/${engineer.github}" target="_blank">Github</a>
     </div>
     </div>
     </div>
`
// Intern card:
`
<div class="container">
<div class="card">
  <h3>${intern.name}</h3>
    <h3>${role}</h3>
   <div class="text">
       <p>ID: ${intern.id}</p>
      <br />
      <a class="link" href="mailto: ${intern.email}"> Email</a>
     <br />
     <p>School:${intern.school} </p>
     </div>
     </div>
     </div>
`


    // filter fuction 
const render = (teamMate) => { 
  const html = [];
html
  
}    


module.exports =  generateHtml