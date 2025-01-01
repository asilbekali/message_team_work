let userName = document.querySelector(".nameUser");
let passwordUser = document.querySelector(".userPassword");
let passwordEye = document.getElementById('password-eyes');

function handleSubmit(event) {
    event.preventDefault(); 
    getData("https://6764fcfe52b2a7619f5e0263.mockapi.io/userData");
}

function getData(api) {
    axios.get(api).then(
        (apiData) => {
            let res = apiData.data;
            console.log("API Ma'lumotlari:", res);

            if (res.some(item => item.name === userName.value) && res.some( item => item.password === passwordUser.value)) {
                console.log("Foydalanuvchi topildi!");
            } else {
                window.location.href = "./index.html"
            }

            userName.value = "";
            passwordUser.value = "";
        },
        (error) => {
            console.error("API xatosi:", error);
        }
    );
}

passwordEye.addEventListener('click', function () {
    if(passwordUser.type === "password") {
        passwordUser.type = "text"
        passwordEye.classList.remove('fa-eye');
        passwordEye.classList.add('fa-eye-slash');
    } else {
        passwordUser.type = "password";
        passwordEye.classList.remove('fa-eye-slash');
        passwordEye.classList.add('fa-eye');
    }
});

