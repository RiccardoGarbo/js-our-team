//Variabili elementi html

const main = document.querySelector('main')
//Array con gli oggetti da utilizzare
const infoTeam = [
    {
        name: 'Wayne Barnett',
        role: 'Founder e CEO',
        photo: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Carrol',
        role: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg'
    }

]
//Numero del team
const numberTeam = 6
//Variabile card
let cardProfile = ' '
//Creazione delle card con un ciclo for
for (let i = 0; i < numberTeam; i++) {
    const name = infoTeam[i].name
    const role = infoTeam[i].role
    const photo = infoTeam[i].photo
    //Ciclo tra gli object dell'array
    for (let key in infoTeam[i]) {
        cardProfile = '<div class="card border-0 bg-white">'
        cardProfile +=
            `<img src="img/${photo}" class="card-img-top" alt="...">
                <div class="card-body text-center">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">${role}</p>
            </div>`
        cardProfile += '</div>'
        console.log(cardProfile)
    }
    //Stampa in pagina
    main.innerHTML += cardProfile
}







