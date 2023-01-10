import React, { Component } from "react";
import about1 from "../../assets/img/about1.jpg";
import about2 from "../../assets/img/about2.jpg";

export class AboutSection extends Component {
  render() {
    return (
      <div>
        <section class="about section" id="about">
          <div class="about__container container grid">
            <div class="about__data">
              <h2 class="section__title about__title">
                More Information <br /> About The Best Beaches
              </h2>
              <p class="about__description">
                You can find the most beautiful and pleasant places at the best
                prices with special discounts, you choose the place we will
                guide you all the way to wait, get your place now.
              </p>
              <a href="#" class="button">
                Reserve a place
              </a>
            </div>

            <div class="about__img">
              <div class="about__img-overlay">
                <img src={about1} alt="about1" class="about__img-one" />
              </div>

              <div class="about__img-overlay">
                <img src={about2} alt="about2" class="about__img-two" />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default AboutSection;
