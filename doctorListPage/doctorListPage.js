const merge = document.querySelector('.merge')
const doci = document.querySelector('.doci')
const satisfaction = document.querySelector('.satisfaction')
const choose = document.querySelector('.choose')
const menuLogo = document.querySelector('.menuLogo')



menuLogo.addEventListener('click',() => {
    window.location.href = '../index.html'
})
const httpRequest = new XMLHttpRequest();
httpRequest.open("GET","https://intense-ravine-40625.herokuapp.com/doctors");
httpRequest.send();
let dataArr = []
let isSorted = false
const showDoctors = function (resp) {

    if (isSorted) {

        doci.innerHTML = ""

        resp.sort(function(a, b) {
            return (a.user_percent)-(b.user_percent)
        })
        
        resp.forEach(function (el,i,arr) {
            let html = `
            <div class="bestDoctor">
            <div class="RightBestDoctor">
                <div class="imageBestDoctor">
                    <img src="${resp[i].avatar}" alt="">
                </div>
                <div class="informationOfDoctor">
                    <h2>
                        ${resp[i].name}
                    </h2>
                    <span>
                        ${resp[i].spec}
                    </span>
                    <div class="stars">
                        <svg data-v-50fd7d5a="" data-v-41e50536="" xmlns="http://www.w3.org/2000/svg" width=".8em" height=".8em" viewBox="0 0 24 24" fill="none" stroke="#1780df" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon data-v-50fd7d5a="" data-v-41e50536="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        <svg data-v-50fd7d5a="" data-v-41e50536="" xmlns="http://www.w3.org/2000/svg" width=".8em" height=".8em" viewBox="0 0 24 24" fill="none" stroke="#1780df" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon data-v-50fd7d5a="" data-v-41e50536="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        <svg data-v-50fd7d5a="" data-v-41e50536="" xmlns="http://www.w3.org/2000/svg" width=".8em" height=".8em" viewBox="0 0 24 24" fill="none" stroke="#1780df" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon data-v-50fd7d5a="" data-v-41e50536="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        <svg data-v-50fd7d5a="" data-v-41e50536="" xmlns="http://www.w3.org/2000/svg" width=".8em" height=".8em" viewBox="0 0 24 24" fill="none" stroke="#1780df" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon data-v-50fd7d5a="" data-v-41e50536="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        <svg data-v-50fd7d5a="" data-v-41e50536="" xmlns="http://www.w3.org/2000/svg" width=".8em" height=".8em" viewBox="0 0 24 24" fill="none" stroke="#1780df" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon data-v-50fd7d5a="" data-v-41e50536="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <span>
    (${resp[i].comments} نظر)
    </span>
                    </div>
                    <span class="tashkhis">
                        ${resp[i].comment_text}
                    </span>
                </div>
    
            </div>
            <div class="leftBestDocotr">
                <div class="top-side">
                    <svg data-v-50fd7d5a="" xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mic"><path data-v-50fd7d5a="" d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path data-v-50fd7d5a="" d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line data-v-50fd7d5a="" x1="12" y1="19" x2="12" y2="23"></line><line data-v-50fd7d5a="" x1="8" y1="23" x2="16" y2="23"></line></svg>
                    <span>
                        مشاوره صوتی
                    </span>
                </div>
                <div class="center-side">
                    <div class="firstLine">
                        <svg data-v-50fd7d5a="" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="#6e7794" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-20 feather feather-map-pin"><path data-v-50fd7d5a="" d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle data-v-50fd7d5a="" cx="12" cy="10" r="3"></circle></svg>
                        <span>
                            ${resp[i].location}
                        </span>
                    </div>
                    <div class="secondLine">
                        <svg data-v-50fd7d5a="" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="#6e7794" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-20 feather feather-book"><path data-v-50fd7d5a="" d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path data-v-50fd7d5a="" d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                        <span>
                              تجربه کاری ${resp[i].experience_years} سال
                        </span>
                        
                    </div>
                    <div class="thirdLine">
                        <svg data-v-50fd7d5a="" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-20 feather feather-thumbs-up"><path data-v-50fd7d5a="" d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                        <span>
                           ${resp[i].user_percent} درصد رضایت کاربران
                        </span>
                    </div>
                    <div  class="down-side">
                        <div class="first-line">
                            <button class="signupButton mobileButton">
                                <span class="icon-angle-left signupButtonIcon"></span>نوبت بگیر!
                            </button>
                            <div class="heartDiv"> 
                                <svg data-v-50fd7d5a="" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="heart-icon feather feather-heart text-water-blue"><path data-v-50fd7d5a="" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                            </div>
                             </div>
                             <p>اولین نوبت خالی ${resp[i].first_empty_date}</p>
                    </div>
                    <div class ="id">${resp[i].id}</div>
                </div>
            </div>
        </div>
            `
            doci.insertAdjacentHTML('afterbegin',html)
    
        })  
        
    } else {
        doci.innerHTML = ""
    dataArr.forEach(function (el,i,arr) {
        let html = `
        <div class="bestDoctor">
        <div class="RightBestDoctor">
            <div class="imageBestDoctor">
                <img src="${dataArr[i].avatar}" alt="">
            </div>
            <div class="informationOfDoctor">
                <h2>
                    ${dataArr[i].name}
                </h2>
                <span>
                    ${resp[i].spec}
                </span>
                <div class="stars">
                    <svg data-v-50fd7d5a="" data-v-41e50536="" xmlns="http://www.w3.org/2000/svg" width=".8em" height=".8em" viewBox="0 0 24 24" fill="none" stroke="#1780df" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon data-v-50fd7d5a="" data-v-41e50536="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    <svg data-v-50fd7d5a="" data-v-41e50536="" xmlns="http://www.w3.org/2000/svg" width=".8em" height=".8em" viewBox="0 0 24 24" fill="none" stroke="#1780df" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon data-v-50fd7d5a="" data-v-41e50536="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    <svg data-v-50fd7d5a="" data-v-41e50536="" xmlns="http://www.w3.org/2000/svg" width=".8em" height=".8em" viewBox="0 0 24 24" fill="none" stroke="#1780df" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon data-v-50fd7d5a="" data-v-41e50536="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    <svg data-v-50fd7d5a="" data-v-41e50536="" xmlns="http://www.w3.org/2000/svg" width=".8em" height=".8em" viewBox="0 0 24 24" fill="none" stroke="#1780df" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon data-v-50fd7d5a="" data-v-41e50536="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    <svg data-v-50fd7d5a="" data-v-41e50536="" xmlns="http://www.w3.org/2000/svg" width=".8em" height=".8em" viewBox="0 0 24 24" fill="none" stroke="#1780df" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon data-v-50fd7d5a="" data-v-41e50536="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<span>
(${dataArr[i].comments} نظر)
</span>
                </div>
                <span class="tashkhis">
                    ${dataArr[i].comment_text}
                </span>
            </div>

        </div>
        <div class="leftBestDocotr">
            <div class="top-side">
                <svg data-v-50fd7d5a="" xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mic"><path data-v-50fd7d5a="" d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path data-v-50fd7d5a="" d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line data-v-50fd7d5a="" x1="12" y1="19" x2="12" y2="23"></line><line data-v-50fd7d5a="" x1="8" y1="23" x2="16" y2="23"></line></svg>
                <span>
                    مشاوره صوتی
                </span>
            </div>
            <div class="center-side">
                <div class="firstLine">
                    <svg data-v-50fd7d5a="" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="#6e7794" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-20 feather feather-map-pin"><path data-v-50fd7d5a="" d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle data-v-50fd7d5a="" cx="12" cy="10" r="3"></circle></svg>
                    <span>
                        ${dataArr[i].location}
                    </span>
                </div>
                <div class="secondLine">
                    <svg data-v-50fd7d5a="" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="#6e7794" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-20 feather feather-book"><path data-v-50fd7d5a="" d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path data-v-50fd7d5a="" d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                    <span>
                          تجربه کاری ${dataArr[i].experience_years} سال
                    </span>
                    
                </div>
                <div class="thirdLine">
                    <svg data-v-50fd7d5a="" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-20 feather feather-thumbs-up"><path data-v-50fd7d5a="" d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                    <span>
                       ${dataArr[i].user_percent} درصد رضایت کاربران
                    </span>
                </div>
                <div  class="down-side">
                    <div class="first-line">
                        <button class="signupButton mobileButton">
                            <span class="icon-angle-left signupButtonIcon"></span>نوبت بگیر!
                        </button>
                        <div class="heartDiv"> 
                            <svg data-v-50fd7d5a="" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="heart-icon feather feather-heart text-water-blue"><path data-v-50fd7d5a="" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                        </div>
                         </div>
                         <p>اولین نوبت خالی ${dataArr[i].first_empty_date}</p>
                </div>
                <div class = "id">${resp[i].id}</div>
            </div>
        </div>
    </div>
        `
        doci.insertAdjacentHTML('afterbegin',html)

    })   
}
}
httpRequest.onreadystatechange = function (){
    if (this.readyState == 4 && this.status === 200) {
        let resp = JSON.parse(httpRequest.responseText)
        dataArr = [...resp]
        showDoctors(resp)
        satisfaction.addEventListener('click',function () {
            this.style.backgroundColor = '#1780df'
            this.style.color = 'white'
            isSorted = !isSorted
            showDoctors(resp)
            document.querySelector('.choose').style.backgroundColor = 'white'
            document.querySelector('.choose').style.color = '#6e7794'
        })
        choose.addEventListener('click',function () {
            isSorted = !isSorted
            showDoctors(resp)
            document.querySelector('.choose').style.backgroundColor = '#1780df'
            document.querySelector('.choose').style.color = 'white'
            satisfaction.style.backgroundColor = 'white'
            satisfaction.style.color = '#6e7794'

        })

        const bestDoctorEl = document.querySelectorAll('.bestDoctor')
        for (let index = 0; index < bestDoctorEl.length; index++) {
            bestDoctorEl[index].addEventListener('click',function () {
                const id = document.querySelectorAll('.id')[index].textContent
                localStorage.setItem("ID",id)
                window.location.href = '../doctorpage/doctorpage.html'
                
            })
            
        }
        

        
    }
}