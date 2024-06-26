import { starLine } from "../assets/IconFolder/index";

let API =
  "https://script.google.com/macros/s/AKfycbxCG90fekKd3afSynvi3JoCdyZG3nku--QWil_XpEQD_fMRjdY7f2ey6uUAgTHnQKdlYA/exec";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const singleHeading = document.getElementById("singleHeading");
const leftSection = document.getElementById("leftSection");

function setCart(value) {
  let cart;

  if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
  } else {
    cart = [];
  }

  cart.push(value);
  localStorage.setItem("cart", JSON.stringify(cart));
}

async function singleData() {
  let res = await fetch(`${API}?id=${id}`);
  let finalData = await res.json();

  finalData.data.forEach((ele) => {
    singleHeading.textContent = ele.productName;

    const bigImageDiv = document.createElement("div");
    bigImageDiv.id = "bigImageDiv";
    const bigImage = document.createElement("img");
    bigImage.src = ele.image1;

    const multipleSmallImgDiv = document.createElement("div");
    multipleSmallImgDiv.id = "multipleSmallImgDiv";
    const smallImageDiv = document.createElement("div");
    smallImageDiv.id = "smallImageDiv";
    const smallImage1 = document.createElement("img");
    const smallImage2 = document.createElement("img");
    const smallImage3 = document.createElement("img");
    smallImage1.src = ele.image1;
    smallImage2.src = ele.image2;
    smallImage3.src = ele.image3;

    bigImageDiv.append(bigImage);
    smallImageDiv.append(smallImage1, smallImage2, smallImage3);
    multipleSmallImgDiv.append(smallImageDiv);
    leftSection.append(bigImageDiv, multipleSmallImgDiv);

    let arr = [];
    let smallImgDivClick = document.querySelectorAll("#smallImageDiv img");

    for (let i = 0; i < smallImgDivClick.length; i++) {
      smallImgDivClick[i].addEventListener("click", () => {
        bigImage.src = smallImgDivClick[i].src;

        smallImgDivClick.forEach((img) => (img.style.border = "none"));

        smallImgDivClick[i].style.border = "2px solid aqua";
      });
    }

    // -----------------------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------------

    let rightSection = document.getElementById("rightSection");

    let rightFirstUprDiv = document.createElement("div");
    rightFirstUprDiv.id = "rightFirstUprDiv";

    let brandName = document.createElement("h1");
    brandName.textContent = ele.brandName;
    brandName.id = "brandName";

    let productName1 = document.createElement("h2");
    productName1.textContent = ele.productName;
    productName1.id = "productName1";

    let ratingSpan = document.createElement("span");
    ratingSpan.className = "ratingSpan1";

    let ratingStar = document.createElement("img");
    ratingStar.classList = "ratingStar1";
    ratingStar.src = starLine;

    let rating = document.createElement("h3");
    rating.className = "rating1";
    rating.textContent = ele.rating;

    ratingSpan.append(ratingStar, rating);

    let price = document.createElement("h1");
    price.textContent = ele.price;
    price.id = "price";

    let priceSub = document.createElement("p");
    priceSub.textContent = "inclusive of all taxes";
    priceSub.id = "priceSub";

    let subTitle = document.createElement("h4");
    subTitle.textContent = ele.subTitle;
    subTitle.id = "subTitle";

    let rightSecondUprDiv = document.createElement("p");
    rightSecondUprDiv.textContent =
      "TriBe members get an extra discount of ₹70 and FREE shipping.Learn more";
    rightSecondUprDiv.id = "rightSecondUprDiv";

    let sizeDiv = document.createElement("div");
    sizeDiv.id = "sizeDiv";

    let sizeDivHeading = document.createElement("div");
    sizeDivHeading.id = "sizeDivHeading";

    let sizeHeading = document.createElement("h3");
    sizeHeading.textContent = "SELECT SIZE";
    sizeHeading.className = "sizeHead";

    let sizeGuide = document.createElement("h3");
    sizeGuide.textContent = "Size Guide";
    sizeGuide.className = "sizeHead";

    let sizeArr = ["S", "M", "L", "XL", "2XL"];

    let btnDiv = document.createElement("div");
    btnDiv.id = "btnDiv";

    sizeArr.forEach((ele) => {
      let sizeBtn = document.createElement("button");

      sizeBtn.textContent = ele;

      btnDiv.append(sizeBtn);
    });

    let addToCartDiv = document.createElement("div");
    addToCartDiv.id = "addToCartDiv";

    let addToCartBtn = document.createElement("button");
    addToCartBtn.id = "addToCartBtn";
    addToCartBtn.textContent = "ADD TO BAG";

    addBtn(addToCartBtn, ele);

    let wishListBtn = document.createElement("button");
    wishListBtn.textContent = "WISHLIST";

    addToCartDiv.append(addToCartBtn, wishListBtn);

    rightFirstUprDiv.append(
      brandName,
      productName1,
      ratingSpan,
      price,
      priceSub,
      subTitle
    );

    sizeDivHeading.append(sizeHeading, sizeGuide);
    sizeDiv.append(sizeDivHeading, btnDiv, addToCartDiv);
    rightSection.append(rightFirstUprDiv, rightSecondUprDiv, sizeDiv);
  });
}

singleData();

// function fetchData(data){

// }

console.log("hi");

function addBtn(value, data) {
  value.addEventListener("click", () => {
let data1 = JSON.parse(localStorage.getItem("cart"))
let checkAvailability = data1.some(ele => ele.id === data.id);

    if(!checkAvailability){
      setCart(data);
      alert("Item Added To Cart")
    window.location.reload()
    }
    else{
      alert("Item is already present in cart")
    }
  });
}

const cartCount = document.querySelector("#cartCount");
let cartTotal = JSON.parse(localStorage.getItem("cart"))

cartCount.textContent = cartTotal.length  

let cartImage = document.querySelector("#cartImage");
cartImage.addEventListener("click", ()=>{
    window.location.href = "cart.html"
})
  