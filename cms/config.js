const config = {
  cms_manual_init: true,
  publish_mode: "editorial_workflow",
  backend: {
    name: "github",
    repo: "felipeemarcon/felipeemarcon.github.io",
    branch: "homolog",
  },
  media_folder: "public/img",
  public_folder: "img",
  collections: [
    {
      name: "globalConfigs",
      label: "Global Configs",
      files: [
        {
          label: "Configs",
          name: "configs",
          file: "content/global/configs.md",
          fields: [
            {
              label: "Contact Email",
              name: "contact_email",
              widget: "string",
            },
          ],
        },
      ],
    },
    {
      name: "homeSections",
      label: "Home Sections",
      files: [
        {
          label: "Hero Section",
          name: "hero",
          file: "content/home/sections/hero.md",
          fields: [
            {
              label: "Hero Description",
              name: "description",
              widget: "markdown",
            },
          ],
        },
      ],
    },
  ],
};

export default config;
