﻿import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Wow" },
    { name: "someDing", content: "wut...." },
  ];
};

export default function Wow() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>WOW, AWESOME</h1>
      <ul>
        <li>
          something
        </li>
      </ul>
    </div>
  );
}
