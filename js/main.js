const elAbout= document.querySelector(".about__text");
const elPlan= document.querySelector(".plan__text");
const elBoyligi= document.querySelector(".boyligi__text");
const elAboutLink= document.querySelector(".about__link");
const elPlanLink= document.querySelector(".plan__link");
const elBoyligiLink= document.querySelector(".boyligi__link");

elAboutLink.addEventListener("click", evt=>{
    elAbout.style.color="red";
})

elPlanLink.addEventListener("click", evt=>{
    elPlan.style.color="aqua";
})

elBoyligiLink.addEventListener("click", evt=>{
    elBoyligi.style.color="pink";
})