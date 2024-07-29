import React, { Component } from "react";
import "./services.scss";
import tarakan1 from "../../img/klapalar.jpg";
import tarakan2 from "../../img/tarakan.jpg";
import tarakan3 from "../../img/chayon.jpg";
import tarakan4 from "../../img/kemiruvchilar.jpg";
import tarakan5 from "../../img/burga.jpg";
export default class Services extends Component {
  render() {
    return (
      <div className="services">
        <h1 className="services_title">Хизмат тури</h1>
        <div className="services_cards">
          <div data-aos="fade-right" className="services_top">
            <div className="services_card">
              <h1 className="services_subtitle">КЛАПАЛАР</h1>
              <p className="services_text">
                Улар тўшакда, юмшоқ мебелда, тўқимачиликда, ешик ромлари ва
                дераза ромлари остида яшайдилар. Улар одамлар ва иссиқ қонли
                ҳайвонларнинг қони билан озиқланади. Аллергия ва оғир психологик
                ноқулайликни қўзғатинг...
              </p>
              <div className="services_card_end">
                <button className="navbar_btn services_btn">Богланиш</button>
                <img src={tarakan1} alt="" className="services_img" />
              </div>
            </div>
            <div className="services_card">
              <h1 className="services_subtitle">ТАРАКАНЛАР</h1>
              <p className="services_text">
                Улар патогенларни олиб юрадилар. Улар ёриқларда, таглик тагида,
                мебел орқасида, ҳаммом остида, шкафлар остида ва ҳоказоларда
                яшайдилар. Улар озиқ-овқат, маиший чиқиндилар, чарм буюмлар ва
                қоғоз билан озиқланадилар.
              </p>
              <div className="services_card_end">
                <button className="navbar_btn services_btn">Богланиш</button>
                <img src={tarakan2} alt="" className="services_img" />
              </div>
            </div>
            <div className="services_card">
              <h1 className="services_subtitle">ЧАЁН</h1>
              <p className="services_text">
                Ҳашаротлар ва арахнидлар билан озиқланадиган иссиқликни яхши
                кўрадиган жонзотлар. Улар омборларда ва уйларда яшашлари мумкин,
                лекин кўпинча улар ёғоч биноларда топилади ...
              </p>
              <div className="services_card_end">
                <button className="navbar_btn services_btn">Богланиш</button>
                <img src={tarakan3} alt="" className="services_img" />
              </div>
            </div>
          </div>
          <div data-aos="fade-right" className="services_bottom">
            <div className="services_card">
              <h1 className="services_subtitle">КЕМИРУВЧИЛАР</h1>
              <p className="services_text">
                Енг кенг тарқалган каламушлар ва сичқонлар. Улар патогенларни
                олиб юради, барча сиртларда ишлайди, девор ва шифтларда ўтиш
                жойларини яратади, структуранинг...
              </p>
              <div className="services_card_end">
                <button className="navbar_btn services_btn">Богланиш</button>
                <img src={tarakan4} alt="" className="services_img" />
              </div>
            </div>
            <div className="services_card">
              <h1 className="services_subtitle">БУРГАЛАР</h1>

              <p className="services_text">
                Улар уй ҳайвонлари танасига кириб, қўшнилардан кўчиб кетишади.
                Улар юмшоқ мебеллар, кўрпа-тўшаклар, гиламлар, юмшоқ ўйинчоқлар,
                таглик тагида ва дераза ва ешик ромларида яшайдилар. Улар ...
              </p>
              <div className="services_card_end">
                <button className="navbar_btn services_btn">Богланиш</button>
                <img src={tarakan5} alt="" className="services_img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
