import React, { useState } from "react";
import Layout from "../../components/Layout";
import MiniCard from "../../components/MiniCard";
const Form = () => {
  const [data, setData] = useState({
    tienda: "",
    admin: "",
    nombre: "",
    negocio: "",
    email: "",
    fecha: "",
  });
  const change = (e) => {
    const name = e.target.name;
    let newData = { ...data };
    newData[name] = e.target.value;
    setData(newData);
  };
  return (
    <Layout className="FormEntrega">
      <MiniCard title="Generador de link de Entrega de sitio web">
        <br />
        <label htmlFor="">
          Link de tienda online
          <input
            onChange={change}
            value={data.tienda}
            className="input"
            type="text"
            name="tienda"
          />
        </label>
        <br />
        <label htmlFor="">
          Link de administrador de tienda online
          <input
            onChange={change}
            value={data.admin}
            className="input"
            type="text"
            name="admin"
          />
        </label>
        <br />
        <label htmlFor="">
          Nombre del responsable
          <input
            onChange={change}
            value={data.nombre}
            className="input"
            type="text"
            name="nombre"
          />
        </label>
        <br />
        <label htmlFor="">
          Nombre del negocio
          <input
            onChange={change}
            value={data.negocio}
            className="input"
            type="text"
            name="negocio"
          />
        </label>
        <br />
        <label htmlFor="">
          Email del responsable
          <input
            onChange={change}
            value={data.email}
            className="input"
            type="text"
            name="email"
          />
        </label>
        <br />
        <label htmlFor="">
          Fecha de comienzo de afiliación
          <input
            onChange={change}
            value={data.fecha}
            className="input"
            type="text"
            name="fecha"
          />
        </label>
        <br />
        <p style={{ wordBreak: "break-word", maxWidth: 250 }} className="link">
          {`https://whatshop.digital/entrega/?tienda=${data.tienda}&admin=${data.admin}&nombre=${data.nombre}&email=${data.email}&fecha=${data.fecha}&negocio=${data.negocio}`.replace(
            / /g,
            "%20"
          )}
        </p>
      </MiniCard>
    </Layout>
  );
};

export default Form;
