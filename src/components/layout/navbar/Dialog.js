import Flipbook from "@/components/index/Flipbook";
import React from "react";

export default function Dialog() {
  function closeModal(e) {
    const modal = document.getElementById("profile");
    const dialogDimensions = modal.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      modal.close();
    }
  }

  return (
    <dialog
      id="profile"
      className="p-4 rounded-xl shadow-xl outline-none !fixed"
      onClick={(e) => closeModal(e)}
    >
      <h2 className="text-2xl font-semibold text-center">
        Our Company Profile
      </h2>
      <div className="mt-4 overflow-hidden w-auto h-auto">
        <Flipbook />
      </div>
      <style jsx>
        {`
          dialog::backdrop {
            background: rgba(0, 0, 0, 0.5);
          }
        `}
      </style>
    </dialog>
  );
}
