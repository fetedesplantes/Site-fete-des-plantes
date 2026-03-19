export default function sitemap() {
  const baseUrl = "https://www.fetedesplantesbarbirey.fr";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/presentation`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/exposants`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/galerie`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
  ];
}