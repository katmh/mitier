import Head from "next/head";
import CONFIG from "../config";

const META = CONFIG.META;

const SEO = () => {
  return (
    <Head>
      <title>{META.TITLE}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <meta property="og:title" content={META.TITLE} />
      <meta property="og:description" content={META.DESCRIPTION} />
      <meta property="og:image" content={META.IMAGE_URL} />
      <meta property="og:url" content={META.URL} />
      <meta name="twitter:card" content="summary_large_image" />

      <meta property="og:site_name" content={META.SITE_NAME} />
      <meta name="twitter:image" content={META.IMAGE_URL} />
      <meta name="twitter:image:alt" content={META.IMAGE_ALT_TEXT} />
    </Head>
  );
};

export default SEO;
