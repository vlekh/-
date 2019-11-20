
document.querySelector('#bth-Andrian').addEventListener('click', informationAboutAndrian);
document.querySelector('#bth-Andriy').addEventListener('click', informationAboutAndriy);
function informationAboutAndrian() {
    fetch('client-data.json')
        .then( response => response.json() )
        .then( clientData =>  {
            document.querySelector('.name').innerText = clientData.name;
            document.querySelector('.profile').innerText = clientData.profile;
            document.querySelector('.education').innerText = clientData.education;
        } );
}

function informationAboutAndriy() {
    fetch('client-data.json')
        .then( response => response.json() )
        .then( clientData =>  {
            document.querySelector('.name').innerText = clientData.name2;
            document.querySelector('.profile').innerText = clientData.profile2;
            document.querySelector('.education').innerText = clientData.education2;
        } );
}
function informationAboutEducation() {
    fetch('client-data.json')
        .then( response => response.json() )
        .then( clientData =>  {
            document.querySelector('.name').innerText = clientData.name2;
            document.querySelector('.profile').innerText = clientData.profile2;
            document.querySelector('.education').innerText = clientData.education2;
        } );
}

