const myForm = document.querySelector("form");
const loginEmail = document.querySelector("#loginEmail");
const loginPassword = document.querySelector("#loginPassword");
let localStorageData = JSON.parse(localStorage.getItem("userSignUp"));


function setUserNameFnc(value){
    let setUserName;

    if(localStorage.getItem("setUserName")){
        setUserName = JSON.parse(localStorageData.getItem("setUserName"))
    }
    else {
        setUserName = []
        localStorage.setItem("setUserName", JSON.stringify(setUserName))
    }

    setUserName.push(value)
    localStorage.setItem("setUserName", JSON.stringify(setUserName))
}



myForm.addEventListener("submit", (event)=>{
event.preventDefault();

let isLoggedIn = false;

localStorageData.forEach(ele => {
if(loginEmail.value === ele.emailId && loginPassword.value === ele.password){
    isLoggedIn = true
    window.location = "index.html"
}
})
if(isLoggedIn){
    setUserNameFnc(loginEmail.value)
}
else{
    console.log("Wrong Details");
}
});



