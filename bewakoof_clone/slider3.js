import {Slider3Data, catImages} from "./HomePage/Slider3";

const Slider3 = document.getElementById("Slider3");
const arrowLeft3 = document.getElementById("arrowLeft3");
const arrowRight3 = document.getElementById("arrowRight3");

Slider3Data.forEach((ele) => {
  let imgDiv = document.createElement("div");
  imgDiv.className = "imgDiv3";
  let img = document.createElement("img");
  img.src = ele.img;

  imgDiv.append(img);
  Slider3.append(imgDiv);
});

const imgDivWidth = Slider3.querySelector(".imgDiv3").offsetWidth + 20;

arrowLeft3.addEventListener("click", () => {
    Slider3.scrollLeft -= imgDivWidth; 
});

arrowRight3.addEventListener("click", () => {
    Slider3.scrollLeft += imgDivWidth;
});


const catFirstDiv = document.getElementById("catFirstDiv");

catImages.forEach((ele)=>{
  let catImgDiv = document.createElement("div");
  catImgDiv.className = "catImgDiv";

  let img = document.createElement("img");
  img.src = ele.img

  catImgDiv.append(img)
  catFirstDiv.append(catImgDiv)
})