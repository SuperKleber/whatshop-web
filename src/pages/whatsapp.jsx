import React, { useEffect } from "react";
import Layout from "../components/Layout";
import ReactPixel from "react-facebook-pixel";
// import CircularProgress from "@material-ui/core/CircularProgress";
// import { Container, Box, Typography } from "@material-ui/core";
const Whatsapp = ({ location }) => {
  const url = new URL(location.href);
  const message = url.searchParams.get("message") || "";

  //   const message = "Hola, vi su anuncio, quiero más infomación.";
  const messageWhatsapp = message.replace(/ /gi, "%20");
  useEffect(() => {
    ReactPixel.track("Contact", {
      type: "whatsapp",
    });
    setTimeout(() => {
      if (typeof window !== "undefined") {
        window.location.href = `https://api.whatsapp.com/send?phone=59170657034&text=${messageWhatsapp}`;
      }
    }, 300);
  }, []);

  return (
    <Layout>
      <h1>Whatsapp</h1>
    </Layout>
  );
};
export default Whatsapp;
