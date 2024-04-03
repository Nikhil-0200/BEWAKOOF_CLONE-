import Slider2Data from "./HomePage/Slider2";

const Slider2 = document.getElementById("Slider2");
const arrowLeft2 = document.getElementById("arrowLeft2");
console.log(arrowLeft);
const arrowRight2 = document.getElementById("arrowRight2");

Slider2Data.forEach((ele) => {
  let imgDiv = document.createElement("div");
  imgDiv.className = "imgDiv2";
  let img = document.createElement("img");
  img.src = ele.img;

  imgDiv.append(img);
  Slider2.append(imgDiv);
});

const imgDivWidth = Slider2.querySelector(".imgDiv2").offsetWidth + 20;

arrowLeft2.addEventListener("click", () => {
    Slider2.scrollLeft -= imgDivWidth; 
});

arrowRight2.addEventListener("click", () => {
    Slider2.scrollLeft += imgDivWidth;
});
