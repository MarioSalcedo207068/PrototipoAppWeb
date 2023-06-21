const slidePage = document.querySelector(".slidepage");
const firstNextBtn = document.querySelector(".nextBtn");
const prevBtnSecond = document.querySelector(".prev-1");
const nextBtnSecond = document.querySelector("next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const nextBtnFourth = document.querySelector(".next-3");
const prevBtnFifth = document.querySelector(".prev-4");
const submitBtn = document.querySelector(".submit");

firstNextBtn.addEventListener("click", function(){
 slidePage.style.marginLeft="-25%"
});
nextBtnSecond.addEventListener("click", function(){
    slidePage.style.marginLeft="-50%"
   });