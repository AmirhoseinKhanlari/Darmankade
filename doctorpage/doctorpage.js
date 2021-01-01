const id = localStorage.getItem("ID")

console.log(id);

const doctorName = document.querySelector('.secondPart h1')
const text = document.querySelector('.text')
const shomarenezampezeshki = document.querySelector('.secondPart h2')
const experienceyears = document.querySelector('.Right .secondText1')
const firstemptydate = document.querySelector('.center .secondText2')
const image = document.querySelector('.imageDR')
const takhasos1 = document.querySelector('.spart')
const name1 = document.querySelector('.part1')
const emtiazz = document.querySelector('.emtiaz .number')
const allRate = document.querySelector('.nazarr')
const commenter = document.querySelector('.person')
const commentText = document.querySelector('.Comment span')
const httpRequest = new XMLHttpRequest();
httpRequest.open("GET",`https://intense-ravine-40625.herokuapp.com/doctors/${id}`)
httpRequest.send();
httpRequest.onreadystatechange = function() {
    if(this.readyState ==4 && this.status==200){
        let A= JSON.parse(httpRequest.responseText)
        console.log(A)
        doctorName.textContent = A.name
        text.textContent = A.spec
        shomarenezampezeshki.textContent=`شماره نظام پزشکی : ${A.number}`
        experienceyears.textContent=` ${A.experience_years} سال`
        firstemptydate.textContent=`${A.first_empty_date}`
        image.src=A.avatar
        takhasos1.textContent=A.spec
        name1.textContent=A.name
        name1.textContent=A.name
        emtiazz.textContent = A.rate
        allRate.textContent = `از ${A.comments} نظر `
        commenter.textContent =  `نظر ${A.commenter}`
        commentText.textContent = A.comment_text


    }
}
const loginButton1 = document.querySelector('.loginButton')
loginButton1.addEventListener('click',function() {
    window.location.href = '../login.html';
})
const takhasos = document.querySelector('.specialList')
takhasos.addEventListener('click',function() {
    window.location.href = '../specialities/specialities.html';
})
