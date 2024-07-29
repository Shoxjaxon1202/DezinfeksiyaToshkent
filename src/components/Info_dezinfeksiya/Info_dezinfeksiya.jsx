import React, { Component } from "react";
import "./info_dezinfeksiya.scss";
import okajonim from "../../img/okajonim.png";
import axios from "axios";
import { Bounce, toast } from "react-toastify";
export default class Info_dezinfeksiya extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      tel: "",
    };
  }

  handleValue = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const token = "7232269128:AAHZIjx7GIn1Sr8A413W7VMysW4m24r1EJo";
    const chatId = "6575316231";
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    axios({
      url: url,
      method: "post",
      data: {
        chat_id: chatId,
        text: this.state.name + " " + this.state.tel,
      },
    }).then(data => {
      toast.success("Malumotlaringiz jo'natildi. Siz bilan bog'lanamiz")
    })
      .catch((error) => {
        toast.error("Malumot jo'natishda xatolik")
      });

    this.setState({
      name: "",
      tel: "",
    });
  };
  render() {
    return (
      <div className="info">
        <div data-aos="fade-right" className="info_left">
          <form onSubmit={this.handleSubmit} id="myForm">
            <h1 className="info_title">Малумотингизни қолдиринг</h1>
            <input
            className="info_input"
              onChange={this.handleValue}
              placeholder="Исмингиз"
              type="text"
              value={this.state.name}
              id="input1"
              name="name"
              required
            />
            <input
            className="info_input"
              onChange={this.handleValue}
              placeholder="+998-90-123-45-67"
              type="tel"
              value={this.state.tel}
              id="input2"
              name="tel"
              required
            />
            <button className="info_btn" type="submit">
              Юбориш
            </button>
          </form>
        </div>
        <div className="info_right">
          <img src={okajonim} alt="" className="info_img" />
        </div>
      </div>
    );
  }
}
