const toggleButton = document.getElementById("nav-toggle"),
  navMenu = document.getElementById("nav-menu");

toggleButton.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
});

const navLink = document.querySelectorAll(".nav__link");
navLink.forEach((n) =>
  n.addEventListener("click", function () {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
  })
);

//Change header background
function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 200) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);

//Show Scrolltop
function scrollTop() {
  const scrollTop = document.getElementById("scrolltop");
  if (this.scrollY >= 560) scrollTop.classList.add("show-scrolltop");
  else scrollTop.classList.remove("show-scrolltop");
}
window.addEventListener("scroll", scrollTop);

// ACCORDION
const skillArrow = document.querySelectorAll(".accordion-header");
const skillContent = document.querySelectorAll(".skill__lists ");

skillArrow.forEach((arr) => {
  arr.addEventListener("click", (e) => {
    skillContent.forEach((con) => {
      if (
        e.target.nextElementSibling !== con &&
        con.classList.contains("active")
      ) {
        con.classList.remove("active");
        skillArrow.forEach((arr) => {
          arr.classList.remove("active");
        });
      }
    });
    const content = arr.parentNode;
    const contentBody = content.nextElementSibling;
    contentBody.classList.toggle("active");
    arr.classList.toggle("active");
  });
});

//Qualification
const educationButton = document.getElementById("education-button");
const certificationButton = document.getElementById("certification-button");
const certificationContent = document.getElementById("certification-content");
const educationContent = document.getElementById("education-content");

certificationButton.addEventListener("click", () => {
  educationContent.style.display = "none";
  certificationContent.style.display = "block";
});

educationButton.addEventListener("click", () => {
  certificationContent.style.display = "none";
  educationContent.style.display = "block";
});

//PORTFOLIO
const modalBtns = document.querySelectorAll(".modal-open");
modalBtns.forEach(function (btn) {
  btn.onclick = function () {
    var modal = btn.getAttribute("data-modal");
    document.getElementById(modal).style.display = "block";
  };
});

const modalCloseBtns = document.querySelectorAll(".portfolio__modal-close");
modalCloseBtns.forEach(function (btn) {
  btn.onclick = function () {
    var modal = (btn.closest(".portfolio__modal").style.display = "none");
  };
});

//SCROLL REVEAL ANIMATION
// const sr = ScrollReveal({
//   origin: "top",
//   distance: "30px",
//   duration: 2000,
//   reset: true,
// });

// sr.reveal(
//   ".home__content, .home__data, .about__data, .about__img, .portfolio, .skills__content,.education__container, .project__container, .contact__container, .footer__container",
//   {
//     interval: 200,
//   }
// );

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

var swiper = new Swiper(" .reviews-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});
