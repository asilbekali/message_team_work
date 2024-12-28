async function just() {
    let username = document.getElementById("fullname-input");
    let userEmail = document.getElementById("email-input"); 
    let passUser = document.getElementById("password-input");
    let data = {
        name: username.value,
        username: userEmail.value,
        password: passUser.value,
    };

    const apiURL = "https://6764fcfe52b2a7619f5e0263.mockapi.io/userData";

    try {
        const response = await axios.post(apiURL, data);
        alert("Ma'lumot muvaffaqiyatli saqlandi:", response.data);
        alert("Ma'lumot muvaffaqiyatli saqlandi!");
    } catch (error) {
        console.error("Xatolik yuz berdi:", error);
        alert("Ma'lumotni saqlashda xatolik yuz berdi!");
    }
}
