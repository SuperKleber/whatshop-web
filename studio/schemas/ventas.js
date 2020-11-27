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
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "whatsapp",
      title: "Whatsapp del cliente",
      type: "number",
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
    },
    {
      name: "endSaleDate",
      title: "Fecha fin de la oferta",
      type: "date",
      options: {
        dateFormat: "DD/MM/YYYY",
      },
    },
  ],
};
