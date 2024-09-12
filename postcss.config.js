import purgecss from "@fullhuman/postcss-purgecss";

export default {
  plugins: [
    purgecss({
      content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx,html}"],
      safelist: {
          standard: [":host",
              "badge",
              "text-bg-primary",
              "text-bg-secondary",
              "text-bg-success",
              "text-bg-danger",
              "text-bg-warning",
              "text-bg-info",
              "text-bg-light",
              "text-bg-dark"


          ], // Safelist patterns
      },
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
  ],
};
