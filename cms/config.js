const config = {
  cms_manual_init: true,
  local_backend: true,
  site_url: "https://felipemarcon.com.br",
  display_url: "https://felipemarcon.com.br",
  logo_url: "https://felipemarcon.com.br/src/images/brand.svg",
  backend: {
    name: "github",
    repo: "felipeemarcon/felipeemarcon.github.io",
    branch: "homolog",
  },
  media_folder: "public/img",
  public_folder: "img",
  collections: [
    {
      name: "contactConfigs",
      label: "Contact Configs",
      files: [
        {
          label: "Configs",
          name: "configs",
          file: "content/contact/configs.md",
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
      label: "Social Links",
      name: "social_links",
      folder: "content/global/socialLinks",
      create: true,
      fields: [
        {
          label: "Título",
          name: "title",
          widget: "string",
        },
        {
          label: "Link",
          name: "link",
          widget: "string",
        },
        {
          label: "Icon",
          name: "icon",
          widget: "string",
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
    {
      label: "Projects",
      name: "projects",
      folder: "content/projects",
      create: true,
      fields: [
        {
          label: "Título",
          name: "title",
          widget: "string",
        },
        {
          label: "Date",
          name: "date",
          widget: "datetime",
          default: "",
          date_format: "MMMM YYYY",
          time_format: "",
          format: "LLL",
        },
        {
          label: "Company",
          name: "company",
          widget: "string",
        },
        {
          label: "Tags",
          name: "tags",
          widget: "string",
          hint: "Use hashtag character (#) and separate tags by comma",
        },
        {
          label: "Link",
          name: "link",
          widget: "string",
        },
      ],
    },
    {
      label: "Works",
      name: "works",
      folder: "content/works",
      create: true,
      fields: [
        {
          label: "Company",
          name: "company",
          widget: "string",
        },
        {
          label: "Role",
          name: "role",
          widget: "string",
        },
        {
          label: "Description",
          name: "description",
          widget: "markdown",
        },
        {
          label: "Date Start",
          name: "date_start",
          widget: "datetime",
          default: "",
          date_format: "MMMM YYYY",
          time_format: "",
          format: "LLL",
        },
        {
          label: "Date End",
          name: "date_end",
          widget: "datetime",
          default: "",
          date_format: "MMMM YYYY",
          time_format: "",
          format: "LLL",
        },
      ],
    },
  ],
};

export default config;
