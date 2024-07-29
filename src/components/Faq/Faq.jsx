import React, { Component } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import "./faq.scss";
export default class Faq extends Component {
  render() {
    return (
      <div className="faq_content"> 
        <div className="faq">
          <div className="faq_left">
            <h2 className="faq_title">ФАҚ</h2>
          </div>
          <div className="faq_right">
            <Accordion className="acordion">
              <AccordionSummary 
                className="summary"
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header">
                Зараркунандаларни йўқ қилиш қандай амалга оширилади?
              </AccordionSummary>
              <AccordionDetails className="acardion_text">
                Махсус асбоб-ускуналар ёрдамида инсектитсидлар аерозолли туманга
                айланади ва девор қоғози, деворлар ва тахта плиталари орасидаги
                енг кичик бўшлиқларга, кўзга кўринмас ҳашаротлар учун потентсиал
                'яшириш жойлари' га киради.
              </AccordionDetails>
            </Accordion>
            <Accordion className="acordion">
              <AccordionSummary 
                className="summary"
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header">
                Сиз фойдаланадиган дорилар хавфлими?
              </AccordionSummary>
              <AccordionDetails className="acardion_text">
                Препаратлар одамлар, уй ҳайвонлари ва ўсимликлар учун хавфли
                емас. Аммо даволанишдан кейин хонани 40 дақиқа давомида
                вентилятсия қилиш керак.
              </AccordionDetails>
            </Accordion>
            <Accordion className="acordion" defaultExpanded>
              <AccordionSummary 
                className="summary"
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header">
                Менга уйимни даволанишга тайёрлашнинг қандайдир усули керакми?
              </AccordionSummary>
              <AccordionDetails className="acardion_text">
                Асосан, идиш-товоқ ва шахсий гигиена воситаларини изолятсия
                қилишингиз керак. Даволаш пайтида уй ҳайвонлари ҳам изолятсия
                қилиниши керак. Мебел ёки маиший техникани кўчиришга ҳожат йўқ.
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    );
  }
}
