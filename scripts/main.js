const navbar=document.querySelector(".navBar");
const mobile_nav=document.querySelector(".nav_links_mobile");
const button=document.querySelector(".mob_list");

button.addEventListener("click",function (){
    mobile_nav.classList.toggle("active");

})