let userName = document.querySelector(".nameUser");
let passwordUser = document.querySelector(".userPassword");

function handleSubmit(event) {
    event.preventDefault(); 
    getData("https://6764fcfe52b2a7619f5e0263.mockapi.io/userData");
}

function getData(api) {
    axios.get(api).then(
        (apiData) => {
            let res = apiData.data;
            console.log("API Ma'lumotlari:", res);

            if (res.some(item => item.name === userName.value)) {
                console.log("Foydalanuvchi topildi!");
            } else {
                console.log("Foydalanuvchi topilmadi!");
            }
        },
        (error) => {
            console.error("API xatosi:", error);
        }
    );
}
