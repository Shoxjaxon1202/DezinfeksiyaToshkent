import React, { Component } from "react";
import "./kafolat.scss";
import dizinfeksiyachiQiz from "../../img/dizinfeksiyachiQiz.jpg";
import compleated from "../../img/compleated.svg";
export default class Kafolat extends Component {
  render() {
    return (
      <div className="kafolat">
        <div className="kafolat_left">
          <img
            src={dizinfeksiyachiQiz}
            alt=""
            data-aos="fade-right"
            className="kafolat_img"
          />
        </div>

        <div className="kafolat_right">
          <img
            data-aos="fade-right"
            src={compleated}
            alt=""
            className="kafolat_right_img"
          />
          <h3 data-aos="fade-right" className="kafolat_title">
            Расмий кафолат - 1 йил. Биз жизмоний ва юридик шахсларга хизмат
            курсатамиз. Хизматлар лицензияланган!!!
          </h3>
          <button data-aos="fade-right" className="navbar_btn kafolat_btn">
            Богланиш
          </button>
        </div>
      </div>
    );
  }
}
