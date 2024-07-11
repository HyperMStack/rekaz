import React from "react";

export default function MemberCard({ image, name, title }) {
  return (
    <div className="m-4 p-4 bg-black/25 flex flex-col items-center rounded-lg md:w-1/3 lg:w-1/4">
      <img
        className="w-64 h-auto rounded-lg mb-4 text-center"
        src={image}
        alt={name}
      />
      <h3 className="text-xl font-semibold mb-2  text-center">{name}</h3>
      <h4 className="text-lg text-gray-500  text-center">{title}</h4>
    </div>
  );
}
