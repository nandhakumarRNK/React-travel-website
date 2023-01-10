import React, { Component } from "react";
import sponsors1 from "../../assets/img/sponsors1.png";
import sponsors2 from "../../assets/img/sponsors2.png";
import sponsors3 from "../../assets/img/sponsors3.png";
import sponsors4 from "../../assets/img/sponsors4.png";
import sponsors5 from "../../assets/img/sponsors5.png";

export class SponserSection extends Component {
  render() {
    return (
      <div>
        <section class="sponsor section">
          <div class="sponsor__container container grid">
            <div class="sponsor__content">
              <img src={sponsors1} alt="sponsors1" class="sponsor__img" />
            </div>
            <div class="sponsor__content">
              <img src={sponsors2} alt="sponsors2" class="sponsor__img" />
            </div>
            <div class="sponsor__content">
              <img src={sponsors3} alt="sponsors3" class="sponsor__img" />
            </div>
            <div class="sponsor__content">
              <img src={sponsors4} alt="sponsors1" class="sponsor__img" />
            </div>
            <div class="sponsor__content">
              <img src={sponsors5} alt="sponsors1" class="sponsor__img" />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default SponserSection;
