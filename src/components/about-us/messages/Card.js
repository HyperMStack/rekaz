import React from "react";

export default function Card({ text, className }) {
  return (
    <div
      className={`${className} bg-black/75 text-white text-center content-center m-6 h-52 p-4 rounded-lg lg:w-1/2 lg:h-32`}
    >
      {text}
    </div>
  );
}
