const myForm = document.querySelector("form");
const email = document.querySelector("#email");
const password = document.querySelector("#password")


function storeCustomerData(value){
  let userSignUp;

if(localStorage.getItem("userSignUp")){
    userSignUp = JSON.parse(localStorage.getItem("userSignUp"));
}
else{
    userSignUp = []
localStorage.setItem("userSignUp", JSON.stringify(userSignUp))
}  

userSignUp.push(value)
localStorage.setItem("userSignUp", JSON.stringify(userSignUp))

}


myForm.addEventListener("submit", (event)=>{
    event.preventDefault();

    let obj = {};

    obj.emailId = email.value;
    obj.password = password.value;

    storeCustomerData(obj)
})



