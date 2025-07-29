let logos=document.getElementsByClassName("logo");
console.dir(logos);
let navs=document.getElementsByClassName("nav");
console.dir(navs);
logos.addEventListener('click',()=>{
    navs.style.backgroundColor = "lightblue";

})