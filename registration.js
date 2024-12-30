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
// async function just() {
//   let username = document.getElementById("fullname-input");
//   let userEmail = document.getElementById("email-input");
//   let passUser = document.getElementById("password-input");
//   let data = {
//     name: username.value,
//     username: userEmail.value,
//     password: passUser.value,
//   };

//   const apiURL = "https://6764fcfe52b2a7619f5e0263.mockapi.io/userData";

//   try {
//     const response = await axios.post(apiURL, data);
//     alert("Ma'lumot muvaffaqiyatli saqlandi:", response.data);
//     alert("Ma'lumot muvaffaqiyatli saqlandi!");
//   } catch (error) {
//     console.error("Xatolik yuz berdi:", error);
//     alert("Ma'lumotni saqlashda xatolik yuz berdi!");
//   }
// }
