document.querySelector("#show-nastup").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active");
});
document.querySelector(".popup .close-btn").addEventListener("click", function(){
    document.querySelector(".popup").classList.remove("active");
});
document.querySelector(".popup .potvrdi").addEventListener("click", function(){
    document.querySelector(".popup").classList.remove("active");
});