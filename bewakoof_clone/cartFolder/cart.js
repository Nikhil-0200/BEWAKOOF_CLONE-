let userNameSpan = document.querySelector("#userNameSpan");
let cartHeading = document.querySelector("#cartHeading");
let bottom = document.querySelector("#bottom");

let localStorageItem = JSON.parse(localStorage.getItem("cart"));

cartHeading.textContent = localStorageItem.length;

console.log(localStorageItem);

localStorageItem.forEach((element) => {
  let container = document.createElement("div");
  container.id = "container";

  let cartCard = document.createElement("div");
  cartCard.id = "cartCard";

  let cardLeft = document.createElement("div");
  cardLeft.id = "cardLeft";

  let cardRight = document.createElement("div");
  cardRight.id = "cardRight";

  let cardProduct = document.createElement("h1");
  cardProduct.id = "cardProduct";
  cardProduct.textContent = element.productName;

  let cardPrice = document.createElement("h1");
  cardPrice.id = "cardPrice";
  cardPrice.textContent = `₹${element.price.replace(/₹/g, "")}`;

  // totalMRP(element.price.replace(/₹/g, ""))

  let quantityDropDown = count();

  let sizeDropDown = size();

  let cardImgDiv = document.createElement("div");
  cardImgDiv.id = "cardImgDiv";

  let cardImg = document.createElement("img");
  cardImg.src = element.image1;

  let cardBtnDiv = document.createElement("div");
  cardBtnDiv.id = "cardBtnDiv";

  let cardRemoveBtn = document.createElement("button");
  cardRemoveBtn.textContent = "Remove";

  let cardAddToWishBtn = document.createElement("button");
  cardAddToWishBtn.textContent = "Move to Wishlist";

  cardBtnDiv.append(cardRemoveBtn, cardAddToWishBtn);
  cardImgDiv.append(cardImg);
  cardLeft.append(cardProduct, cardPrice, sizeDropDown, quantityDropDown);
  cardRight.append(cardImgDiv);
  cartCard.append(cardLeft, cardRight);
  container.append(cartCard, cardBtnDiv);
  bottom.append(container);
});

let data = JSON.parse(localStorage.getItem("setUserName"));

userNameSpan.textContent = data.toString();

function count() {
  let quantity = document.createElement("select");
  quantity.id = "quantity";

  let arr = [
    "Qty: 1",
    "Qty: 2",
    "Qty: 3",
    "Qty: 4",
    "Qty: 5",
    "Qty: 6",
    "Qty: 7",
    "Qty: 8",
    "Qty: 9",
    "Qty: 10",
  ];

  for (let i = 0; i < arr.length; i++) {
    let option = document.createElement("option");
    option.textContent = arr[i];
    quantity.append(option);
  }
  return quantity;
}

function size() {
  let arr = [
    "Size: S",
    "Size: M",
    "Size: L",
    "Size: XL",
    "Size: 2XL",
    "Size: 3XL",
  ];

  let sizeSelect = document.createElement("select");
  sizeSelect.id = "sizeSelect";

  arr.forEach((ele) => {
    let sizeOption = document.createElement("option");
    sizeOption.textContent = ele;
    sizeSelect.append(sizeOption);
  });

  return sizeSelect;
}

function totalMRP(){
 let res = localStorageItem.reduce((acc, curr)=> acc + +(curr.price.replace(/₹/g, "")), 0)
 return res
}

let totalMRPspan = document.getElementById("totalMRPspan");
totalMRPspan.textContent = `₹${totalMRP()}`


function gst(value){
  let gstAmt = (value * 0.18)
  return gstAmt
}

let gstAmtSpan = document.getElementById("gstAmtSpan");
gstAmtSpan.textContent = `${gst(totalMRP())}`

function subTotal(value1, value2){
let res = value1 + value2
return res
}

let subTotalValue = subTotal(totalMRP(), gst(totalMRP()))

let subtotalSpan = document.getElementById("subtotalSpan");
subtotalSpan.textContent = `₹${(subTotalValue).toFixed(2)}`