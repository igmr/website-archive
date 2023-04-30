import React from "react";
import { useColorMode } from "@docusaurus/theme-common";
import banner_dark from "@site/static/img/inventory/inventory-banner-dark.png";
import banner_light from "@site/static/img/inventory/inventory-banner-light.png";

export default function InventoryBannerImageFeature() {
  const { colorMode } = useColorMode();
  return <img src={colorMode === "dark" ? banner_dark : banner_light} />;
}