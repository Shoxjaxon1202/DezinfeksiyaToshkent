import React, { Component } from "react";
import "./klapa.scss";
export default class Klapa extends Component {
  render() {
    return (
      <div className="klapa">
        <div className="klapa_right">
          <h3 data-aos="fade-left" className="klapa_title">
            Клапа ва зарарли ҳашорот енди йўқ деб ҳисобланг !!!
          </h3>
          <p data-aos="fade-left" className="klapa_text">
            Бизнинг кўп йиллардан бери ўз фаолиятини олиб келаётган компаниямиз.
            Мижозларимиз биздан мамнун
          </p>
          <a href="#info" className="navbar__link">
            <button data-aos="fade-left" className="navbar_btn klapa_btn">
              Богланиш
            </button>
          </a>
        </div>
      </div>
    );
  }
}
