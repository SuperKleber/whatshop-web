import React from "react";
import Layout from "../components/Layout";
const registro = () => {
  return (
    <Layout>
      <div className="flex-column-between">
        <iframe
          className="scroll"
          src="https://docs.google.com/forms/d/e/1FAIpQLSc92h5L4Jyjp1jo9O0_1fzcGByBo3MlAa92OtVz5d5wtfth4g/viewform?embedded=true"
          style={{
            width: "100%",
            minHeight: "78vh",
            maxWidth: "600px",
          }}
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
        >
          Cargando…
        </iframe>
        <div className="flex-column-between" style={{ margin: "16px 0" }}>
          <h2>
            Únete a <strong> La Resitencia Digital</strong>
          </h2>
          <br />
          <a
            target="_blank"
            href="https://www.facebook.com/groups/397398570964580"
          >
            <button className="btn-secondary-turquesa">
              Grupo de Facebook
            </button>
          </a>
          <br />
          <a target="_blank" href="https://discord.gg/KkQGWF">
            <button className="btn-secondary-turquesa">
              Server de Discord
            </button>
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default registro;
