import React, { Component } from "react";
import place1 from "../../assets/img/place1.jpg";
import place2 from "../../assets/img/place2.jpg";
import place3 from "../../assets/img/place3.jpg";
import place4 from "../../assets/img/place4.jpg";
import place5 from "../../assets/img/place5.jpg";

export class PlacesSection extends Component {
  render() {
    return (
      <div>
        <section class="place section" id="place">
          <h2 class="section__title">Choose Your Place</h2>

          <div class="place__container container grid">
            {/* <!--==================== PLACES CARD 1 ====================--> */}
            <div class="place__card">
              <img src={place1} alt="place1" class="place__img" />

              <div class="place__content">
                <span class="place__rating">
                  <i class="ri-star-line place__rating-icon"></i>
                  <span class="place__rating-number">4,8</span>
                </span>

                <div class="place__data">
                  <h3 class="place__title">Bali</h3>
                  <span class="place__subtitle">Indonesia</span>
                  <span class="place__price">$2499</span>
                </div>
              </div>

              <button class="button button--flex place__button">
                <i class="ri-arrow-right-line"></i>
              </button>
            </div>

            {/* <!--==================== PLACES CARD 2 ====================--> */}
            <div class="place__card">
              <img src={place2} alt="place2" class="place__img" />

              <div class="place__content">
                <span class="place__rating">
                  <i class="ri-star-line place__rating-icon"></i>
                  <span class="place__rating-number">5,0</span>
                </span>

                <div class="place__data">
                  <h3 class="place__title">Bora Bora</h3>
                  <span class="place__subtitle">Polinesia</span>
                  <span class="place__price">$1599</span>
                </div>
              </div>

              <button class="button button--flex place__button">
                <i class="ri-arrow-right-line"></i>
              </button>
            </div>

            {/* <!--==================== PLACES CARD 3 ====================--> */}
            <div class="place__card">
              <img src={place3} alt="place2" class="place__img" />

              <div class="place__content">
                <span class="place__rating">
                  <i class="ri-star-line place__rating-icon"></i>
                  <span class="place__rating-number">4,9</span>
                </span>

                <div class="place__data">
                  <h3 class="place__title">Hawaii</h3>
                  <span class="place__subtitle">EE.UU</span>
                  <span class="place__price">$3499</span>
                </div>
              </div>

              <button class="button button--flex place__button">
                <i class="ri-arrow-right-line"></i>
              </button>
            </div>

            {/* <!--==================== PLACES CARD 4 ====================--> */}
            <div class="place__card">
              <img src={place4} alt="place4" class="place__img" />

              <div class="place__content">
                <span class="place__rating">
                  <i class="ri-star-line place__rating-icon"></i>
                  <span class="place__rating-number">4,8</span>
                </span>

                <div class="place__data">
                  <h3 class="place__title">Whitehaven</h3>
                  <span class="place__subtitle">Australia</span>
                  <span class="place__price">$2499</span>
                </div>
              </div>

              <button class="button button--flex place__button">
                <i class="ri-arrow-right-line"></i>
              </button>
            </div>

            {/* <!--==================== PLACES CARD 5 ====================--> */}
            <div class="place__card">
              <img src={place5} alt="place2" class="place__img" />

              <div class="place__content">
                <span class="place__rating">
                  <i class="ri-star-line place__rating-icon"></i>
                  <span class="place__rating-number">4,8</span>
                </span>

                <div class="place__data">
                  <h3 class="place__title">Hvar</h3>
                  <span class="place__subtitle">Croacia</span>
                  <span class="place__price">$1999</span>
                </div>
              </div>

              <button class="button button--flex place__button">
                <i class="ri-arrow-right-line"></i>
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default PlacesSection;
