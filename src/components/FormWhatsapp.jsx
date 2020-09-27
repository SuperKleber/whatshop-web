import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";
import ReactPixel from "react-facebook-pixel";
const FormWhatsapp = ({ classNameButton, text }) => {
  const [input, setInput] = useState("");
  const [click, setClick] = useState(false);
  return (
    <div className="FormWhatsapp">
      {click ? (
        <div className="form">
          <h3 className="label">¿Qué vendes?</h3>
          <div className="flex">
            <input
              placeholder="ejemplo: ropa, comida, suplementos, minimarket"
              className="input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <a
              onClick={() => ReactPixel.track("Contact")}
              href={`https://api.whatsapp.com/send?phone=59175591674&text=%F0%9F%91%8BHola%20me%20gustar%C3%ADa%20que%20me%20expliquen%20mejor%20sobre%20WhatShop,%20esto%20es%20lo%20que%20vendo:%20${input.replace(
                " ",
                "%20"
              )}`}
              target="_blank"
              className="whatsappButton"
            >
              <FaWhatsapp className="icon" />
            </a>
          </div>
          <br />
        </div>
      ) : (
        <button onClick={() => setClick(true)} className={classNameButton}>
          {text}
        </button>
      )}
    </div>
  );
};

export default FormWhatsapp;
