const reg = document.querySelector(".reg");
const login = document.querySelector(".login");
const form1 = document.querySelector(".form1");
const form2 = document.querySelector(".form2");

reg.addEventListener("click",() => {
    reg.classList.add("active");
    login.classList.remove("active");
    form2.style.display = "none";
    form1.style.display = "flex";
})
login.addEventListener("click",() => {
    login.classList.add("active");
    reg.classList.remove("active");
    form1.style.display = "none";
    form2.style.display = "flex";
})