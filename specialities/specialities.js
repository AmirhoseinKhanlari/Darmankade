
const moshahede = document.querySelectorAll('.specialitiesBox')
for (let index = 0; index < moshahede.length; index++) {
    moshahede[index].addEventListener('click',function() {
        window.location.href = '../doctorListPage/doctorListPage.html';
    })
    
}
const loginButton1 = document.querySelector('.loginButton')
loginButton1.addEventListener('click',function() {
    window.location.href = '../login.html';
})
const takhasos = document.querySelector('.specialList')
takhasos.addEventListener('click',function() {
    window.location.href = 'specialities.html';
})
