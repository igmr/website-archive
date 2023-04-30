import React from "react";
import { useColorMode } from "@docusaurus/theme-common";
import structure_project_dark from "@site/static/img/inventory/structure-project-dark.png";
import structure_project_light from "@site/static/img/inventory/structure-project-light.png";

export default function StructureProjectImageFeature() {
  const { colorMode } = useColorMode();
  return (
    <img
      src={
        colorMode === "dark" ? structure_project_dark : structure_project_light
      }
    />
  );
}
