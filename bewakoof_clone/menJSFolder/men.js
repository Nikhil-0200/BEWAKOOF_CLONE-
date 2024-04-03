import {starLine} from "../assets/IconFolder/index"


let API =
  "https://script.google.com/macros/s/AKfycbwgymVYzPIaPaRXhbwccuSclT_I3UVpFY8jDsg1qYBiX30YS0J0iX-G-0Hv8Eu-aVj-lA/exec";

const cardDiv = document.getElementById("cardDiv");

async function fetchData() {
  let res = await fetch(API);
  let finalData = await res.json();

  console.log(finalData);

  finalData.data.forEach((ele) => {
    let itemCard = document.createElement("div");
    itemCard.className = "itemCard";

    let imgDiv = document.createElement("div");
    imgDiv.className = "imgDiv";

    let img = document.createElement("img");
    img.src = ele.image1;

    let ratingSpan = document.createElement("span");
    ratingSpan.className = "ratingSpan";

    let ratingStar = document.createElement("img");
    ratingStar.classList = "ratingStar"
    ratingStar.src = starLine

    let rating = document.createElement("h3");
    rating.className = "rating";
    rating.textContent = ele.rating;

    ratingSpan.append( ratingStar,rating)

    let textData = document.createElement("div");
    textData.className = "textData";

    let brandName = document.createElement("h3");
    brandName.className = "brandName";
    brandName.textContent = ele.brandName;

    let productName = document.createElement("h3");
    productName.className = "productName";
    productName.textContent = ele.productName

    let price = document.createElement("p");
    price.className = "price";
    price.textContent = ele.price;

    let subTitle = document.createElement("span");
    subTitle.className = "subTitle";
    subTitle.textContent = ele.subTitle;

    textData.append(brandName,
        productName,
        price,
        subTitle)


    imgDiv.append(img);
    itemCard.append(imgDiv, ratingSpan, textData);
    cardDiv.append(itemCard);
  });
}

fetchData();

const filterDiv = document.getElementById("filterDiv");

let heading = document.createElement("h1");
let heading2 = document.createElement("h1");
let heading3 = document.createElement("h1");
let heading4 = document.createElement("h1");

heading.textContent = "Hello";
heading2.textContent = "Nikhil";
heading3.textContent = "Karan";
heading4.textContent = "Aman";

filterDiv.append(heading, heading2, heading3, heading4)
