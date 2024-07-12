import React from "react";
import Card from "./messages/Card";

export default function Messages() {
  return (
    <div className="relative flex flex-col gap-8 lg:gap-2 overflow-hidden lg:my-24">
      <div className="z-10 lg:translate-x-[15%]">
        {cards.map((item, index) => (
          <Card key={index} text={item.text} />
        ))}
      </div>
    </div>
  );
}

const cards = [
  {
    text: `We serve our clients through an open book approach to the building process. We aim to be the best construction company for our clients by exceeding their expectations in quality work and customer service.`,
  },
  {
    text: `We serve our employees by providing a supportive and safe work environment. We aim to be the best in the industry in employee training and benefits.`,
  },
  {
    text: `We serve our peers by always being professional and collaborative. We aim to be the best partner in building by listening and communicating effectively to solve problems and work efficiently.`,
  },
];
