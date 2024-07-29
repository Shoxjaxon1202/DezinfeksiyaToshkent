import React, { Component } from "react";
import "./haqida.scss";
import haqida_img1 from "../../img/Mask group.png";
import haqida_img2 from "../../img/Mask group (1).png";
import haqida_img3 from "../../img/Mask group (2).png";
export default class Haqida extends Component {
  render() {
    return (
      <div className="haqida">
        <h4 data-aos="zoom-out-down" className="haqida_subtitle">Ҳақида</h4>
        <hr className="haqida_hr" />
        <div className="haqida_cards" data-aos="zoom-out-right">
          <div className="haqida_card">
            <img src={haqida_img1} alt="" className="haqida_img" />
            <h5 className="haqida_title">Тезда Хизмат Кўрсатиш</h5>
            <p className="haqida_text">
              АРИЗАЛАР КУНИГА 24 СОАТ ҚАБУЛ ҚИЛИНАДИ. АГАР МУАММО ШОШИЛИНЧ
              БЎЛСА, БИЗ ДАРҲОЛ КЕТИШИМИЗ МУМКИН. ШУ БИЛАН БИРГА, СИФАТ МУКАММАЛ
              БЎЛИБ ҚОЛАДИ.
            </p>
          </div>
          <div className="haqida_card">
            <img src={haqida_img2} alt="" className="haqida_img" />
            <h5 className="haqida_title">Йетук Мутаҳасислаpимиз</h5>
            <p className="haqida_text">
              БИЗНИНГ ХОДИМЛАРИМИЗ ҲАММА НАРСАГА ҒАМХЎРЛИК ҚИЛАДИ:
              ҲИСОБ-КИТОБЛАР, ХОНАНИ ТАЙЁРЛАШ, ҚАЙТА ИШЛАШ, ЯКУНИЙ ТОЗАЛАШ,
              ВЕНТИЛЯТСИЯ ВА НАЗОРАТ ТЕКШИРУВИ.
            </p>
          </div>
          <div className="haqida_card">
            <img src={haqida_img3} alt="" className="haqida_img" />
            <h5 className="haqida_title">Сизга Мақул Вақтда</h5>
            <p className="haqida_text">
              СИЗ ЎЗИНГИЗ УЧУН МАҚУЛ ВА ҚУЛАЙ ВАҚТНИ ТАНЛАНГ ВА БИЗГА МУРОЖАТ
              ҚИЛИНГ. СИЗГА КАФОЛАТЛАНГАН ВА САМАРАЛИ НАТИЖАНИ ОЛИБ БОРАМИЗ
            </p>
          </div>
        </div>
      </div>
    );
  }
}
