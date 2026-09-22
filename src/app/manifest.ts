import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PanTech Software",
    short_name: "PanTech",
    description: "Ideas. Technology. Growth.",
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#060c13",
    icons: [
      {
        src: "/images/brand/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/images/brand/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
