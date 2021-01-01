const id = localStorage.getItem("ID")
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
const matabInformation = document.querySelector('.downside')
const availableDays = document.querySelector('.availableDays')
const matabButton = document.querySelector('.matabButton')
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
        emtiazz.textContent = A.rate
        allRate.textContent = `از ${A.comments} نظر `
        commenter.textContent =  `نظر ${A.commenter}`
        commentText.textContent = A.comment_text
        const tik = '<svg data-v-723181de="" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-dark-mint feather feather-check"><polyline data-v-723181de="" points="20 6 9 17 4 12"></polyline></svg>'
        const cross = '<svg data-v-723181de="" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary feather feather-x"><line data-v-723181de="" x1="18" y1="6" x2="6" y2="18"></line><line data-v-723181de="" x1="6" y1="6" x2="18" y2="18"></line></svg>'
        const checkDay = function (i) {
            if (A.week_days[i]) {

                return tik
                
                
            } else{
                return cross
            }
        }

        const html1 =  `      <div class="top-side">
        <div class="imageLocation">
            <img src="158image.png" alt="">
        </div>
        <div class="textLocation">
            <h4>
    آدرس مطب ۱ :
            </h4>
            <span>
            ${A.address}
            </span>
            <h4>
                تلفن گویا : ${A.phone}
            </h4>
        </div>
    </div>

        `
        const html2 = `
        <p>مطب</p>
        <div class="weekContainer">
        <ul class="weekList">
        <li>
        شنبه
        ${checkDay(0)}
        </li>
        <li>
        یک شنبه
        ${checkDay(1)}
        </li>
        <li>
        دوشنبه
        ${checkDay(2)}
        </li>
        <li>
        سه شنبه
        ${checkDay(3)}
        </li>
        <li>
        چهار شنبه
        ${checkDay(4)}
        </li>
        <li>
        پنج شنبه
        ${checkDay(5)}
        </li>
        <li>
        جمعه
        ${checkDay(6)}
        </li>
    </ul>
        
        
        `
        matabInformation.insertAdjacentHTML('afterbegin',html1)
        matabButton.addEventListener('click',function () {
            matabInformation.style.height = '20rem'
            matabInformation.innerHTML = " "
            matabInformation.insertAdjacentHTML('afterbegin',html1)
            matabButton.style.backgroundColor = 'white'

        })
        availableDays.addEventListener('click',function () {

            matabInformation.style.height = '15rem'
            matabInformation.innerHTML = " "
            matabInformation.insertAdjacentHTML('afterbegin',html2)


        })
       


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
