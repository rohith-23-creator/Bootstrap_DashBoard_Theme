const nav = document.querySelector(".side-list");
const bars = document.querySelector(".fa-bars");
 bars.addEventListener("click", function(){
     nav.classList.toggle("show")
 });

 window.addEventListener("click", function(e){
    const nav = document.querySelector(".side-list");
    const bars = document.querySelector(".fa-bars");
    if(e.target != bars && e.target.parentNode != bars){
            nav.classList.remove("show")
        }
 })