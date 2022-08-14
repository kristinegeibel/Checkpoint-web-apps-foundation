const btn = document.querySelector("button");
const input1 = document.querySelector("#pw1");
const input2 = document.querySelector("#pw2");
const equal = document.querySelector(".equal");

// show/hide Password
btn.addEventListener("click", function() {
  
  if(input1.type === "password" && input2.type){
     input1.type = "text";
     input2.type = "text";
    btn.innerText = "Hide Password";
  }else{
    input1.type = "password";
    input2.type = "password"
    btn.innerText = "Show Password"
  }
});

// when equal is checked, then do the other functions
document.querySelector("body").addEventListener("input", () => {
  checkEqual();
  if (equal.innerText === "Passwords are equal ✅") {
    lowerCase();
    upperCase();
    numbers();
    checkLength();
  }
});

// function equal
function checkEqual(){
  if (input1.value === input2.value && input1.value != ""){
    equal.innerText = "Passwords are equal ✅";
  } else {
    equal.innerText = "Passwords are equal ❌"
  }
}
// function LowerCase
function lowerCase(){
  const lowerCase = document.querySelector(".lowerCase");
  const lowerCaseCheck = (str) => /[a-z]/.test(str);
  if (lowerCaseCheck(input1.value)) {
    lowerCase.innerText = "Lower Case Letters ✅";
  } else {
    lowerCase.innerText = "Lower Case Letters ❌";
  }
}

// function upperCase
function upperCase(){
  const upperCase = document.querySelector(".upperCase");
  const upperCaseCheck = (str) => /[A-Z]/.test(str);
  if (upperCaseCheck(input1.value)) {
    upperCase.innerText = "Upper Case Letters ✅";
  } else {
    upperCase.innerText = "Upper Case Letters ❌";
  }
}

// function contains Numbers
function numbers(){
  const number = document.querySelector(".numbers");
  const numbersCheck = (str) => /[0-9]/.test(str);
  if (numbersCheck(input1.value)) {
    number.innerText = "Contains Numbers ✅";
  } else {
    number.innerText = "Contains Numbers ❌";
  }
}


// function 10 Characters long
function checkLength(){
  const lengthPassword = document.querySelector(".length");
  if (input1.value.length >= 10) {
    lengthPassword.innerText = "At least 10 characters long ✅";
  } else {
    lengthPassword.innerText = "At least 10 characters long ❌";
  }
}
