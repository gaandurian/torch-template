import React from "react";

export function MainPageTitle({ title, children }) {
  return <h1 style={{ color: "#666", display:'inline-block' }}>{title || children}</h1>;
}

export function SegmentTitle({ title, children }) {
  return (
    <h2 style={{ marginTop: 0, color: "#666", fontSize: "1.2rem", display: 'inline-block' }}>
      {title || children}
    </h2>
  );
}
