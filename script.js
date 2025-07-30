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
      navbar.classList.add("backdrop-blur-md", "bg-white/30", "shadow-md");
    } else {
      navbar.classList.remove("backdrop-blur-md", "bg-white/30", "shadow-md");
    }
  });

  let scroll=document.getElementById("scroll")
  window.addEventListener("scroll",() =>{
    scroll.classList.toggle("hidden",window.scrollY < 100);
  });

  scroll.addEventListener("click",()=>{
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

//   let navbar = document.getElementById("navbar");
// let scrollBtn = document.getElementById("scroll");

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 0) {
//     navbar.classList.add("backdrop-blur-md", "bg-white/30", "shadow-md");
//   } else {
//     navbar.classList.remove("backdrop-blur-md", "bg-white/30", "shadow-md");
//   }

//   // Show scroll-to-top button after 100px
//   scrollBtn.classList.toggle("hidden", window.scrollY < 100);
// });

// scrollBtn.addEventListener("click", () => {
//   window.scrollTo({ top: 0, behavior: "smooth" });
// });
