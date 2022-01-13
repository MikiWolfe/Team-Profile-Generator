
function generateHtml()
{return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="style.css" />
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
          <h3>${manager.name}<br />Manager</h3>
          <div class="text">
            <p>ID: ${manager.id}:</p>
            <br />
            <p>Email: ${manager.email}:</p>
            <br />
            <p>Phone Number: ${$manager.phone} </p>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="card">
          <h3>Name<br />Posistion</h3>
          <div class="text">
            <p>ID:</p>
            <br />
            <p>Email:</p>
            <br />
            <p>Contact</p>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="card">
          <h3>Name<br />Posistion</h3>
          <div class="text">
            <p>ID:</p>
            <br />
            <p>Email:</p>
            <br />
            <p>Contact</p>
          </div>
        </div>
      </div>
    </section>
  </body>
</html>
`}