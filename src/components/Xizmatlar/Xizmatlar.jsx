import React, { Component } from "react";
import "./xizmatlar.scss";
import virus from "../../img/virus.png"
import tarakan from "../../img/tarakan2.png"
import sichqon from "../../img/sichqon.png"
export default class Xizmatlar extends Component {
  render() {
    return (
      <div className="xizmatlar">
        <h2 data-aos="zoom-in" className="xizmatlar_subtitle">
          Хизматлар
        </h2>
        <p data-aos="zoom-in" className="xizmatlar_text1">
          Биз сизга самарали ва кафолатли хизмат тақдим етамиз.
        </p>
        <div className="ximatlar_cards">
          <div data-aos="fade-right" className="xizmatlar_card">
            <img
              src={virus}
              alt=""
              className="xizmatlar_img"
            />
            <div className="xizmatlar_right">
              <h4 className="xizmatlar_title">
                Дезинфексия - зарарли микро организмларни йўқ қилиш
              </h4>
              <p className="xizmatlar_text">
                Ҳар қандай дезинфексиянинг асосий вазифаси инфексиялар ва
                касалликларга олиб келиши мумкин бўлган хавфли
                микроорганизмларни йўқ қилишдир. Дезинфексия чоралари бўш жойни
                моғор, вирус, чириётган ва бактериялардан тозалайди. Жараён
                атроф-муҳитни патоген организмлардан тозалайди.Агар ўзингизни
                ёмон ҳис қилсангиз, чарчоқ ёки сабабсиз заифлашсангиз керак.
              </p>
            </div>
          </div>
          <div data-aos="fade-right" className="xizmatlar_card">
            <img
              src={tarakan}
              alt=""
              className="xizmatlar_img"
            />
            <div className="xizmatlar_right">
              <h4 className="xizmatlar_title">
                Дезинсексия - ҳашаротларни йўқ қилиш
              </h4>
              <p className="xizmatlar_text">
                Кўп одамлар биринчи навбатда 'дезинфестатсия' сўзини исталмаган
                қўшниларидан - чойшаблар, ҳамамбöcеклер, чумолилар ва бошқа
                ҳашаротлардан халос бўлиш ёлини қидирганда дуч келишади.
                Уларнинг ўзлари йўқимсиз ва улар ҳам маълум инфектсия
                ташувчилари. Дезинсексия - бу ҳашаротларни: чивинлар, чивинлар,
                чойшаблар, тараканлар, куя, шомил, қобиқ қўнғизлари, ёғоч
                битлари ва бошқа судралиб юрувчи ва учувчи жонзотларни йўқ
                қилиш.
              </p>
            </div>
          </div>
          <div data-aos="fade-right" className="xizmatlar_card">
            <img
              src={sichqon}
              alt=""
              className="xizmatlar_img"
            />
            <div className="xizmatlar_right">
              <h4 className="xizmatlar_title">
                Дератизатсия - кемирувчиларни йўқ қилиш.
              </h4>
              <p className="xizmatlar_text">
                Тошкентда дератизатсия кемирувчиларни йўқ қилишга қаратилган
                комплекс чора-тадбирларнинг бутун мажмуасидир. Маълумки,
                кемирувчилар жуда қаттиқ жонзотлар бўлиб, улар турли хил хавфли
                таъсирларга дош берадилар. Шунинг учун уларни йўқ қилиш учун бир
                қатор усуллардан фойдаланиш керак. Дератизатсия Тошкент шаҳрида
                кемирувчилар пайдо боʻлган жойларда: коʻп қаватли уйлар,
                омборлар, доʻконлар, умумий овқатланиш корхоналари амалга
                оширилади.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
