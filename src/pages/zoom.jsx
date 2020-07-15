import React, { useEffect } from "react";
import Layout from "../components/Layout";

const Zoom = () => {
  const url = "https://zoom.us/j/94358416673";
  useEffect(() => {
    setTimeout(() => {
      if (typeof window !== "undefined") {
        window.location.href = url;
      }
    }, 300);
  }, []);
  return (
    <Layout>
      <div className="full-window flex">
        <a className="btn btn-primary" href={url}>
          Entrar a ZOOM
        </a>
      </div>
    </Layout>
  );
};

export default Zoom;
