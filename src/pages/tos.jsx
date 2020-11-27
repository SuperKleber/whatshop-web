import React from "react";
import Layout from "../components/Layout.jsx";
const Tos = () => {
  return (
    <Layout>
      <div>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Términos de servicio de WhatShop</title>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n/* webkit printing magic: print all background colors */\nhtml {\n\t-webkit-print-color-adjust: exact;\n}\n* {\n\tbox-sizing: border-box;\n\t-webkit-print-color-adjust: exact;\n}\n\nhtml,\nbody {\n\tmargin: 0;\n\tpadding: 0;\n}\n@media only screen {\n\tbody {\n\t\tmargin: 2em auto;\n\t\tmax-width: 900px;\n\t\tcolor: rgb(55, 53, 47);\n\t}\n}\n\nbody {\n\tline-height: 1.5;\n\twhite-space: pre-wrap;\n}\n\na,\na.visited {\n\tcolor: inherit;\n\ttext-decoration: underline;\n}\n\n.pdf-relative-link-path {\n\tfont-size: 80%;\n\tcolor: #444;\n}\n\nh1,\nh2,\nh3 {\n\tletter-spacing: -0.01em;\n\tline-height: 1.2;\n\tfont-weight: 600;\n\tmargin-bottom: 0;\n}\n\n.page-title {\n\tfont-size: 2.5rem;\n\tfont-weight: 700;\n\tmargin-top: 0;\n\tmargin-bottom: 0.75em;\n}\n\nh1 {\n\tfont-size: 1.875rem;\n\tmargin-top: 1.875rem;\n}\n\nh2 {\n\tfont-size: 1.5rem;\n\tmargin-top: 1.5rem;\n}\n\nh3 {\n\tfont-size: 1.25rem;\n\tmargin-top: 1.25rem;\n}\n\n.source {\n\tborder: 1px solid #ddd;\n\tborder-radius: 3px;\n\tpadding: 1.5em;\n\tword-break: break-all;\n}\n\n.callout {\n\tborder-radius: 3px;\n\tpadding: 1rem;\n}\n\nfigure {\n\tmargin: 1.25em 0;\n\tpage-break-inside: avoid;\n}\n\nfigcaption {\n\topacity: 0.5;\n\tfont-size: 85%;\n\tmargin-top: 0.5em;\n}\n\nmark {\n\tbackground-color: transparent;\n}\n\n.indented {\n\tpadding-left: 1.5em;\n}\n\nhr {\n\tbackground: transparent;\n\tdisplay: block;\n\twidth: 100%;\n\theight: 1px;\n\tvisibility: visible;\n\tborder: none;\n\tborder-bottom: 1px solid rgba(55, 53, 47, 0.09);\n}\n\nimg {\n\tmax-width: 100%;\n}\n\n@media only print {\n\timg {\n\t\tmax-height: 100vh;\n\t\tobject-fit: contain;\n\t}\n}\n\n@page {\n\tmargin: 1in;\n}\n\n.collection-content {\n\tfont-size: 0.875rem;\n}\n\n.column-list {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n.column {\n\tpadding: 0 1em;\n}\n\n.column:first-child {\n\tpadding-left: 0;\n}\n\n.column:last-child {\n\tpadding-right: 0;\n}\n\n.table_of_contents-item {\n\tdisplay: block;\n\tfont-size: 0.875rem;\n\tline-height: 1.3;\n\tpadding: 0.125rem;\n}\n\n.table_of_contents-indent-1 {\n\tmargin-left: 1.5rem;\n}\n\n.table_of_contents-indent-2 {\n\tmargin-left: 3rem;\n}\n\n.table_of_contents-indent-3 {\n\tmargin-left: 4.5rem;\n}\n\n.table_of_contents-link {\n\ttext-decoration: none;\n\topacity: 0.7;\n\tborder-bottom: 1px solid rgba(55, 53, 47, 0.18);\n}\n\ntable,\nth,\ntd {\n\tborder: 1px solid rgba(55, 53, 47, 0.09);\n\tborder-collapse: collapse;\n}\n\ntable {\n\tborder-left: none;\n\tborder-right: none;\n}\n\nth,\ntd {\n\tfont-weight: normal;\n\tpadding: 0.25em 0.5em;\n\tline-height: 1.5;\n\tmin-height: 1.5em;\n\ttext-align: left;\n}\n\nth {\n\tcolor: rgba(55, 53, 47, 0.6);\n}\n\nol,\nul {\n\tmargin: 0;\n\tmargin-block-start: 0.6em;\n\tmargin-block-end: 0.6em;\n}\n\nli > ol:first-child,\nli > ul:first-child {\n\tmargin-block-start: 0.6em;\n}\n\nul > li {\n\tlist-style: disc;\n}\n\nul.to-do-list {\n\ttext-indent: -1.7em;\n}\n\nul.to-do-list > li {\n\tlist-style: none;\n}\n\n.to-do-children-checked {\n\ttext-decoration: line-through;\n\topacity: 0.375;\n}\n\nul.toggle > li {\n\tlist-style: none;\n}\n\nul {\n\tpadding-inline-start: 1.7em;\n}\n\nul > li {\n\tpadding-left: 0.1em;\n}\n\nol {\n\tpadding-inline-start: 1.6em;\n}\n\nol > li {\n\tpadding-left: 0.2em;\n}\n\n.mono ol {\n\tpadding-inline-start: 2em;\n}\n\n.mono ol > li {\n\ttext-indent: -0.4em;\n}\n\n.toggle {\n\tpadding-inline-start: 0em;\n\tlist-style-type: none;\n}\n\n/* Indent toggle children */\n.toggle > li > details {\n\tpadding-left: 1.7em;\n}\n\n.toggle > li > details > summary {\n\tmargin-left: -1.1em;\n}\n\n.selected-value {\n\tdisplay: inline-block;\n\tpadding: 0 0.5em;\n\tbackground: rgba(206, 205, 202, 0.5);\n\tborder-radius: 3px;\n\tmargin-right: 0.5em;\n\tmargin-top: 0.3em;\n\tmargin-bottom: 0.3em;\n\twhite-space: nowrap;\n}\n\n.collection-title {\n\tdisplay: inline-block;\n\tmargin-right: 1em;\n}\n\ntime {\n\topacity: 0.5;\n}\n\n.icon {\n\tdisplay: inline-block;\n\tmax-width: 1.2em;\n\tmax-height: 1.2em;\n\ttext-decoration: none;\n\tvertical-align: text-bottom;\n\tmargin-right: 0.5em;\n}\n\nimg.icon {\n\tborder-radius: 3px;\n}\n\n.user-icon {\n\twidth: 1.5em;\n\theight: 1.5em;\n\tborder-radius: 100%;\n\tmargin-right: 0.5rem;\n}\n\n.user-icon-inner {\n\tfont-size: 0.8em;\n}\n\n.text-icon {\n\tborder: 1px solid #000;\n\ttext-align: center;\n}\n\n.page-cover-image {\n\tdisplay: block;\n\tobject-fit: cover;\n\twidth: 100%;\n\theight: 30vh;\n}\n\n.page-header-icon {\n\tfont-size: 3rem;\n\tmargin-bottom: 1rem;\n}\n\n.page-header-icon-with-cover {\n\tmargin-top: -0.72em;\n\tmargin-left: 0.07em;\n}\n\n.page-header-icon img {\n\tborder-radius: 3px;\n}\n\n.link-to-page {\n\tmargin: 1em 0;\n\tpadding: 0;\n\tborder: none;\n\tfont-weight: 500;\n}\n\np > .user {\n\topacity: 0.5;\n}\n\ntd > .user,\ntd > time {\n\twhite-space: nowrap;\n}\n\ninput[type="checkbox"] {\n\ttransform: scale(1.5);\n\tmargin-right: 0.6em;\n\tvertical-align: middle;\n}\n\np {\n\tmargin-top: 0.5em;\n\tmargin-bottom: 0.5em;\n}\n\n.image {\n\tborder: none;\n\tmargin: 1.5em 0;\n\tpadding: 0;\n\tborder-radius: 0;\n\ttext-align: center;\n}\n\n.code,\ncode {\n\tbackground: rgba(135, 131, 120, 0.15);\n\tborder-radius: 3px;\n\tpadding: 0.2em 0.4em;\n\tborder-radius: 3px;\n\tfont-size: 85%;\n\ttab-size: 2;\n}\n\ncode {\n\tcolor: #eb5757;\n}\n\n.code {\n\tpadding: 1.5em 1em;\n}\n\n.code > code {\n\tbackground: none;\n\tpadding: 0;\n\tfont-size: 100%;\n\tcolor: inherit;\n}\n\nblockquote {\n\tfont-size: 1.25em;\n\tmargin: 1em 0;\n\tpadding-left: 1em;\n\tborder-left: 3px solid rgb(55, 53, 47);\n}\n\n.bookmark {\n\ttext-decoration: none;\n\tmax-height: 8em;\n\tpadding: 0;\n\tdisplay: flex;\n\twidth: 100%;\n\talign-items: stretch;\n}\n\n.bookmark-title {\n\tfont-size: 0.85em;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\theight: 1.75em;\n\twhite-space: nowrap;\n}\n\n.bookmark-text {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.bookmark-info {\n\tflex: 4 1 180px;\n\tpadding: 12px 14px 14px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n}\n\n.bookmark-image {\n\twidth: 33%;\n\tflex: 1 1 180px;\n\tdisplay: block;\n\tposition: relative;\n\tobject-fit: cover;\n\tborder-radius: 1px;\n}\n\n.bookmark-description {\n\tcolor: rgba(55, 53, 47, 0.6);\n\tfont-size: 0.75em;\n\toverflow: hidden;\n\tmax-height: 4.5em;\n\tword-break: break-word;\n}\n\n.bookmark-href {\n\tfont-size: 0.75em;\n\tmargin-top: 0.25em;\n}\n\n.sans { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"; }\n.code { font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace; }\n.serif { font-family: Lyon-Text, Georgia, YuMincho, "Yu Mincho", "Hiragino Mincho ProN", "Hiragino Mincho Pro", "Songti TC", "Songti SC", "SimSun", "Nanum Myeongjo", NanumMyeongjo, Batang, serif; }\n.mono { font-family: iawriter-mono, Nitti, Menlo, Courier, monospace; }\n.pdf .sans { font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", \'Twemoji\', \'Noto Color Emoji\', \'Noto Sans CJK SC\', \'Noto Sans CJK KR\'; }\n\n.pdf .code { font-family: Source Code Pro, "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace, \'Twemoji\', \'Noto Color Emoji\', \'Noto Sans Mono CJK SC\', \'Noto Sans Mono CJK KR\'; }\n\n.pdf .serif { font-family: PT Serif, Lyon-Text, Georgia, YuMincho, "Yu Mincho", "Hiragino Mincho ProN", "Hiragino Mincho Pro", "Songti TC", "Songti SC", "SimSun", "Nanum Myeongjo", NanumMyeongjo, Batang, serif, \'Twemoji\', \'Noto Color Emoji\', \'Noto Sans CJK SC\', \'Noto Sans CJK KR\'; }\n\n.pdf .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, \'Twemoji\', \'Noto Color Emoji\', \'Noto Sans Mono CJK SC\', \'Noto Sans Mono CJK KR\'; }\n\n.highlight-default {\n}\n.highlight-gray {\n\tcolor: rgb(155,154,151);\n}\n.highlight-brown {\n\tcolor: rgb(100,71,58);\n}\n.highlight-orange {\n\tcolor: rgb(217,115,13);\n}\n.highlight-yellow {\n\tcolor: rgb(223,171,1);\n}\n.highlight-teal {\n\tcolor: rgb(15,123,108);\n}\n.highlight-blue {\n\tcolor: rgb(11,110,153);\n}\n.highlight-purple {\n\tcolor: rgb(105,64,165);\n}\n.highlight-pink {\n\tcolor: rgb(173,26,114);\n}\n.highlight-red {\n\tcolor: rgb(224,62,62);\n}\n.highlight-gray_background {\n\tbackground: rgb(235,236,237);\n}\n.highlight-brown_background {\n\tbackground: rgb(233,229,227);\n}\n.highlight-orange_background {\n\tbackground: rgb(250,235,221);\n}\n.highlight-yellow_background {\n\tbackground: rgb(251,243,219);\n}\n.highlight-teal_background {\n\tbackground: rgb(221,237,234);\n}\n.highlight-blue_background {\n\tbackground: rgb(221,235,241);\n}\n.highlight-purple_background {\n\tbackground: rgb(234,228,242);\n}\n.highlight-pink_background {\n\tbackground: rgb(244,223,235);\n}\n.highlight-red_background {\n\tbackground: rgb(251,228,228);\n}\n.block-color-default {\n\tcolor: inherit;\n\tfill: inherit;\n}\n.block-color-gray {\n\tcolor: rgba(55, 53, 47, 0.6);\n\tfill: rgba(55, 53, 47, 0.6);\n}\n.block-color-brown {\n\tcolor: rgb(100,71,58);\n\tfill: rgb(100,71,58);\n}\n.block-color-orange {\n\tcolor: rgb(217,115,13);\n\tfill: rgb(217,115,13);\n}\n.block-color-yellow {\n\tcolor: rgb(223,171,1);\n\tfill: rgb(223,171,1);\n}\n.block-color-teal {\n\tcolor: rgb(15,123,108);\n\tfill: rgb(15,123,108);\n}\n.block-color-blue {\n\tcolor: rgb(11,110,153);\n\tfill: rgb(11,110,153);\n}\n.block-color-purple {\n\tcolor: rgb(105,64,165);\n\tfill: rgb(105,64,165);\n}\n.block-color-pink {\n\tcolor: rgb(173,26,114);\n\tfill: rgb(173,26,114);\n}\n.block-color-red {\n\tcolor: rgb(224,62,62);\n\tfill: rgb(224,62,62);\n}\n.block-color-gray_background {\n\tbackground: rgb(235,236,237);\n}\n.block-color-brown_background {\n\tbackground: rgb(233,229,227);\n}\n.block-color-orange_background {\n\tbackground: rgb(250,235,221);\n}\n.block-color-yellow_background {\n\tbackground: rgb(251,243,219);\n}\n.block-color-teal_background {\n\tbackground: rgb(221,237,234);\n}\n.block-color-blue_background {\n\tbackground: rgb(221,235,241);\n}\n.block-color-purple_background {\n\tbackground: rgb(234,228,242);\n}\n.block-color-pink_background {\n\tbackground: rgb(244,223,235);\n}\n.block-color-red_background {\n\tbackground: rgb(251,228,228);\n}\n.select-value-color-default { background-color: rgba(206,205,202,0.5); }\n.select-value-color-gray { background-color: rgba(155,154,151, 0.4); }\n.select-value-color-brown { background-color: rgba(140,46,0,0.2); }\n.select-value-color-orange { background-color: rgba(245,93,0,0.2); }\n.select-value-color-yellow { background-color: rgba(233,168,0,0.2); }\n.select-value-color-green { background-color: rgba(0,135,107,0.2); }\n.select-value-color-blue { background-color: rgba(0,120,223,0.2); }\n.select-value-color-purple { background-color: rgba(103,36,222,0.2); }\n.select-value-color-pink { background-color: rgba(221,0,129,0.2); }\n.select-value-color-red { background-color: rgba(255,0,26,0.2); }\n\n.checkbox {\n\tdisplay: inline-flex;\n\tvertical-align: text-bottom;\n\twidth: 16;\n\theight: 16;\n\tbackground-size: 16px;\n\tmargin-left: 2px;\n\tmargin-right: 5px;\n}\n\n.checkbox-on {\n\tbackground-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%2358A9D7%22%2F%3E%0A%3Cpath%20d%3D%22M6.71429%2012.2852L14%204.9995L12.7143%203.71436L6.71429%209.71378L3.28571%206.2831L2%207.57092L6.71429%2012.2852Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E");\n}\n\n.checkbox-off {\n\tbackground-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.75%22%20y%3D%220.75%22%20width%3D%2214.5%22%20height%3D%2214.5%22%20fill%3D%22white%22%20stroke%3D%22%2336352F%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E");\n}\n\t\n',
          }}
        />
        <article
          id="777b50de-2484-4dbb-ba60-20f97c27686a"
          className="page sans"
        >
          <header>
            <div className="page-header-icon undefined">
              <span className="icon">📄</span>
            </div>
            <h1 className="page-title">Términos de servicio de WhatShop</h1>
          </header>
          <div className="page-body">
            <h2 id="25c600c6-baae-4413-9333-956e65ec3820" className>
              Definciones:
            </h2>
            <ul
              id="02b2d1a9-8ed6-41cc-8e7f-b4e0fb3066a3"
              className="bulleted-list"
            >
              <li>Whatshop: servicio de Tienda Online</li>
            </ul>
            <ul
              id="034c453c-ba5d-4380-a3c9-89765afd9a4a"
              className="bulleted-list"
            >
              <li>
                kleber.digital: Consultoría digital administrada por Kevin
                Kleber Rivamontan Alvarado CI: 13316569
              </li>
            </ul>
            <ul
              id="ea0cb3ef-8880-4f92-a67d-eec319846a5a"
              className="bulleted-list"
            >
              <li>
                Afiliado: usuario que adquirió el servicio de WhatShop para su
                tienda online
              </li>
            </ul>
            <h2 id="cf779160-caa8-4337-9ccf-577f7500c0b0" className>
              Prohibiciones de contenido:
            </h2>
            <p id="3eb038e9-e062-4c68-9de5-0ed194674ede" className>
              Estos son el tipo de contenido que los Afiliados no pueden
              publicar en WhatShop
            </p>
            <ul
              id="8f87fe5e-f8bf-435e-adde-f0a38997b4d9"
              className="bulleted-list"
            >
              <li>Armas de fuego</li>
            </ul>
            <ul
              id="cd382b49-e665-434d-8f42-f4823be74cc1"
              className="bulleted-list"
            >
              <li>Armas de objeto corto punzante</li>
            </ul>
            <ul
              id="d18fa864-07af-486a-90c6-deef8df44dcf"
              className="bulleted-list"
            >
              <li>Sustancias estupefacientes ilicitas</li>
            </ul>
            <ul
              id="537f0ba6-bcfe-4c74-8690-d1198b951406"
              className="bulleted-list"
            >
              <li>Fármacos prohibidos sin receta médico</li>
            </ul>
            <ul
              id="2adaf8dc-2f44-4bdb-9a37-0e718b5d287e"
              className="bulleted-list"
            >
              <li>Cualquier material de desnudos o pornografía</li>
            </ul>
            <ul
              id="932449a9-848a-44cb-a34b-56b8f37c63f9"
              className="bulleted-list"
            >
              <li>Tráfico de animales domésticos o silvestres</li>
            </ul>
            <ul
              id="511694fa-dd3a-4812-a0c2-c3340dc72920"
              className="bulleted-list"
            >
              <li>
                Cualquier material ilegal en el Estado Plurinacional de Bolivia
              </li>
            </ul>
            <h2 id="80e3ebc3-e916-4eaf-ae3a-ce42ac1ab729" className>
              Prohibiciones de uso
            </h2>
            <ul
              id="8c8d8b1e-5448-4a1d-9a1e-26e537f3a1aa"
              className="bulleted-list"
            >
              <li>
                El Afiliado declara que no usará WhatShop para estafas de
                internet
              </li>
            </ul>
            <ul
              id="5c64ccc7-e0f5-4593-9086-d623b7664734"
              className="bulleted-list"
            >
              <li>
                El Afiliado se hace responsable de cualquier daño o perjuicio
                provocado por su propia tienda online
              </li>
            </ul>
            <ul
              id="6ca2a116-bb04-4239-b8d4-b7ae013880f4"
              className="bulleted-list"
            >
              <li>
                El Afiliado no revenderá su tienda online proporcionado por
                WhatShop a terceros sin la aprobación de kleber.digital
              </li>
            </ul>
            <h2 id="8b081ac5-996b-489a-a013-e08e298b5d27" className>
              Condiciones:
            </h2>
            <ul
              id="eaded3da-f7e1-4e11-a0dd-637f0d4fd971"
              className="bulleted-list"
            >
              <li>
                El afiliado se hace completamente responsable del contenido del
                sitio web WhatShop: títulos, productos, imágenes, logo, números
                de teléfonos, etc. Haciéndose responsable de cualquier daño o
                perjuicio provocado por los mismos.
              </li>
            </ul>
            <ul
              id="fff28b56-a522-4bce-a994-6f4f6ee4002e"
              className="bulleted-list"
            >
              <li>
                <a href="http://kleber.digital">kleber.digital</a> no se hace
                responsable de cualquier daño o perjuicio que el afiliado haya
                provocado con su tienda online
              </li>
            </ul>
            <ul
              id="e89afa5a-0b99-43e4-9880-b7461d1765a4"
              className="bulleted-list"
            >
              <li>
                <a href="http://kleber.digital">kleber.digital</a> tiene el
                derecho de parar el servicio de la tienda online del afiliado en
                caso de incumplir las prohibiciones declaradas. kleber.digital
                puede parar el servicio ante cualquier situación que
                kleber.digital considere un uso inadecuado de la tienda online
              </li>
            </ul>
            <ul
              id="2c2c188f-a3bb-4fb7-8128-7319d2796531"
              className="bulleted-list"
            >
              <li>
                <a href="http://kleber.digital">kleber.digital</a> Utiliza
                servicios de terceros para ofrecer el servicio de WhatShop, si
                alguno de estos servicios de tercero falla o cambia provocando
                consecuencias inesperadas como fallos en el sitio web,
                kleber.digital no se responsabiliza por dichos fallos, para más
                información revisar los "Términos externos" de este documento
              </li>
            </ul>
            <ul
              id="2c2c188f-a3bb-4fb7-8128-7319d2796531"
              className="bulleted-list"
            >
              <li>
                El afiliado acepta haber leído estos términos de uso antes de
                adquir el servicio WhatShop
              </li>
            </ul>
            <ul
              id="2c2c188f-a3bb-4fb7-8128-7319d2796531"
              className="bulleted-list"
            >
              <li>
                El afiliado debe comunicar para qué utilizará el servicio
                WhatShop y cuya veracidad es completamente responsabilidad del
                afiliado, y da buena fé de usar el servicio respetando los
                términos de Uso, en el caso de que el afiliado inflija estos
                términos de uso kleber.digital se reserva el derecho de
                suspender el servicio de WhatShop al afiliado sin derecho a
                reembolso
              </li>
            </ul>
            <h2 id="25d628ee-46e3-4d61-a9c2-9908e79fffd6" className>
              Términos externos
            </h2>
            <p id="9a548e78-2049-4a93-985a-d84c13bbe32f" className>
              WhatShop utiliza dos servicios principales{" "}
              <a href="https://www.netlify.com/">Netlify</a> y{" "}
              <a href="https://www.sanity.io/">Sanity</a>
            </p>
            <h3 id="4be28224-903a-47e4-9d14-1d077a7a94e1" className>
              Netlify
            </h3>
            <p id="57420cfe-bb78-4e44-ae27-947e63b6cdeb" className>
              es un servicio de servidor para sitio web estáticos,{" "}
            </p>
            <ul
              id="c08844bf-8e4b-4ca4-802a-edbd70d4419e"
              className="bulleted-list"
            >
              <li>
                El afiliado acepta y está consiente que se creó una cuenta en
                este servidor para poder albergar únicamente su sitio web
                WhatShop
              </li>
            </ul>
            <ul
              id="c434d3dd-ddeb-4c96-9217-8aa22db7aa40"
              className="bulleted-list"
            >
              <li>
                El afiliado acepta y está consiente que{" "}
                <a href="http://kleber.digital">kleber.digital</a> se le brindó
                el servicio de instalación y configuración del sitio web en el
                servidor de Netlify a nombre del afiliado.
              </li>
            </ul>
            <ul
              id="3b190629-ee68-46f6-baa6-63bbbbeeb1df"
              className="bulleted-list"
            >
              <li>
                El afiliado da la autorización a{" "}
                <a href="http://kleber.digital">kleber.digital</a> de configurar
                y administrar el servidor del sitio web WhatShop del afiliado{" "}
              </li>
            </ul>
            <ul
              id="80be4cd4-d689-4694-bcd4-11e031d92a77"
              className="bulleted-list"
            >
              <li>
                El afiliado también acepta los términos de servicio de Netlify y
                además se responsabiliza de ellos, link de los términos de
                servicio:{" "}
                <a href="https://www.netlify.com/tos/">
                  https://www.netlify.com/tos/
                </a>
              </li>
            </ul>
            <h3 id="1285e697-6367-4ba7-992c-00fb867efad1" className>
              Sanity
            </h3>
            <p id="be3b311d-eb69-446b-b084-d22944d3b9e9" className>
              Sanity es un servicio de Manejo de Contenido CMS, es decir es el
              servicio que le permite administrar su sitio web
            </p>
            <ul
              id="c465df34-1418-4b07-a122-9fe77c462c6a"
              className="bulleted-list"
            >
              <li>
                El afiliado acepta y está consiente que se creó una cuenta en
                este servicio para poder albergar únicamente su sitio web
                WhatShop
              </li>
            </ul>
            <ul
              id="4fb39c60-d89b-43e9-8eae-f74e63424f36"
              className="bulleted-list"
            >
              <li>
                El afiliado acepta y está consiente que{" "}
                <a href="http://kleber.digital">kleber.digital</a> se le brindó
                el servicio de instalación y configuración del CMS sanity a
                nombre del afiliado.
              </li>
            </ul>
            <ul
              id="834b8eaa-dcaa-4a6e-8332-e7d52b06d354"
              className="bulleted-list"
            >
              <li>
                El afiliado da la autorización a{" "}
                <a href="http://kleber.digital">kleber.digital</a> de configurar
                y administrar el servicio CMS de sanity de su servicio WhatShop
              </li>
            </ul>
            <ul
              id="2ed6a79e-2f87-4fc2-bdd0-0e772f875ec5"
              className="bulleted-list"
            >
              <li>
                El afiliado también acepta los términos de servicio de Sanity y
                además se responsabiliza de ellos, link de los términos de
                servicio:{" "}
                <a href="https://www.sanity.io/legal/tos">
                  https://www.sanity.io/legal/tos
                </a>
              </li>
            </ul>
            <h3 id="1285e697-6367-4ba7-992c-00fb867efad1" className>
              Condiciones de Reembolso
            </h3>
            <p id="be3b311d-eb69-446b-b084-d22944d3b9e9" className>
              Una vez hecho el depósito o transferencia monetaria del servicio
              de WhatShop se tiene un plazo de 48 horas para solicitar un
              reembolso
            </p>
            <ul
              id="c465df34-1418-4b07-a122-9fe77c462c6a"
              className="bulleted-list"
            >
              <li>
                Se reembolsará en el caso de que el servicio WhatShop no
                funcione
              </li>
            </ul>
            <ul
              id="4fb39c60-d89b-43e9-8eae-f74e63424f36"
              className="bulleted-list"
            >
              <li>
                Se reembolsará en el caso de que no se le haya comunicado
                debidamente el funcionamiento de WhatShop
              </li>
            </ul>
            <ul
              id="4fb39c60-d89b-43e9-8eae-f74e63424f36"
              className="bulleted-list"
            >
              <li>
                Se reembolsará en el caso de estar dentro las 48 horas a partir
                del primer pago que se haya realizado
              </li>
            </ul>
            <ul
              id="834b8eaa-dcaa-4a6e-8332-e7d52b06d354"
              className="bulleted-list"
            >
              <li>
                Sólo se reembolsa a los nuevos afiliados, es decir sólo el
                primer pago, los pagos mensuales o anuales no son reembolsables
              </li>
            </ul>
            <ul
              id="2ed6a79e-2f87-4fc2-bdd0-0e772f875ec5"
              className="bulleted-list"
            >
              <li>
                En el caso de infrigir los términos de uso no hay ningún derecho
                a reembolso
              </li>
            </ul>
            <p id="b56cd0fe-1e11-430f-88b4-878a7b6bf633" className></p>
            <p id="9997eedd-5ce3-4d6b-a890-db357306a6b0" className></p>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default Tos;
