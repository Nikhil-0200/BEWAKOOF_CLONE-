let cartImage = document.querySelector("#cartImage");
let userNameSpan = document.querySelector("#userNameSpan")

// userNameSpan.textContent = " Nikhil"


let data = JSON.parse(localStorage.getItem("setUserName"))


userNameSpan.textContent = (data.toString());


cartImage.addEventListener("click", ()=>{
    window.location.href = "cart.html"
})
