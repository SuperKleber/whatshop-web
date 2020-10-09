import React from "react";
import Layout from "../../components/Layout";
const PedidoToCsv = () => {
  const pedido = `👋 Hola soy Kevin Kleber Rivamontan 
    Deseo estos productos: 
    ---------
    ✅ Galleta con chips de chocolate   (1Bs) 
    📦 unidad: 1
    💵 SubTotal = 1Bs 
    ---------
    ✅ Lasagna   
    
    Tipo de carne: Res (12Bs)
    📦 unidad: 1
    💵 SubTotal = 12Bs
    
    Tipo de carne: Pollo (12Bs)
    📦 unidades: 2
    💵 SubTotal = 24Bs
    ---------
    ✅ Pizza   (10Bs) 
    📦 unidad: 1
    💵 SubTotal = 10Bs 
    ---------
    ✅ Tacón rojo   
    
    Talla: 30 (34Bs)
    📦 unidad: 1
    💵 SubTotal = 34Bs
    
    Talla: 31 (34Bs)
    📦 unidades: 2
    💵 SubTotal = 68Bs
    
    Talla: 33 (34Bs)
    📦 unidades: 2
    💵 SubTotal = 68Bs
    
    ---------
    
    
    💰 Total a pagar: 217.00 Bs`;

  let pedidoCsv = pedido.replace(/---------/gi, "");
  return (
    <Layout>
      <div>Pedidos Csv</div>
      <div>{pedidoCsv} </div>
    </Layout>
  );
};

export default PedidoToCsv;
