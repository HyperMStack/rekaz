import React from "react";
import bg from "../../../public/images/about/about-us-messages.jpg";
import Card from "./messages/Card";

export default function Messages() {
  return (
    <div
      className="bg-center bg-cover flex flex-col gap-8"
      style={{ backgroundImage: `url(/images/about/about-us-messages.jpg)` }}
    >
      <Card
        text={`We serve our clients through an open book approach to the building
      process. We aim to be the best construction company for our clients by
      exceeding their expectations in quality work and customer service.`}
      />
      <Card
        text={`We serve our employees by providing a supportive and safe work environment. We aim to be the best in the industry in employee training and benefits.`}
      />
      <Card
        text={`We serve our peers by always being professional and collaborative. We aim to be the best partner in building by listening and communicating effectively to solve problems and work efficiently. `}
      />
    </div>
  );
}
