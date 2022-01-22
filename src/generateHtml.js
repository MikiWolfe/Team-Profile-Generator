const path = require("path");
const fs = require("fs");


const insertValue = (template, field, value) => {
  return template.replaceAll(`{{ ${field} }}`, value)
}

function generateHtml(teamMates) {
  console.log("mates", teamMates);

  let html = "";

  for (mate of teamMates) {
    const outputPath = path.resolve(__dirname,'../templates',`${mate.getRole()}.html`);

    let data = fs.readFileSync(outputPath, 'utf-8');
    data = insertValue(data, 'name', mate.getName());
    data = insertValue(data, 'email', mate.getEmail());
    data = insertValue(data, 'id', mate.getId());
    data = insertValue(data, 'role', mate.getRole());

    switch(mate.getRole()){
      case 'Engineer':
        data = insertValue(data, 'github', mate.getGithub());
      break;
      case 'Manager':
        data = insertValue(data, 'officeNumber', mate.getOfficeNumber());
      break;
      case 'Intern':
        data = insertValue(data, 'school', mate.getSchool());
      break;
      default:
        break;
    }

    html+=data;

   }

    const template = path.resolve(__dirname, '../templates/main.html');

    let mainHTML = fs.readFileSync(template, 'utf-8');

    return insertValue(mainHTML, 'teamMates', html)
  
 
}
module.exports = generateHtml;




