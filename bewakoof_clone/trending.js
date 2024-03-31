import trendingData from "./HomePage/TrendingSlider"

const TrendingImages = document.getElementById("TrendingImages");

trendingData.forEach((ele)=>{
    let trendingImgDiv = document.createElement("div");
    trendingImgDiv.className = "trendingImgDiv";

    let img = document.createElement("img");

    img.src = ele.img
    trendingImgDiv.appendChild(img)
    TrendingImages.append(trendingImgDiv)
})