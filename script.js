// let logos=document.getElementsByClassName("logo");
// console.dir(logos);
let navs=document.getElementsByClassName("nav");
console.dir(navs);
// // logos.addEventListener('click',()=>{
// //     navs.style.backgroundColor = "lightblue";

// // })
// window.addEventListener("scroll",()=>{
//     navs.style.backgroundColoe("blue")
// })


window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      navbar.classList.add("bg-gray-500");
    } else {
      navbar.classList.remove("bg-gray-500");
    }
  });