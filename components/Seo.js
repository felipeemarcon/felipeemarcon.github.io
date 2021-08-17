import config from "@src/siteConfig";
import PropTypes from "prop-types";

// Next Components
import Head from "next/head";

// Images
import faviconImage from "@static/favicon.png";

export default function SEO({ description, title }) {
  const siteTitle = config.title;

  const { src: favicon } = faviconImage;

  return (
    <Head>
      <title>{`${title} | ${siteTitle}`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={config.keywords} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={config.social.twitter} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />

      <link rel="apple-touch-icon" sizes="57x57" href={favicon} />
      <link rel="apple-touch-icon" sizes="114x114" href={favicon} />
      <link rel="apple-touch-icon" sizes="72x72" href={favicon} />
      <link rel="apple-touch-icon" sizes="144x144" href={favicon} />
      <link rel="apple-touch-icon" sizes="60x60" href={favicon} />
      <link rel="apple-touch-icon" sizes="120x120" href={favicon} />
      <link rel="apple-touch-icon" sizes="76x76" href={favicon} />
      <link rel="apple-touch-icon" sizes="152x152" href={favicon} />
      <link rel="apple-touch-icon" sizes="180x180" href={favicon} />
      <link rel="icon" type="image/png" href={favicon} sizes="192x192" />
      <link rel="icon" type="image/png" href={favicon} sizes="160x160" />
      <link rel="icon" type="image/png" href={favicon} sizes="96x96" />
      <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
      <link rel="icon" type="image/png" href={favicon} sizes="32x32" />
      <meta name="msapplication-TileColor" content="#fff" />
      <meta name="msapplication-TileImage" content={favicon} />
    </Head>
  );
}

SEO.defaultProps = {
  title: "",
  description: "",
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
