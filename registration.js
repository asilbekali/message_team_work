const fullNameInput = document.getElementById("fullname-input");
const emalInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const signUpbtn = document.getElementById("signUp");
const passwordEye = document.getElementById("password-eyes");

signUpbtn.addEventListener("click", () => {
  let registration = JSON.parse(localStorage.getItem("registration")) || [];

  if (
    fullNameInput.value !== "" &&
    emalInput.value !== "" &&
    passwordInput.value !== ""
  ) {
    let registerItem = {
      fullNameInput: fullNameInput.value,
      emalInput: emalInput.value,
      passwordInput: passwordInput.value,
    };

    registration.push(registerItem);
    localStorage.setItem("registration", JSON.stringify(registration));

    alert("Ro'yxatdan muvaffaqiyatli o'ttingiz!");
    fullNameInput.value = "";
    emalInput.value = "";
    passwordInput.value = "";
  } else {
    alert("Iltimos barcha ma'lumotlarni kiriting!");
  }
});

passwordEye.addEventListener('click', function () {
  if(passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordEye.classList.remove('fa-eye');
    passwordEye.classList.add('fa-eye-slash');
  } else {
    passwordInput.type = "password";
    passwordEye.classList.remove('fa-eye-slash');
    passwordEye.classList.add('fa-eye');
  }
});