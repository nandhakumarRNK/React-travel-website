// import "./App.css";
import "../src/assets/css/styles.css";
// import "../src/assets/css/swiper-bundle.min.css";
import FooterContainer from "./Components/FooterContainer";
import HeaderContainer from "./Components/HeaderContainer";
import SectionContainer from "./Components/SectionContainer";

function App() {
  const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

  window.addEventListener(
    "scroll",
    function (event) {
      var scrollY = this.scrollY;
      const scrollUp = document.getElementById("scroll-up");
      if (scrollY >= 200) {
        scrollUp.classList.add("show-scroll");
      } else {
        scrollUp.classList.remove("show-scroll");
      }
    },
    false
  );

  window.addEventListener(
    "scroll",
    function (event) {
      var scrollY = this.scrollY;
      const header = document.getElementById("header");
      if (scrollY >= 100) header.classList.add("scroll-header");
      else header.classList.remove("scroll-header");
    },
    false
  );

  if (navToggle) {
    clickMenuOpen();
  }

  const clickMenuOpen = () => {
    const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close");
    if (!navMenu.classList.contains("show-menu")) {
      navMenu.classList.add("show-menu");
    } else {
      navMenu.classList.remove("show-menu");
    }
    console.log("Menu working...!");
  };

  if (navClose) {
    clickMenuOpen();
  }

  const navLink = document.querySelectorAll(".nav__link");

  function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
  }
  navLink.forEach((n) => n.addEventListener("click", linkAction));

  window.addEventListener("scroll", function (event) {
    const sections = document.querySelectorAll("section[id]");
    const scrollY = window.pageYOffset;
    console.log("sdfgsgsdgsd");
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      var sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(".nav__menu a[href*=" + sectionId + "]")
          .classList.add("active-link");
      } else {
        document
          .querySelector(".nav__menu a[href*=" + sectionId + "]")
          .classList.remove("active-link");
      }
    });
  });

  return (
    <div className="App">
      <HeaderContainer onclickProp={clickMenuOpen} />
      <main class="main">
        <SectionContainer />
      </main>
      <FooterContainer />

      <a href="#" className="scrollup" id="scroll-up">
        <i class="ri-arrow-up-line scrollup__icon"></i>
      </a>
    </div>
  );
}

export default App;
