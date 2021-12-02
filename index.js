const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const fs = require("fs");
const managerHTML = ""
const engineerHTML = ""
const internHTML = ""


function start() {
    inquirer.prompt([
        {
            type: "list",
            message: "Add members to your team",
            name: "userselection",
            choices: ["Add Manager", "Add Intern", "Add Engineer", "Exit Application"]
        }
    ])
        .then(({ userselection }) => {
            switch (userselection) {
                case "Add Manager":
                    addManager();
                    break;
                case "Add Intern":
                    addIntern();
                    break;
                case "Add Engineer":
                    addEngineer();
                    break;
                default:
                    generatorHTML()
            }
        })
}

function addManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "enter employee name",

        },
        {
            type: "input",
            name: "ID",
            message: "enter employee ID",
        },
        {
            type: "input",
            name: "email",
            message: "enter employee email",
        },
        {
            type: "input",
            name: "details",
            message: "enter managers office number",
        },

    ]).then(({ name, ID, email, details }) => {
        const newManager = new Manager(name, ID, email, details)
        managerHTML += `<div class="card" style="width: 18rem;">
        <h3 class="card-title">Manager</h3>
        <div class="card-body">
          <h5 class="card-title">Name:{newManager.name}</h5>
          <p class="card-text">ID: %{newManager.ID}</p>
          <a href="mailto:${newManager.email}" class="btn btn-primary">Contact me</a>
          <p class="card-text">Office Number: %{newManager.officeNumber}</p>
        </div>
      </div>`
        console.log(managerHTML)
    })
}
function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "enter employee name",

        },
        {
            type: "input",
            name: "ID",
            message: "enter employee ID",
        },
        {
            type: "input",
            name: "email",
            message: "enter employee email",
        },
        {
            type: "input",
            name: "github",
            message: "enter github user",
        },

    ]).then(({ name, ID, email, github }) => {
        const newEngineer = new Engineer(name, ID, email, github)
        engineerHTML += `<div class="card" style="width: 18rem;">
        <h3 class="card-title">Engineer</h3>
        <div class="card-body">
          <h5 class="card-title">Name:{newEngineer.name}</h5>
          <p class="card-text">ID: %{newEngineer.ID}</p>
          <a href="mailto:${newEngineer.email}" class="btn btn-primary">Contact me</a>
          <p class="card-text">Github User: %{newEngineer.githubUser}</p>
        </div>
      </div>`
        console.log(engineerHTML)
    })
}
function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "enter employee name",

        },
        {
            type: "input",
            name: "ID",
            message: "enter employee ID",
        },
        {
            type: "input",
            name: "email",
            message: "enter employee email",
        },
        {
            type: "input",
            name: "school",
            message: "enter school name",
        },

    ]).then(({ name, ID, email, school }) => {
        const newIntern = new Intern(name, ID, email, school)
        internHTML += `<div class="card" style="width: 18rem;">
        <h3 class="card-title">Intern</h3>
        <div class="card-body">
          <h5 class="card-title">Name:${newIntern.name}</h5>
          <p class="card-text">ID: ${newIntern.Id}</p>
          <a href="mailto:${newIntern.email}" class="btn btn-primary">Contact me</a>
          <p class="card-text">School name: ${newIntern.schoolName}</p>
        </div>
      </div>`
        console.log(internHTML)
    })
}

function generatorHTML() {
    const templateHTML = `
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <title>Team Profile Generator</title>
  </head>
  <body>
  <header>
    <h1>Team Profile Generator</h1>
    </header>
    <main class="container">
      <article class="container d-flex flex-wrap">
      <h3>Manager</h3>
     ${managerHTML}
     </article>
     <article class="container d-flex flex-wrap">
     <h3>Engineer</h3>
      ${engineerHTML}
      </article>
      <article class="container d-flex flex-wrap">

      <h3>Intern</h3>
     ${internHTML}
     </article>
    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
    -->
  </body>
</html>
`
    console.log(templateHTML)
    fs.writeFileSync("index.html",templateHTML, function(err){
        if (err) throw err;
    });
    console.log("Team HTML File generated")
}