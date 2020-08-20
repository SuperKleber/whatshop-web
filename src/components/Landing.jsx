import React, { useState, useRef } from "react";
import Carousel from "../components/Carousel";
import MiniCard from "../components/MiniCard";
import ReactPixel from "react-facebook-pixel";
import { FaWhatsapp, FaPeopleCarry } from "react-icons/fa";
import { FiLoader } from "react-icons/fi";
import { MdWeb } from "react-icons/md";
import { GoPrimitiveDot } from "react-icons/go";
import { GiPayMoney, GiHeartBottle } from "react-icons/gi";

import {
  AiOutlineRise,
  AiOutlineCodeSandbox,
  AiOutlineFieldTime,
} from "react-icons/ai";
import { MdSettings } from "react-icons/md";
import { RiFacebookCircleLine } from "react-icons/ri";
import { Link } from "gatsby";
import FormWhatsapp from "./FormWhatsapp";

const Landing = () => {
  const slides = [
    {
      img: "/img/productos.png",
      title: "Catálogo de productos",
      description:
        "Sus clientes pueden ver la lista de productos con sus respectivos precios y descripciones",
    },
    {
      img: "/img/carrito-de-compras.png",
      title: "Carrito de compras",
      description:
        "Sus clientes podrán seleccionar sus productos, seleccionar cantidades o variantes de productos (talla, tamaño, color)",
    },
    {
      img: "/img/whatsapp-shop-message.png",
      title: "Pedidos por whatsapp",
      description:
        "Al finalizar la compra a usted le llegará un mensaje de whatsapp con el pedido (detallado) de su cliente.",
    },
  ];
  const allPlus = [
    {
      icon: GoPrimitiveDot,
      title: "Simple y al grano",
      description:
        "Tus clientes quieren comprar y tu quieres vender, la mayoría de tiendas online dan rodeos y tienen elementos innecesarios",
    },
    {
      icon: MdWeb,
      color: "#4285f4",
      title: "Tu propio sitio web",
      description:
        "Es tu propia tienda online individual y privada, tendrás tu propio dominio (www.ejemplo.com)",
    },
    {
      icon: FaWhatsapp,
      color: "#25d366",
      title: "Simple Whatsapp",
      description:
        "Deja los sistemas complicados, whatsapp es la forma más sencilla de comunicarse con los clientes",
    },
    {
      icon: AiOutlineCodeSandbox,
      title: "Simple administración",
      description: "Sube tus productos de forma simple.",
    },
    {
      icon: FiLoader,
      title: "Sitio web veloz",
      description:
        "La mayoría de sitios web cargan lento, tenemos el mejor puntaje de velocidad 100/100 según Google Page Insights",
    },
    {
      icon: GiPayMoney,
      title: "Económico",
      description:
        "Una tienda online de calidad se encuentra entre 400$ 600$ | Whatsapp Shop tiene la misma o mejor calidad, cuesta 14$ al mes",
    },
    {
      icon: AiOutlineFieldTime,
      title: "Instalación rápida",
      description:
        "Te lo instalamos en una hora, la mayoría de sitios web tardan semanas en estar listas (y con fallos)",
    },

    {
      icon: AiOutlineRise,
      title: "Escalable",
      description:
        "La cuota mensual incluye mejora constante de su sitio web, es decir cada vez tendrá aún más beneficios",
    },
    {
      icon: MdSettings,
      color: "#ffffff",
      title: "Soporte técnico",
      description: "La cuota mensual incluye soporte técnico de bugs",
    },
    {
      icon: GiHeartBottle,
      color: "#ffffff",
      title: "Contenido exclusivo",
      description:
        "Recibe consejos mensuales sobre cómo vender mejor por internet ",
    },
    {
      icon: RiFacebookCircleLine,
      title: "Pixel de Facebook",
      description:
        "Instalación de tu pixel de Facebook, para medir estadísticas de tu sitio web y hacer re-marketing en Facebook",
    },
    {
      icon: FaPeopleCarry,
      color: "#ffffff",
      title: "Marketing Grupal",
      description:
        "Acceso a pixel de facebook global de todos los usuarios de whatsapp Shop. (opcional, no compartiremos tus datos sin tu perimiso)",
    },
  ];
  const seo = {
    siteTitle: "Tienda Online con Whatsapp Shop",
    siteUrl: "https://kleber.digital/whatsapp-shop",
    siteLanguage: "es",
    siteImage: "/seo-images/whatsappshop-banner.png",
    siteDescription:
      "Vende por internet de forma simple, rápida y de calidad con Whatsapp Shop",
  };

  const how = useRef(null);
  const info = useRef(null);
  return (
    <div>
      <div className="View">
        <h1 className="Title text-center">WHATSHOP</h1>
        <h3 className="text-center">Tienda online + Whatsapp</h3>
        <br />
        <div className="videoContainer">
          <iframe
            onClick={() =>
              ReactPixel.track("ViewContent", { content_name: "demoVideo" })
            }
            className="youtubeDemo"
            src="https://www.youtube.com/embed/3oxUqW8oClQ"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h3>👆Demostración WhatShop👆</h3>
        </div>
        <br />
        <div className="CTA">
          <FormWhatsapp
            classNameButton="cta btn-primary full-width"
            text="Quiero que me expliquen"
          />
          <button
            // href="#how"
            onClick={() => {
              typeof window !== "undefined" &&
                window.scrollTo(0, how.current.offsetTop);

              ReactPixel.track("ViewContent", { content_name: "how" });
            }}
            className="btn-secondary full-width"
          >
            ¿Cómo funciona?
          </button>
        </div>
      </div>
      <div className="View" id="how" ref={how}>
        <h1 className="text-center">¿CÓMO FUNCIONA WHATSHOP?</h1>
        <br />
        <div style={{ width: 300 }}>
          <Carousel slides={slides}></Carousel>
        </div>
        <br />
        <div className="CTA">
          <a
            // href="#info"
            onClick={() => {
              typeof window !== "undefined" &&
                window.scrollTo(0, info.current.offsetTop);
              ReactPixel.track("ViewContent", { content_name: "info" });
            }}
            className="cta btn-primary full-width"
          >
            Ver precio y beneficios
          </a>
        </div>
      </div>
      <div className="Info" id="info" ref={info}>
        <div className="Price">
          <div className="text">
            <h2>97Bs por mes</h2>
            <h5>347Bs primer mes (única vez por instalación)</h5>
          </div>
        </div>
        <div className="CTA">
          {/* <Link to="/contacto" className="full-width">
            <button className="cta btn-primary full-width">¡Lo quiero!</button>
          </Link> */}
          <FormWhatsapp
            classNameButton="cta btn-primary full-width"
            text="Quiero que me expliquen"
          />

          <a
            target="_blank"
            className="full-width"
            onClick={() => {
              ReactPixel.track("ViewContent", { content_name: "demoExample" });
            }}
            href="https://whatshop-muestra.netlify.app/"
          >
            <button className=" btn-secondary full-width">
              Demo ejemplo de un WhatShop
            </button>
          </a>
        </div>
        <div className="Interest">
          {allPlus.map((data, i) => {
            return (
              <div key={i} className="margin-2">
                <MiniCard {...data}></MiniCard>
              </div>
            );
          })}
        </div>
        <div className="Price">
          <div className="text">
            <h2>97Bs por mes</h2>
            <h5>347Bs primer mes (única vez por instalación)</h5>
          </div>
        </div>
        <div className="CTA">
          {/* <Link to="/contacto" className="full-width">
            <button className="cta btn-primary full-width">¡Lo quiero!</button>
          </Link> */}
          <FormWhatsapp
            classNameButton="cta btn-primary full-width"
            text="Quiero que me expliquen"
          />

          <a
            target="_blank"
            className="full-width"
            onClick={() => {
              ReactPixel.track("ViewContent", { content_name: "demoExample" });
            }}
            href="https://whatshop-muestra.netlify.app/"
          >
            <button className=" btn-secondary full-width">
              Demo ejemplo de un WhatShop
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
