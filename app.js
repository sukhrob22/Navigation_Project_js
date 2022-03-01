const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
console.log(links);

navToggle.addEventListener("click", function(){
    // consol.log(links.classList)
    // consol.log(links.classList.contains("random"));
  links.classList.toggle("show-links")
    // console.log(links.classList.contains("links"))
})

// if(links.classList.contains("show-links")){
//     links.classList.remove("show-links")
// }else{
//     links.classList.add("show-links")
// }