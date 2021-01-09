const moshahede = document.querySelectorAll(".specialitiesBox");
for (let index = 0; index < moshahede.length; index++) {
  moshahede[index].addEventListener("click", function () {
    window.location.href = "../doctorListPage/doctorListPage.html";
  });
}
const loginButton1 = document.querySelector(".loginButton");
loginButton1.addEventListener("click", function () {
  window.location.href = "../login.html";
});
const takhasos = document.querySelector(".specialList");
takhasos.addEventListener("click", function () {
  window.location.href = "specialities.html";
});

//SLIDER
const slides = document.querySelectorAll(".slide");
const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i-slide)}%)`;
  });
};
goToSlide(0)
let currSlide = 0;
const maxSlide = slides.length
setInterval(() => {
    if(currSlide== maxSlide-1){
        currSlide=0
    }else {
  currSlide++;
    }
  goToSlide(currSlide)
  
}, 4000);
/////