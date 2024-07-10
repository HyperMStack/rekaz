import React from "react";
import MemberCard from "./team/MemberCard";

export default function Team() {
  return (
    <div className="mt-8">
      <h1 className="text-4xl font-semibold m-4">Our Team</h1>
      <p className="text-base m-4">
        At the heart of Rekaz is a dedicated team who ignites innovation and
        embodies the core values that define our company.
      </p>
      {teamMembers.map((member, index) => (
        <MemberCard
          key={index}
          image={member.image}
          name={member.name}
          title={member.title}
        />
      ))}
    </div>
  );
}

const teamMembers = [
  {
    image: "/images/about/team/team-2.jpg",
    name: "عبد العزيز سلطان حارب الغافري",
    title: "مدير تنفيذي",
  },
  {
    image: "/images/about/team/team-1.jpg",
    name: "الحسين بن علي الرمحي",
    title: "مدير تنفيذي",
  },
  {
    image: "/images/about/team/team-3.jpg",
    name: "ممدوح عجان الحديد",
    title: "مدير المشاريع",
  },
  {
    image: "/images/about/team/team-4.jpg",
    name: "مصطفى عجان الحديد",
    title: "المهندس الإنشائي",
  },
  {
    image: "/images/about/team/team-5.jpg",
    name: "أحمد جاسم",
    title: "مهندس ديكور",
  },
  {
    image: "/images/about/team/team-6.jpg",
    name: "محمد حيدر الفرج",
    title: "مدير قسم التصميم",
  },
  {
    image: "/images/about/team/team-7.jpg",
    name: "عادل عجان الحديد",
    title: "مهندس كهرباء وميكانيك",
  },
  {
    image: "/images/about/team/team-8.jpg",
    name: "محمد عجان الحديد",
    title: "المهندس الإنشائي",
  },
];
