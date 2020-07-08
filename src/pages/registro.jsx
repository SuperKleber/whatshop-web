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
            minHeight: "99vh",
            maxWidth: "600px",
          }}
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
        >
          Cargando…
        </iframe>
      </div>
    </Layout>
  );
};

export default registro;
