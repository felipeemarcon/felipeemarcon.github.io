const path = require("path");

module.exports = {
  target: "serverless",
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      const fallback = config.resolve.fallback;
      fallback.fs = false;
    }
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.md$/,
        use: "frontmatter-markdown-loader",
      }
    );

    return config;
  },
};
