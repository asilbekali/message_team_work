const fullNameInput = document.getElementById("fullname-input");
const emalInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const signUpbtn = document.getElementById("signUp");
const passwordEye = document.getElementById("password-eyes");

passwordEye.addEventListener("click", (e) => {
  console.log(e.target);
});

signUpbtn.addEventListener("click", (e) => {
  if (
    fullNameInput.value === "" ||
    emalInput.value === "" ||
    passwordInput.value === ""
  ) {
    alert("Iltimos barcha ma'lumotlaringizni kiriting!");
  } else {
    alert("Muvaffaqiyatli ro'yxatdan o'ttingiz!");
    fullNameInput.value = "";
    emalInput.value = "";
    passwordInput.value = "";
  }
});
