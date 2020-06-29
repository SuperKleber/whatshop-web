import React from "react";
import Helmet from "react-helmet";
import {
  siteTitle,
  siteDescription,
  siteUrl,
  siteLanguage,
  siteImage,
} from "../../config/seo.json";
const Seo = () => {
  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta http-equiv="content-language" content={siteLanguage}></meta>
      <meta name="language" content="Spanish"></meta>
      <meta name="description" content={siteDescription} />
      <meta name="image" content={siteImage} />
      <link rel="canonical" href={siteUrl} />
      {/* OpenGraph tags */}
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:type" content={"website"} />

      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={siteImage} />
    </Helmet>
  );
};

export default Seo;
