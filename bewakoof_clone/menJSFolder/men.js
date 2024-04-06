import { starLine } from "../assets/IconFolder/index";

let API =
  "https://script.google.com/macros/s/AKfycbxCG90fekKd3afSynvi3JoCdyZG3nku--QWil_XpEQD_fMRjdY7f2ey6uUAgTHnQKdlYA/exec";

const cardDiv = document.getElementById("cardDiv");
const sort = document.querySelector("#sort");

async function fetchData() {
  let res = await fetch(API);
  let finalData = await res.json();

  // console.log(sort);

  function renderData(data) {
    cardDiv.innerHTML = "";

    data.forEach((ele) => {
      let itemCard = document.createElement("div");
      itemCard.className = "itemCard";
      itemCard.addEventListener("click", () => {
        window.location.href = `singlePage.html?id=${ele.id}`;
      });

      let imgDiv = document.createElement("div");
      imgDiv.className = "imgDiv";

      let img = document.createElement("img");
      img.src = ele.image1;

      let ratingSpan = document.createElement("span");
      ratingSpan.className = "ratingSpan";

      let ratingStar = document.createElement("img");
      ratingStar.classList = "ratingStar";
      ratingStar.src = starLine;

      let rating = document.createElement("h3");
      rating.className = "rating";
      rating.textContent = ele.rating;

      ratingSpan.append(ratingStar, rating);

      let textData = document.createElement("div");
      textData.className = "textData";

      let brandName = document.createElement("h3");
      brandName.className = "brandName";
      brandName.textContent = ele.brandName;

      let productName = document.createElement("h3");
      productName.className = "productName";
      productName.textContent = ele.productName;

      let price = document.createElement("p");
      price.className = "price";
      price.textContent = ele.price;

      let subTitle = document.createElement("span");
      subTitle.className = "subTitle";
      subTitle.textContent = ele.subTitle;

      textData.append(brandName, productName, price, subTitle);

      imgDiv.append(img);
      itemCard.append(imgDiv, ratingSpan, textData);
      cardDiv.append(itemCard);
    });
  }

  renderData(finalData.data);

  sort.addEventListener("change", () => {
    let sortData = [...finalData.data];

    // console.log(sortData.price);

    if (sort.value === "Popular") {
      sortData.sort((a, b) => {
        return a.id - b.id;
      });
    } else if (sort.value === "New") {
      sortData.sort((a, b) => {
        return b.id - a.id;
      });
    } else if (sort.value === "High to Low") {
      sortData.sort((a, b) => {
        let priceA = Number(a.price.replace(/[^\d.-]/g, ""));
        let priceB = Number(b.price.replace(/[^\d.-]/g, ""));
        return priceB - priceA;
      });
    } else if (sort.value === "Low to High")
      sortData.sort((a, b) => {
        let priceA = Number(a.price.replace(/[^\d.-]/g, ""));
        let priceB = Number(b.price.replace(/[^\d.-]/g, ""));
        return priceA - priceB;
      });

    console.log(sortData);
    renderData(sortData);
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

filterDiv.append(heading, heading2, heading3, heading4);
