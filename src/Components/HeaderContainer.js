import React, { Component } from "react";

export class HeaderContainer extends Component {
  render() {
    var tempURL = "";
    const themeButton = document.getElementById("theme-button");
    const darkTheme = "dark-theme";
    const iconTheme = "ri-sun-line";

    const getCurrentTheme = () =>
      document.body.classList.contains(darkTheme) ? "dark" : "light";
    const getCurrentIcon = () =>
      themeButton.classList.contains(iconTheme)
        ? "ri-moon-line"
        : "ri-sun-line";

    // if (selectedTheme) {
    //   document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    //     darkTheme
    //   );
    //   themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    //     iconTheme
    //   );
    // }

    const handleThemeSetting = () => {
      document.body.classList.toggle(darkTheme);
      themeButton.classList.toggle("ri-sun-line");
      localStorage.setItem("selected-theme", getCurrentTheme);
      localStorage.setItem("selected-icon", getCurrentIcon);
    };

    const clickProp = this.props.onclickProp;

    return (
      <div>
        <header className="header" id="header">
          <nav class="nav container">
            <a href={tempURL} class="nav__logo">
              Travel
            </a>

            <div class="nav__menu" id="nav-menu">
              <ul class="nav__list">
                <li class="nav__item">
                  <a href="#home" class="nav__link active-link">
                    Home
                  </a>
                </li>
                <li class="nav__item">
                  <a href="#about" class="nav__link">
                    About
                  </a>
                </li>
                <li class="nav__item">
                  <a href="#discover" class="nav__link">
                    Discover
                  </a>
                </li>
                <li class="nav__item">
                  <a href="#place" class="nav__link">
                    Places
                  </a>
                </li>
                <li class="nav__item">
                  <a href="#subscribe" class="nav__link">
                    Subscription
                  </a>
                </li>
              </ul>

              <div class="nav__dark" onClick={handleThemeSetting}>
                {/* Theme change button  */}
                <span class="change-theme-name">Dark mode</span>
                <i class="ri-moon-line change-theme" id="theme-button"></i>
              </div>

              <i class="ri-close-line nav__close" id="nav-close" onClick={clickProp}></i>
            </div>

            <div class="nav__toggle" id="nav-toggle" onClick={clickProp}>
              <i class="ri-function-line"></i>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default HeaderContainer;
