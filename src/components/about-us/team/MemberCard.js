import Image from "next/image";
import React from "react";

export default function MemberCard({ image, name, title }) {
  return (
    <div>
      <div className="h-[28rem] w-72 m-auto flex justify-center">
        <Image
          className="w-auto h-full mb-4 object-cover"
          src={image}
          alt={name}
          width={900}
          height={900}
        />
      </div>
      <h3 className="text-xl font-semibold my-2  text-center">{name}</h3>
      <h4 className="text-lg text-gray-500  text-center">{title}</h4>
    </div>
  );
}
