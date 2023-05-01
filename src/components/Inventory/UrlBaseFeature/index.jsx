import React from "react";
import Admonition from "@theme/Admonition";

export default function UrlBaseFeature() {
  return (
    <Admonition type="info" icon="💡" title="URL BASE">
      <p style={{ fontWeight: "bold" }}>http://[Server]:3001/</p>
    </Admonition>
  );
}
