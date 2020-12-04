import React, { useState, useRef, useEffect } from "react";
import Layout from "../components/Layout.jsx";
import MiniCard from "../components/MiniCard.jsx";
import ReactPlayer from "react-player";
import { AiOutlinePlayCircle } from "react-icons/ai";
import Countdown from "react-countdown";
import whatsappApi from "../../lib/whatsappApi";
import slug from "../../lib/slug";
import countapi from "countapi-js";
import { Link } from "gatsby";
const SalesTemplate = ({ pageContext }) => {
  const [play, setPlay] = useState(true);
  const [showThumbnail, setShowThumbnail] = useState(true);
  const [showActions, setShowActions] = useState(false);
  const [accept, setAccept] = useState(false);
  const [controls, setControls] = useState(false);
  const [endSale, setEndSale] = useState(false);
  const [startSale, setStartSale] = useState(true);
  const {
    id,
    clientName,
    email,
    whatsapp,
    businessName,
    businessDescription,
    startSaleDate,
    endSaleDate,
  } = pageContext.sale;

  const handleIntroActions = ({ playedSeconds }) => {
    if (accept) {
      if (playedSeconds > 600) {
        setControls(true);
        if (typeof window !== "undefined") {
          const hostname =
            (window.location && window.location.hostname) || false;
          if (hostname) {
            countapi
              .hit(hostname, `${slug(`${id}-controls`)}`)
              .then((result) => {
                console.log("controls:");
                console.log(result);
              })
              .catch((e) => console.log(e));
          }
        }
      }
      if (playedSeconds > 2100) {
        setControls(true);
        setShowActions(true);
        if (typeof window !== "undefined") {
          const hostname =
            (window.location && window.location.hostname) || false;
          if (hostname) {
            countapi
              .hit(hostname, `${slug(`${id}-action`)}`)
              .then((result) => {
                console.log("action:");
                console.log(result);
              })
              .catch((e) => console.log(e));
          }
        }
      }
    } else {
      if (playedSeconds > 20) {
        setShowActions(true);
      }
    }
  };
  const toAccept = () => {
    setAccept(true);
    setShowActions(false);
  };
  const handlePlay = () => {
    if (!showThumbnail) {
      setPlay(!play);
    } else {
      setShowThumbnail(false);
      if (typeof window !== "undefined") {
        const hostname = (window.location && window.location.hostname) || false;
        if (hostname) {
          countapi
            .hit(hostname, `${slug(`${id}-play`)}`)
            .then((result) => {
              console.log("Play:");
              console.log(result);
            })
            .catch((e) => console.log(e));
        }
      }
    }
  };
  const startDate = new Date(`${startSaleDate}T00:00:01`);
  const getDay = startDate.getDay();
  const day =
    getDay == 1
      ? "Lunes"
      : getDay == 2
      ? "Martes"
      : getDay == 3
      ? "Miércoles"
      : getDay == 4
      ? "Jueves"
      : getDay == 5
      ? "Viernes"
      : getDay == 6
      ? "Sábado"
      : getDay == 7
      ? "Domingo"
      : "El día indicado";
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hostname = (window.location && window.location.hostname) || false;
      if (hostname) {
        countapi
          .hit(hostname, slug(`${id}`))
          .then((result) => {
            console.log("visitas:");
            console.log(result);
          })
          .catch((e) => console.log(e));

        countapi
          .get(hostname, `${slug(`${id}-play`)}`)
          .then((result) => {
            console.log("play:");
            console.log(result);
            if (result.value > 1) {
              setControls(true);
            }
          })
          .catch((e) => console.log(e));
        countapi
          .get(hostname, `${slug(`${id}-controls`)}`)
          .then((result) => {
            console.log("controls:");
            console.log(result);
            if (result.value > 1) {
              setControls(true);
            }
          })
          .catch((e) => console.log(e));
        countapi
          .get(hostname, `${slug(`${id}-action`)}`)
          .then((result) => {
            console.log("accept:");
            console.log(result);
            if (result.value > 1) {
              setAccept(true);
              setControls(true);
              setShowActions(true);
              setShowThumbnail(false);
            }
          })
          .catch((e) => console.log(e));
      }

      // startDate

      if (startDate.getTime() > Date.now()) {
        setStartSale(false);
      }
    }
  }, []);
  return (
    <Layout
      seo={{
        title: `${businessName || clientName} + WhatShop ⭐`,
        description: `Dedicado especialmente para ${clientName} ❤️`,
      }}
      className="salePage"
    >
      <div className="container">
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <div className="content">
          {startSale ? (
            <>
              {!showThumbnail && (
                <div className="detail">
                  Dedicado especialmente para {clientName}
                </div>
              )}
              <Wrapper
                onClick={handlePlay}
                play={!showThumbnail ? play : showThumbnail}
              >
                {accept ? (
                  <ReactPlayer
                    className="videoPlayer"
                    url="https://res.cloudinary.com/https-whatshop-digital/video/upload/v1607077790/whatshop-video-venta-convert_tggfqj.mp4"
                    // url="/video/whatshop-video-venta.mp4"
                    id="video"
                    playing={play}
                    loop
                    // playIcon={<Thumbnail {...pageContext.sale} />}
                    // light={true}
                    onProgress={handleIntroActions}
                    controls={controls}
                  />
                ) : (
                  <ReactPlayer
                    className="videoPlayer"
                    url="https://res.cloudinary.com/https-whatshop-digital/video/upload/v1607076652/intro_thdst3.mp4"
                    // url="/video/intro.mp4"
                    id="video"
                    playing={play}
                    loop
                    playIcon={<Thumbnail {...pageContext.sale} />}
                    light={true}
                    onProgress={handleIntroActions}
                    controls={controls}
                  />
                )}
              </Wrapper>
              <br />
              {!showThumbnail && showActions && (
                <Actions
                  toAccept={toAccept}
                  accept={accept}
                  endSaleDate={endSaleDate}
                  endSale={endSale}
                  setEndSale={setEndSale}
                />
              )}
            </>
          ) : (
            <div className="noStartSale">
              <div>
                <div className="title">Presentación aún disponible</div>
                <div className="emoji">¯\_(ツ)_/¯</div>
                <div className="body">
                  Vuelve el {day}{" "}
                  {`${startDate.getDate()}/${
                    startDate.getMonth() + 1
                  }/${startDate.getFullYear()}`}
                </div>
              </div>
              <br />
              <div>
                <div className="detail">
                  {clientName} También estamos entusiasmados por esta
                  presentación si dispones de 1 hora de tu tiempo hoy podemos
                  reagendar la video-presentación para hoy mismo
                </div>
                <br />
                <a
                  href={whatsappApi(
                    59175591674,
                    "Quiero reagendar la video presentación para hoy"
                  )}
                  target="_blank"
                  className="btn"
                >
                  Reagendar para hoy
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};
const Wrapper = ({ children, play, onClick }) => {
  return (
    <div className="wrapper" onClick={onClick}>
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

        <ReactPlayer
          width={100}
          height={100}
          className="videoFace"
          url="https://res.cloudinary.com/https-whatshop-digital/video/upload/c_scale,h_176/v1607076648/face_gb9wia.mp4"
          // url="/video/face.mp4"
          playing
          muted
          loop
          id="videoFace"
        />
        <br />
        <p className="body">
          Soy Kleber.digital creador de <strong>WhatShop</strong> y quiero
          mostrarte un video para explicarte cómo WhatShop puede ser útil para
          tu negocio {businessName || ""}
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
const Actions = ({ toAccept, accept, endSaleDate, setEndSale, endSale }) => {
  const limitDate = new Date(`${endSaleDate}T23:59:59`);
  if (limitDate.getTime() < Date.now()) {
    setEndSale(true);
  }
  return accept ? (
    <>
      {endSale ? (
        <div className="accept">
          <h2>LA OFERTA CADUCÓ 💔</h2>
          <br />
          <h4>Pero aún puede adquier nuestros productos 😌</h4>
          <br />
          <div className="buttons">
            <a
              target="_blank"
              href="https://kleber.digital/productos/whatshop-suscripcion"
              className="btn"
            >
              WhatShop suscripción
            </a>

            <a
              target="_blank"
              href="https://kleber.digital/productos/whatshop"
              className="btn"
            >
              WhatShop Permanente
            </a>
            <a
              target="_blank"
              href="https://kleber.digital/productos/extension-whatsend"
              className="btn"
            >
              WhatSend
            </a>
            <a
              target="_blank"
              href="https://kleber.digital/productos/whatsapp-numbers-recolector-extension-chrome"
              className="btn"
            >
              Whatsapp Collector
            </a>
          </div>
        </div>
      ) : (
        <div className="accept">
          <div className="buttons">
            <a
              target="_blank"
              href={whatsappApi(
                59175591674,
                "👋Hola deseo adquir la oferta ya mismo para el *plan mensual* "
              )}
              className="btn"
            >
              Plan Mensual
            </a>
            <a
              target="_blank"
              href={whatsappApi(
                59175591674,
                "👋Hola deseo adquir la oferta ya mismo para el *plan anual* "
              )}
              className="btn btn-primary"
            >
              Plan Anual
            </a>
            <a
              target="_blank"
              href={whatsappApi(
                59175591674,
                "👋Hola deseo adquir la oferta ya mismo para el *plan permanente*"
              )}
              className="btn"
            >
              Plan Permanente
            </a>
          </div>
          <div className="countdownContainer">
            <h5>Tiempo límite de oferta:</h5>
            <div className="countdown">
              <Countdown date={limitDate.getTime()} daysInHours />
            </div>
          </div>
        </div>
      )}
    </>
  ) : (
    <div className="actions">
      <a
        href={whatsappApi(
          59175591674,
          "Quiero reagendar la video presentación"
        )}
        target="_blank"
        className="btn"
      >
        Reagendar
      </a>
      <button onClick={toAccept} className="btn-primary">
        Ver ahora
      </button>
    </div>
  );
};
export default SalesTemplate;
