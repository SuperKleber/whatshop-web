import React from "react";
import Helmet from "react-helmet";
import {
  siteTitle,
  siteDescription,
  siteUrl,
  siteLanguage,
  siteImage,
} from "../../config/seo.json";
const Seo = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title ? title : siteTitle}</title>
      <meta http-equiv="content-language" content={siteLanguage}></meta>
      <meta name="language" content="Spanish"></meta>
      <meta
        name="description"
        content={description ? description : siteDescription}
      />
      <meta name="image" content={siteImage} />
      <link rel="canonical" href={siteUrl} />
      {/* OpenGraph tags */}
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title ? title : siteTitle} />
      <meta property="og:type" content={"website"} />

      <meta
        property="og:description"
        content={description ? description : siteDescription}
      />
      <meta property="og:image" content={siteImage} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title ? title : siteTitle} />
      <meta
        name="twitter:description"
        content={description ? description : siteDescription}
      />
      <meta name="twitter:image" content={siteImage} />
    </Helmet>
  );
};

export default Seo;
