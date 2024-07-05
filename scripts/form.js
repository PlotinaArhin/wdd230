const kp1 = document.querySelector("#keyphrase");
const kp2 = document.querySelector("#keyphrase2");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const message = document.querySelector("#formmessage");

kp2.addEventListener("focusout", checkSame);
password2.addEventListener("focusout", checkPasswordMatch);

function checkSame() {
    if (kp1.value !== kp2.value) {
        message.textContent = "❗Key Phrases DO NOT MATCH!";
        message.style.visibility = "visible";
        kp2.style.backgroundColor = "#fff0f3";
        kp2.value = "";
        kp2.focus();
    } else {
        message.style.display = "none";
        kp2.style.backgroundColor = "#fff";
        kp2.style.color = "#000";
    }
}

function checkPasswordMatch() {
    if (password.value !== password2.value) {
        message.textContent = "❗Passwords DO NOT MATCH!";
        message.style.visibility = "visible";
        password.value = "";
        password2.value = "";
        password.focus();
    } else {
        message.style.display = "none";
        password.style.backgroundColor = "#fff";
        password2.style.backgroundColor = "#fff";
    }
}

