

const myForm = document.querySelector("form");
const loginEmail = document.querySelector("#loginEmail");
const loginPassword = document.querySelector("#loginPassword");
let localStorageData = JSON.parse(localStorage.getItem("userSignUp"));


function setUserNameFnc(value) {
  let setUserName;

  if (localStorage.getItem("setUserName")) {
    setUserName = JSON.parse(localStorageData.getItem("setUserName"));
  } else {
    setUserName = [];
    localStorage.setItem("setUserName", JSON.stringify(setUserName));
  }

  setUserName.push(value);
  localStorage.setItem("setUserName", JSON.stringify(setUserName));
}

myForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let isLoggedIn = false;
  let foundUser = false;
  let userData = null;

  if (localStorageData) {
    localStorageData.forEach((ele) => {
      if (loginEmail.value === ele.emailId && loginPassword.value === ele.password) 
      {
        isLoggedIn = true;
        foundUser = true;
        userData = ele
        window.location = "index.html";
        alert("Login Successfully");
        return
      }
    });
  } else {
    alert("No user data found. Please sign up first.");
    isLoggedIn = true;
  }

  if(!foundUser){
    if(loginEmail.value === "" && loginPassword.value === ""){
      alert("Enter Login Details")
    }
    else if(loginEmail.value !== "" && localStorageData.some((ele)=> ele.emailId !== loginEmail.value)){
      alert("Enter Correct Email Id")
    }
    else if(loginPassword.value !== "" && localStorageData.some((ele)=> ele.password !== loginPassword.value)){
      alert("Enter Correct Password")
    }
  }

if(isLoggedIn && userData){
  
console.log(userData.inputUserName);
  setUserNameFnc(userData.inputUserName)
}
  
});

