import React from "react";

export default function Ul({ children }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>{children}</ul>
  );
}
