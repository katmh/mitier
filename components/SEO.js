import Head from "next/head";

const META = {
  title: `MITier: Tier rank MIT classes`,
  description: `All in the title`,
  url: `https://mitier.vercel.app`,
  siteName: `MITier`,
  image: `https://mitier.vercel.app/screenshot.jpg`,
  imageAlt: `Example tier list of MIT classes`,
};

const SEO = () => {
  return (
    <Head>
      <title>{META.title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <meta property="og:title" content={META.title} />
      <meta property="og:description" content={META.description} />
      <meta property="og:image" content={META.image} />
      <meta property="og:url" content={META.url} />
      <meta name="twitter:card" content="summary_large_image" />

      <meta property="og:site_name" content={META.siteName} />
      <meta name="twitter:image" content={META.image} />
      <meta name="twitter:image:alt" content={META.imageAlt} />
    </Head>
  );
};

export default SEO;
