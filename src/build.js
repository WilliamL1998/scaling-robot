const buildCards = (team) => {
    const card = []
    const buildManager = (Manager) => {
        var managerCard = `
        <div class="card m-3" style="width: 18rem;">
            <div class="card-body bg-primary">
                <h5 class="card-title text-white">${Manager.name}</h5>
                <p class="card-text text-white"><i class="fa-solid fa-mug-hot"></i> Manager</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${Manager.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${Manager.email}">${Manager.email}</a></li>
                <li class="list-group-item">Office number: ${Manager.officeNumber}</li>
            </ul>
        </div>`
        card.push(managerCard)
    }
    const buildEngineer = (Engineer) => {
        var engineerCard = `
         <div class="card m-3" style="width: 18rem;">
            <div class="card-body bg-primary">
                <h5 class="card-title text-white">${Engineer.name}</h5>
                <p class="card-text text-white"><i class="fa-solid fa-glasses"></i> Engineer</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${Engineer.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${Engineer.email}">${Engineer.email}</a></li>
                <li class="list-group-item">GitHub: <a target="_blank" href="https://github.com/${Engineer.github}">${Engineer.github}</a></li>
            </ul>
        </div>`
        card.push(engineerCard)
    }
    const buildIntern = (Intern) => {
        var internCard = `
        <div class="card m-3" style="width: 18rem;">
            <div class="card-body bg-primary">
                <h5 class="card-title text-white">${Intern.name}</h5>
                <p class="card-text text-white"><i class="fa-solid fa-user-graduate"></i> Intern</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${Intern.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${Intern.email}">${Intern.email}</a></li>
                <li class="list-group-item">School: ${Intern.school}</li>
            </ul>
        </div>`
        card.push(internCard)
    }
    for (var i = 0; i < team.length; i++) {
        if (team[i].getRole() == "Manager") {
            buildManager(team[i])
        }
        if (team[i].getRole() == "Engineer") {
            buildEngineer(team[i])
        }
        if (team[i].getRole() == "Intern") {
            buildIntern(team[i])
        }
    }
    return card.join("")
}

module.exports = (team) => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <script src="https://kit.fontawesome.com/e233ff4631.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
</head>
<body>
    <div class="jumbotron jumbotron-fluid bg-danger">
        <div class="container">
            <h1 class="display-4 text-white">My Team</h1>
        </div>
    </div>
    <div class="d-flex flex-row flex-wrap justify-content-center">
        ${buildCards(team)}
    </div>



    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>
</body>
</html>`
}