const takhasos = document.querySelector('.specialList')
takhasos.addEventListener('click',function() {
    window.location.href = 'specialities/specialities.html';
})
const loginButton = document.querySelector('.loginButton')
loginButton.addEventListener('click',function() {
    window.location.href = 'login.html';
})
const showall = document.querySelector('.showAll')
showall.addEventListener('click',function() {
    window.location.href = 'specialities/specialities.html';
})

const professions = document.querySelectorAll('.professionsBox')
for (let index = 0; index < professions.length; index++) {
    professions[index].addEventListener('click',function() {
        window.location.href = 'doctorListPage/doctorListPage.html';
    })
    
}
