const Employee = require("../lib/Employee")
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

const generateHtml = (data) =>
`
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
          <h3>${data.name}</h3>
          <h3>${getRole()}</h3>
          <div class="text">
            <p>ID: ${Manager.id}:</p>
            <br />
            <p>Email: ${Manager.email}:</p>
            <br />
            <p>Phone Number: ${Manager.officePhone} </p>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="card">
          <h3>${Engineer.name}</h3>
          <h3>${getRole()}</h3>
          <div class="text">
            <p>ID: ${Engineer.id}</p>
            <br />
            <p>Email: ${Engineer.email}</p>
            <br />
            <a class="link" href="https://github.com/${Engineer.github}" target="_blank">GitHub</a>

          </div>
        </div>
      </div>

      <div class="container">
        <div class="card">
        <h3>${Intern.name}</h3>
        <h3>${getRole()}</h3>
          <div class="text">
            <p>ID: ${Intern.id}</p>
            <br />
            <p>Email:${Intern.email}</p>
            <br />
            <p>School: ${Intern.school}</p>
          </div>
        </div>
      </div>
    </section>
  </body>
</html>
`

module.exports =generateHtml