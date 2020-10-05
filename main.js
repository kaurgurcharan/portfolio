
// (() => {
//   const mobileWidth = 680;

//   const reorderResponsiveMenu = () => {
//     const pageWidth = window.innerWidth;
//     const navContainer = document.querySelector("header nav .row");
//     const navigation = document.querySelector("header nav .main-nav");
//     const mobileNavigation = document.querySelector("body > .main-nav");

//     if(pageWidth <= mobileWidth && navigation) {
//       document.body.insertAdjacentElement("afterbegin", navigation);
//     } else if(pageWidth > mobileWidth && mobileNavigation) {
//       navContainer.insertAdjacentElement("beforeend", mobileNavigation);
//     }
    
//   }

//   window.addEventListener("resize" , () => {
//     reorderResponsiveMenu();
//   })
//   reorderResponsiveMenu();
// })();

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".main-nav");
  const navLinks = document.querySelectorAll(".main-nav li");
  
  burger.addEventListener("click", () => {
    //Toggle nav
    nav.classList.toggle("nav-active");
     //Animated Nav 
    navLinks.forEach((link, index) => {
      if(link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0}s`;
      }
    });
    //Burger Animation
    burger.classList.toggle('toggle');
  });

 
}

navSlide();