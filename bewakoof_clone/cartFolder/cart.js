let userNameSpan = document.querySelector("#userNameSpan");
let cartHeading = document.querySelector("#cartHeading");
let bottom = document.querySelector("#bottom");

let localStorageItem = JSON.parse(localStorage.getItem("cart"));

cartHeading.textContent = localStorageItem.length;

console.log(localStorageItem);


localStorageItem.forEach((element, i) => {
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

  let cardDropDown = document.createElement("div");
  cardDropDown.id = "cardDropDown"; 

  let quantityDropDown = count();


  quantityDropDown.querySelector("select").addEventListener("change", function(){
    let selectQtyValue = parseInt(this.value);
    let itemPrice = parseFloat(element.price.replace(/₹/g, ""));
    let totalPrice = selectQtyValue * itemPrice;
    cardPrice.textContent = `₹${totalPrice.toFixed(0)}`; 
    
  })


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
  cardDropDown.append(sizeDropDown, quantityDropDown)
  cardLeft.append(cardProduct, cardPrice, cardDropDown);
  cardRight.append(cardImgDiv);
  cartCard.append(cardLeft, cardRight);
  container.append(cartCard, cardBtnDiv);
  bottom.append(container);
});

let data = JSON.parse(localStorage.getItem("setUserName"));

userNameSpan.textContent = data.toString();

function count() {
  let quantityDiv = document.createElement("div");
  quantityDiv.id = "quantityDiv";
  let quantityLabel = document.createElement("label");
  quantityLabel.id = "quantityLabel"
  quantityLabel.textContent = "Qty: "
  let quantity = document.createElement("select");
  quantity.id = "quantity";

  for (let i = 1; i <=10; i++) {
    let option = document.createElement("option");
    option.textContent = i;
    quantity.append(option);
    quantityDiv.append(quantityLabel, quantity)
  }

  return quantityDiv;
}

function size() {
  let arr = [
    "S",
    "M",
    "L",
    "XL",
    "2XL",
    "3XL",
  ];

  let sizeDiv = document.createElement("div");
  sizeDiv.id = "sizeDiv";
  let sizeLabel = document.createElement("label");
  sizeLabel.id = "sizeLabel";
  sizeLabel.textContent = "Size"
  let sizeSelect = document.createElement("select");
  sizeSelect.id = "sizeSelect";

  arr.forEach((ele) => {
    let sizeOption = document.createElement("option");
    sizeOption.textContent = ele;
    sizeSelect.append(sizeOption);
    sizeDiv.append(sizeLabel, sizeSelect)
  });

  return sizeDiv;
}

function totalMRP(value){
let res = value.reduce((acc, curr)=> acc + parseFloat(curr.price.replace(/₹/g, "")), 0)
return res
}


  let totalMRPspan = document.getElementById("totalMRPspan");
totalMRPspan.textContent = `₹${totalMRP(localStorageItem)}`



function gst(value){
  let gstAmt = (value * 0.18)
  return gstAmt
}

let gstAmtSpan = document.getElementById("gstAmtSpan");
gstAmtSpan.textContent = `${gst(totalMRP(localStorageItem))}`

function subTotal(value1, value2){
let res = value1 + value2
return res
}

let subTotalValue = subTotal(totalMRP(localStorageItem), gst(totalMRP(localStorageItem)))

let subtotalSpan = document.getElementById("subtotalSpan");
subtotalSpan.textContent = `₹${(subTotalValue).toFixed(2)}`