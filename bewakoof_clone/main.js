import Slider1Data from "./HomePage/Slider1";
import Slider1BelowData from "./HomePage/Slider1Below";


const Slider1 = document.getElementById("Slider1");
const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");
const userName = document.getElementById("userName");
const loginText = document.querySelector("#navSecondDiv > div:nth-child(2) > a:nth-child(2)")
const logoutText = document.querySelector("#navSecondDiv > div:nth-child(2) > a:nth-child(3)")

let name = JSON.parse(localStorage.getItem("setUserName"))

if(name){
loginText.style.display = "none"
logoutText.style.display = "block"
}
else{
loginText.style.display = "block"
logoutText.style.display = "none"
}

userName.textContent = name

logoutText.addEventListener("click", (e)=>{
  e.preventDefault()
  localStorage.removeItem("setUserName")
  window.location.href="signUp.html"
  alert("Logout Successfully")
})

Slider1Data.forEach((ele) => {
  let imgDiv = document.createElement("div");
  imgDiv.className = "imgDiv";
  let img = document.createElement("img");
  img.src = ele.img;

  imgDiv.append(img);
  Slider1.append(imgDiv);
});

const imgDivWidth = Slider1.querySelector(".imgDiv").offsetWidth + 20;

arrowLeft.addEventListener("click", () => {
  Slider1.scrollLeft -= imgDivWidth;  
});

arrowRight.addEventListener("click", () => {
  Slider1.scrollLeft += imgDivWidth;
});

const Slider1Below = document.getElementById("Slider1Below");

Slider1BelowData.forEach((ele)=>{
let Slider1BelowCard = document.createElement("div");
Slider1BelowCard.id = "Slider1BelowCard";
let Slider1BelowImgDiv = document.createElement("div");
Slider1BelowImgDiv.id = "Slider1BelowImgDiv";
let Slider1BelowImg = document.createElement("img");
let Slider1BelowTitle = document.createElement("p");

Slider1BelowImg.src = ele.img;
Slider1BelowTitle.textContent = ele.title;



Slider1BelowImgDiv.append(Slider1BelowImg);
Slider1BelowCard.append(Slider1BelowImgDiv, Slider1BelowTitle)
Slider1Below.append(Slider1BelowCard)
})
