import NextHead from "next/head";

export const AppHead = ({ title, description, slug }) => {
  return (
    <NextHead>
      <title>{`${title} | CodeGrid`}</title>
      <meta
        property="og:url"
        content={`http://localhost:3000/articles/${slug}`}
      />
      <meta property="og:title" content={`${title} | CodeGrid`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="http://localhost:3000/ogp.png" />
    </NextHead>
  );
};
