import React from "react";
import { useColorMode } from "@docusaurus/theme-common";
import database_dark from "@site/static/img/inventory/inventory-database-dark.png";
import database_light from "@site/static/img/inventory/inventory-database-light.png";

export default function InventoryDataBaseImageFeature() {
  const { colorMode } = useColorMode();
  return (
    <img
      src={
        colorMode === "dark" ? database_dark : database_light
      }
    />
  );
}
