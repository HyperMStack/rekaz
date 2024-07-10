import React from "react";

export default function Card({ text }) {
  return (
    <div className="bg-black/75 text-white text-center content-center m-6 h-52">
      {text}
    </div>
  );
}
