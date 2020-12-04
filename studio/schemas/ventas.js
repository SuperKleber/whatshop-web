import { FaUserTag } from "react-icons/fa";
export default {
  name: "sales",
  title: "Ventas",
  type: "document",
  icon: FaUserTag,
  fields: [
    {
      name: "clientName",
      title: "Nombre del cliente",
      description: "El nombre del cliente",
      type: "string",
      validation: (Rule) =>
        Rule.required().error(
          "Todos tenemos un nombre, pon uno porfis (•◡•) /"
        ),
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "country",
      title: "País",
      type: "string",
    },
    {
      name: "whatsapp",
      title: "Whatsapp del cliente",
      type: "number",
      validation: (Rule) =>
        Rule.required().error(
          "Necesito poder contactar con el cliente (°ロ°)☝"
        ),
    },
    {
      name: "businessName",
      title: "Nombre del negocio",
      type: "string",
    },
    {
      name: "businessDescription",
      title: "Descripción del negocio",
      type: "text",
      rows: 2,
    },
    {
      name: "startSaleDate",
      title: "Fecha de inicio de etapada de venta",
      type: "date",
      options: {
        dateFormat: "DD/MM/YYYY",
      },
      validation: (Rule) =>
        Rule.required().error(
          "(~˘▾˘)~ Toda historia necesita un comienzo, pon una fecha"
        ),
    },
    {
      name: "endSaleDate",
      title: "Fecha fin de la oferta",
      type: "date",
      options: {
        dateFormat: "DD/MM/YYYY",
      },
      validation: (Rule) =>
        Rule.required().error(
          "Toda historia tiene un final, pon una fecha ~(˘▾˘~)"
        ),
    },
  ],
};
