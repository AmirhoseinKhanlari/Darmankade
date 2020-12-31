
const moshahede = document.querySelectorAll('.specialitiesBox')
for (let index = 0; index < moshahede.length; index++) {
    moshahede[index].addEventListener('click',function() {
        window.location.href = '../doctorListPage/doctorListPage.html';
    })
    
}
