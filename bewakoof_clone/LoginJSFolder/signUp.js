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
alert("Sign Up Successfully")
}


myForm.addEventListener("submit", (event)=>{
    event.preventDefault();

    if(email.value.trim() === "" && password.value.trim() === ""){
        alert("Please enter both email and password")
        return
    }
    else if(email.value.trim() === ""){
        alert("Please enter your email")
        return
    }
    else if(password.value.trim() === ""){
        alert("Please enter your password")
        return
    }

    let obj = {};

    obj.emailId = email.value;
    obj.password = password.value;

    storeCustomerData(obj)
})



