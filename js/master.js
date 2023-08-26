let btnLinks = document.querySelector("header .container > i");

let links = document.querySelector("header .links")

btnLinks.addEventListener("click",(e)=>{
    btnLinks.classList.toggle("active");
    if(btnLinks.classList.contains("active")){
        links.style.cssText = "display:block;"
    }else{
        links.style.cssText = "display:none;"
    }
})