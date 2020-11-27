import React, { useState, useRef, useEffect } from "react";
import Layout from "../components/Layout.jsx";
import MiniCard from "../components/MiniCard.jsx";
import ReactPlayer from "react-player";
import { AiOutlinePlayCircle } from "react-icons/ai";
const SalesTemplate = ({ pageContext }) => {
  const [play, setPlay] = useState(true);
  const [showThumbnail, setShowThumbnail] = useState(true);
  const [showActions, setShowActions] = useState(true);
  const {
    clientName,
    email,
    whatsapp,
    businessName,
    businessDescription,
    startSaleDate,
    endSaleDate,
  } = pageContext.sale;
  const what = (e) => {
    console.log(e);
  };

  return (
    <Layout className="salePage">
      <div className="container">
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <div className="content">
          <div className="">Dedicado especialmente para {clientName}</div>
          <Wrapper
            play={!showThumbnail ? play : showThumbnail}
            setPlay={
              !showThumbnail
                ? () => setPlay(!play)
                : () => setShowThumbnail(false)
            }
          >
            <ReactPlayer
              className="videoPlayer"
              url="https://res.cloudinary.com/https-whatshop-digital/video/upload/v1606368504/samples/sea-turtle.mp4"
              // playIcon={<h1>Player</h1>}
              id="video"
              playing={play}
              loop
              playIcon={<Thumbnail {...pageContext.sale} />}
              light={true}
              onProgress={what}
            />
          </Wrapper>
          <br />
          {!showThumbnail && showActions && <Actions />}
        </div>
      </div>
    </Layout>
  );
};
const Wrapper = ({ children, setPlay, play }) => {
  return (
    <div className="wrapper" onClick={setPlay}>
      {children}
      {!play && (
        <div className="playButton">
          <AiOutlinePlayCircle className="icon" />
        </div>
      )}
    </div>
  );
};
const Thumbnail = ({
  clientName,
  email,
  whatsapp,
  businessName,
  businessDescription,
  startSaleDate,
  endSaleDate,
}) => {
  return (
    <div className="thumbnail">
      <div className="info">
        <div className="title">Hola {clientName}</div>
        <br />
        <br />
        <p className="body">
          Soy Kleber.digital creador de <strong>WhatShop</strong> y quiero
          mostrarte un video para explicarte sobre WhatShop
        </p>
      </div>
      <br />
      <div className="btn">
        <AiOutlinePlayCircle className="icon" />
        Comenzar
      </div>
    </div>
  );
};
const Actions = () => {
  return (
    <div className="actions">
      <button className="btn">Reagendar reunión</button>
      <button className="btn-primary">Ver ahora</button>
    </div>
  );
};
export default SalesTemplate;
