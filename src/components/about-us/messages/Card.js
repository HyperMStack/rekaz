import React from "react";

export default function Card({ text, className }) {
  return (
    <div
      className={`${className} border-black border text-center content-center m-6 h-52 p-4 rounded-lg`}
    >
      {text}
    </div>
  );
}
