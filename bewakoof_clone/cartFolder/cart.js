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
  cardPrice.textContent = element.price;

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
  cardLeft.append(cardProduct, cardPrice);
  cardRight.append(cardImgDiv);
  cartCard.append(cardLeft, cardRight);
  container.append(cartCard, cardBtnDiv)
  bottom.append(container);
});

let data = JSON.parse(localStorage.getItem("setUserName"));

userNameSpan.textContent = data.toString();
