import React, { useState, useRef, useEffect } from "react";
import Carousel from "../components/Carousel";
import MiniCard from "../components/MiniCard";
import ReactPixel from "react-facebook-pixel";
import { FaWhatsapp, FaPeopleCarry, FaAndroid } from "react-icons/fa";
import { FiLoader } from "react-icons/fi";
import { MdWeb } from "react-icons/md";
import { GoPrimitiveDot } from "react-icons/go";

import { GiPayMoney, GiHeartBottle } from "react-icons/gi";
import { SiTiktok } from "react-icons/si";

import publicIp from "public-ip";
import axios from "axios";
import {
  AiOutlineRise,
  AiOutlineCodeSandbox,
  AiOutlineFieldTime,
} from "react-icons/ai";
import { BsFileEarmarkSpreadsheet } from "react-icons/bs";
import { MdSettings } from "react-icons/md";
import { RiFacebookCircleLine } from "react-icons/ri";
import { Link } from "gatsby";
import FormWhatsapp from "./FormWhatsapp";
import countapi from "countapi-js";
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
        "Tus clientes quieren comprar y tu quieres vender, la mayoría de tiendas online dan rodeos y tienen elementos innecesarios, WhatShop va al grano.",
    },
    {
      icon: MdWeb,
      color: "#4285f4",
      title: "Tu propio sitio web",
      description:
        "Es tu propia tienda online individual y privada, no es una plataforma donde hay varios negocios, es una plataforma dedicada unicamente para tu negocio con tu logo y nombre",
    },
    {
      icon: FaWhatsapp,
      color: "#25d366",
      title: "Simple Whatsapp",
      description:
        "Deja los sistemas complicados, whatsapp es la forma más sencilla de comunicarse con los clientes, whatShop permite que los pedidos te llegan al whatsapp",
    },
    {
      icon: FaAndroid,
      color: "#25d366",
      title: "App Progresiva PWA",
      description:
        "WhatShop también te permite tener tu propia aplicación móvil",
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
        "La mayoría de sitios web cargan lento, WhatShop es instantáneo y permite una navegación cómoda",
    },
    // {
    //   icon: GiPayMoney,
    //   title: "Económico",
    //   description:
    //     "Una tienda online de calidad se encuentra entre 400$ 600$ | Whatsapp Shop tiene la misma o mejor calidad, cuesta 14$ al mes",
    // },
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
        "Otros servicios ofrecen una tienda online que nunca más será actualizada, WhatShop cada vez tiene más beneficios y al mismo precio",
    },
    {
      icon: MdSettings,
      color: "#ffffff",
      title: "Soporte técnico",
      description: "Soporte técnico de bugs y asesoría",
    },
    {
      icon: BsFileEarmarkSpreadsheet,
      color: "#ffffff",
      title: "Conecta Google Sheet",
      description:
        "Todos tus pedidos se registrarán automáticamente en una hoja de Google Sheet (excel)",
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
      title: "Multi Líneas Whatsapp",
      description:
        "Con WhatShop una misma tienda online puede recibir pedidos a distintos números de whatsapp, muy útil para negocios con varios vendedores",
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
  const [countryCode, setCountryCode] = useState(false);
  useEffect(() => {
    // const a = async () => {
    //   let geo = geoIpCountry.lookup(await publicIp.v4());
    //   console.log(await geo);
    // };
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        setCountryCode(data.country_code);
      })
      .catch((error) => {
        console.log(error);
      });

    if (typeof window !== "undefined") {
      const hostname = (window.location && window.location.hostname) || false;
      if (hostname) {
        countapi
          .visits(hostname)
          .then((result) => {
            console.log(result);
          })
          .catch((e) => console.log(e));
      }
    }
  }, []);
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
            src="https://www.youtube.com/embed/zYOztd2ci1k"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <br />

          <h3>👆 Video explicativo </h3>
        </div>
        <br />
        <div className="CTA">
          <FormWhatsapp
            classNameButton="cta btn-primary full-width"
            text={`Quiero que me expliquen`}
          />
          <br />
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
          {/* <button
            // href="#how"
            onClick={() => {
              typeof window !== "undefined" &&
                window.scrollTo(0, how.current.offsetTop);

              ReactPixel.track("ViewContent", { content_name: "how" });
            }}
            className="btn-secondary full-width"
          >
            ¿Cómo funciona?
          </button> */}
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
        {/* <PriceAndCta /> */}
        <PriceAndCta countryCode={countryCode} />
        <div className="Interest">
          {allPlus.map((data, i) => {
            return (
              <div key={i} className="margin-2">
                <MiniCard {...data}></MiniCard>
              </div>
            );
          })}
        </div>
        <PriceAndCta countryCode={countryCode} />
      </div>
      <a
        href="https://www.tiktok.com/@whatshop.digital"
        target="_blank"
        className="tiktok"
      >
        <SiTiktok className="icon" />
      </a>
    </div>
  );
};

const PriceAndCta = ({ countryCode }) => {
  let planes = [
    {
      title: "Plan mensual",
      price: "22$USD / mes",
      img: "/img/luna.png",
      list: [
        "Sin límite de productos",
        "Tienda online + PWA (aplicación móvil)",
        "Actualizaciones y mejoras constantes",
        "Hasta 2 líneas de Whatsapp",
        "Dominio gratuito .netlify.app",
      ],
      href: "https://kleber.digital/productos/whatshop-suscripcion",
    },
    {
      title: "Plan anual",
      price: "197$USD / año",
      img: "/img/asteroide.png",
      tag: "ahorra 25%",
      list: [
        "Todo lo del plan mensual",
        "Dominio .com .net .org etc (por un año)",
        "Hasta 7 líneas de Whatsapp",
        "Incluyen las actualizaciones y soporte técnico",
      ],
      href: "https://kleber.digital/productos/whatshop-suscripcion",
    },
    {
      title: "Plan permanente",
      price: "347$USD",
      img: "/img/sol.png",
      tag: "sin mensualidades",
      list: [
        "Todo lo del plan anual",
        "Líneas de Whatsapp Ilimitadas",
        "Incluyen las actualizaciones y soporte técnico",
      ],
      href: "https://kleber.digital/productos/whatshop",
    },
  ];
  if (countryCode == "BO") {
    planes = [
      {
        title: "Plan mensual",
        price: "154Bs / mes",
        img: "/img/luna.png",
        list: [
          "Sin límite de productos",
          "Tienda online + PWA (aplicación móvil)",
          "Actualizaciones y mejoras constantes",
          "Hasta 2 líneas de Whatsapp",
          "Dominio gratuito .netlify.app",
        ],
      },
      {
        title: "Plan anual",
        price: "1358Bs / año",
        tag: "Ahorra 25%",
        img: "/img/asteroide.png",
        list: [
          "Todo lo del plan mensual",
          "Dominio .com .net .org etc (por un año)",
          "Hasta 5 líneas de Whatsapp",
          "Actualizaciones y mejoras constantes",
        ],
      },
      {
        title: "Plan permanente",
        price: "2392Bs",
        tag: "sin mensualidades",
        img: "/img/sol.png",
        list: [
          "Todo lo del plan anual",
          "Líneas de Whatsapp Ilimitadas",
          "Incluyen las actualizaciones y soporte técnico",
        ],
      },
    ];
  }
  return (
    <>
      <div className="planes">
        {planes.map(({ title, price, img, list, tag, href }, i) => {
          return (
            <div className="plan" key={i}>
              <div
                className="container"
                style={{ paddingBottom: href ? 35 : "" }}
              >
                <div className="title">{title}</div>

                <div className="price">{price}</div>
                <div className="imgContainer">
                  <img src={img} alt={title} className="img" />
                </div>
                <ul className="list">
                  {list.map((item, i) => {
                    return (
                      <li className="item" key={i}>
                        {item}
                      </li>
                    );
                  })}
                </ul>
                {tag && <div className="tag">{tag}</div>}
                {/* <div className="cta">
                  <FormWhatsapp
                    classNameButton="cta btn-primary full-width"
                    text={`Quiero que me expliquen`}
                  />
                </div> */}
                {href && (
                  <a
                    href={href}
                    target="_blank"
                    className="btn-primary "
                    style={{ marginTop: "auto" }}
                  >
                    ⭐ Comprar Plan ~(˘▾˘~)
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <br />

      <div className="CTA">
        {/* {countryCode == "BO" && (
          <FormWhatsapp
            classNameButton="cta btn-primary full-width"
            text={`Quiero que me expliquen`}
          />
        )} */}
        <FormWhatsapp
          classNameButton="cta btn-primary full-width"
          text={`Quiero que me expliquen`}
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
      <div className="tos">
        <Link to="/tos" style={{ fontSize: "0.7em" }}>
          {" "}
          Antes de adquirir el servicio lea <br /> los Términos de uso{" "}
          <span style={{ color: "#00ffec" }}>click aquí</span>
        </Link>

        <br />
        <br />
      </div>
    </>
  );
};

export default Landing;
