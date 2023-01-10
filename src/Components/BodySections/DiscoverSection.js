import React, { Component } from "react";
import Swiper from "swiper";
import discover1 from "../../assets/img/discover1.jpg";
import discover2 from "../../assets/img/discover2.jpg";
import discover3 from "../../assets/img/discover3.jpg";
import discover4 from "../../assets/img/discover4.jpg";

export class DiscoverSection extends Component {
  render() {
    let swiper = new Swiper(".discover__container", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      loop: true,
      spaceBetween: 32,
      coverflowEffect: {
        rotate: 0,
      },
    });
    return (
      <div>
        <section class="discover section" id="discover">
          <h2 class="section__title">
            Discover the most <br /> attractive places
          </h2>

          <div class="discover__container container grid swiper-container">
            <div class="swiper-wrapper">
              {/* <!--==================== DISCOVER 1 ====================--> */}
              <div class="discover__card swiper-slide">
                <img src={discover1} alt="discover1" class="discover__img" />
                <div class="discover__data">
                  <h2 class="discover__title">Bali</h2>
                  <span class="discover__description">24 tours available</span>
                </div>
              </div>

              {/* <!--==================== DISCOVER 2 ====================--> */}
              <div class="discover__card swiper-slide">
                <img src={discover2} alt="discover2" class="discover__img" />
                <div class="discover__data">
                  <h2 class="discover__title">Hawaii</h2>
                  <span class="discover__description">15 tours available</span>
                </div>
              </div>

              {/* <!--==================== DISCOVER 3 ====================--> */}
              <div class="discover__card swiper-slide">
                <img src={discover3} alt="discover2" class="discover__img" />
                <div class="discover__data">
                  <h2 class="discover__title">Hvar</h2>
                  <span class="discover__description">18 tours available</span>
                </div>
              </div>

              {/* <!--==================== DISCOVER 4 ====================--> */}
              <div class="discover__card swiper-slide">
                <img src={discover4} alt="discover2" class="discover__img" />
                <div class="discover__data">
                  <h2 class="discover__title">Whitehaven</h2>
                  <span class="discover__description">32 tours available</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default DiscoverSection;
