import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import MiniCard from "../../components/MiniCard";
import { Link } from "gatsby";
const Entrega = ({ location }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    let url;
    let urlData = {};
    try {
      url = new URL(location.href);
      urlData.tienda = url.searchParams.get("tienda") || "/";
      urlData.negocio = url.searchParams.get("negocio") || "";
      urlData.nombre = url.searchParams.get("nombre") || "";
      urlData.fecha = url.searchParams.get("fecha") || "";
      urlData.admin = url.searchParams.get("admin") || "/";
      urlData.email = url.searchParams.get("email") || "";
      setData(urlData);
    } catch (error) {}
  }, []);
  return (
    <Layout
      className="Entrega"
      seo={{
        title: `Bienvenido ${data.negocio}`,
        description: `Instrucciones para ingresar a su tienda online WhatShop`,
      }}
    >
      <div className="View">
        <MiniCard title={`Bienvenido ${data.nombre}`}>
          {/* <h1>Bienvenido {data.nombre} </h1> */}
          <h4 className="link">
            WhatShop + {data.negocio} juntos creceremos ❤️⭐
          </h4>
          <h4>Su afiliación comienza el {data.fecha}</h4>
        </MiniCard>
        <br />
        <div className="flex-column">
          <MiniCard title="Este es tu sitio web">
            <a href={data.tienda} target="_blank" className="link">
              {data.tienda}
            </a>
            <br />
            <br />
            {/* <button className="btn">Copiar</button> */}
          </MiniCard>
          <br />
          <MiniCard title="Tu administrador">
            <a href={data.admin} target="_blank" className="link">
              {data.admin}
            </a>
            <br />
            <br />
            {/* <button className="btn">Copiar</button> */}
            <br />
            <h4>Enviamos la invitación de acceso a este correo</h4>
            <h5 className="link">{data.email}</h5>
          </MiniCard>
          <br />
          <MiniCard title="Tutoriales">
            <p>Podrás ver los tutoriales del administrador aquí</p>
            <br />
            <iframe
              className="iframe"
              src="https://www.youtube.com/embed/videoseries?list=PLyVV7u9b35Kk6RR4xzYr3J1WnNiCr5yUL"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <br />
            <br />
            <a
              href="https://www.youtube.com/playlist?list=PLyVV7u9b35Kk6RR4xzYr3J1WnNiCr5yUL"
              target="_blank"
              className="btn"
            >
              Ver en Youtube
            </a>
          </MiniCard>
          <br />
          <MiniCard title="Grupo Whatsapp">
            <p>Únete al grupo de Whatsapp para recibir noticias</p>
            <br />

            <a
              href="https://chat.whatsapp.com/JJoASbeKsgYCgwqtWn8TyO"
              target="_blank"
              className="btn"
            >
              Unirse a WhatShop Noticias
            </a>
          </MiniCard>
          <br />
          <MiniCard title="Tutoriales">
            <p>Podrás ver los tutoriales del administrador aquí</p>
            <br />
            <iframe
              className="iframe"
              src="https://www.youtube.com/embed/videoseries?list=PLyVV7u9b35Kk6RR4xzYr3J1WnNiCr5yUL"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <br />
            <br />
            <a
              href="https://www.youtube.com/playlist?list=PLyVV7u9b35Kk6RR4xzYr3J1WnNiCr5yUL"
              target="_blank"
              className="btn"
            >
              Ver en Youtube
            </a>
          </MiniCard>
          <br />
          <MiniCard title="¡Recomendaciones!">
            <ul>
              <li>
                Realizar todo en un navegador Google Chrome o FireFox. No usar
                Internet Explorer, Safari o el navegador predeterminado de
                Android
              </li>
              <li>
                No el correo electrónico sin haber realizado las instrucciones
                indicadas en el primer video de los tutoriales
              </li>
              <li>
                No abrir el administrador sin haber realizado las instrucciones
                indicadas en el primer video de los tutoriales
              </li>
              <li>
                No compartir el administrador con nadie que no sea de confianza
                Al continuar con el servicio usted indica haber leído y aceptado
                nuestros{" "}
              </li>
            </ul>
            <br />
            <h3>
              Al Continuar el servicio usted acepta los{" "}
              <Link className="link" to="/tos/">
                Términos de uso
              </Link>{" "}
            </h3>
          </MiniCard>
        </div>
        <br />
      </div>
    </Layout>
  );
};

export default Entrega;
