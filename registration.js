const { default: axios } = require("axios")

let Uname = document.querySelector(".fullname-input")
let Euser = document.querySelector(".email-input")

function setData(api){
    axios.get(api).then(
        (setD) =>{
            let setDa = setD.data
            console.log("Set")
        }
    )
}