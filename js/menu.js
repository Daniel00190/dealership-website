let menu = document.getElementsByClassName("menu")[0];
let navigation = document.getElementsByClassName("nav_bar_desktop")[0];

menu.addEventListener("click", () => {
   if (navigation.style.display === "none") navigation.style.display = "block";
   else navigation.style.display = "none";
});

let dropdown = document.querySelector(
   "body > div.third_page > div.popular_search > div > div:nth-child(2) > svg"
);
let dropdownMenu = document.getElementsByClassName("drop_down")[0];
dropdownMenu.style.display = "none";
dropdown.addEventListener("click", () => {
   if (dropdownMenu.style.display === "none")
      dropdownMenu.style.display = "flex";
   else {
      dropdownMenu.style.display = "none";
   }
});

let navNar = document.getElementsByClassName("nav_bar_desktop")[0];

window.onscroll = function () {
   scrollFunction();
};

function scrollFunction() {
   if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
   ) {
      navNar.style.padding = "1rem";
   } else {
      navNar.style.padding = ".2rem";
   }
}

function reveal() {
   var reveals = document.querySelectorAll(".reveal");

   for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
         reveals[i].classList.add("active");
      } else {
         reveals[i].classList.remove("active");
      }
   }
}

window.addEventListener("scroll", reveal);
