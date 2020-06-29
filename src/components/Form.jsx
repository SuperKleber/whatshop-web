import React from "react";

const Form = () => {
  return (
    <div className="flex-column">
      <label htmlFor="name">
        <span>Nombre y apellido</span>
        <input id="name" name="name" type="text" />
      </label>

      <label htmlFor="">
        <span>¿Qué vende?</span>
        <input type="text" />
      </label>
    </div>
  );
};

export default Form;
