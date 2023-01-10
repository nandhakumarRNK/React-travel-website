import React, { Component } from "react";
import experience1 from "../../assets/img/experience1.jpg";
import experience2 from "../../assets/img/experience2.jpg";

export class ExperienceSection extends Component {
  render() {
    return (
      <div>
        <section class="experience section">
          <h2 class="section__title">
            With Our Experience <br /> We Will Serve You
          </h2>

          <div class="experience__container container grid">
            <div class="experience__content grid">
              <div class="experience__data">
                <h2 class="experience__number">20</h2>
                <span class="experience__description">
                  Year <br /> Experience
                </span>
              </div>

              <div class="experience__data">
                <h2 class="experience__number">75</h2>
                <span class="experience__description">
                  Complete <br /> tours
                </span>
              </div>

              <div class="experience__data">
                <h2 class="experience__number">650+</h2>
                <span class="experience__description">
                  Tourist <br /> Destination
                </span>
              </div>
            </div>

            <div class="experience__img grid">
              <div class="experience__overlay">
                <img
                  src={experience1}
                  alt="experience1"
                  class="experience__img-one"
                />
              </div>

              <div class="experience__overlay">
                <img
                  src={experience2}
                  alt="experience1"
                  class="experience__img-two"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ExperienceSection;
