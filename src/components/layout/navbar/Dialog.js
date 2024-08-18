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

  const width = 504;
  const height = 712.8;

  return (
    <dialog
      id="profile"
      className="flex place-content-center justify-center overflow-hidden rounded-lg outline-none"
      onClick={(e) => closeModal(e)}
      style={{ width: width * 2 }}
    >
      <Flipbook width={width} height={height} />
      <style jsx>
        {`
          dialog::backdrop {
            background: rgba(0, 0, 0, 0.5);
          }
          dialog:not([open]) {
            opacity: 0;
          }
        `}
      </style>
    </dialog>
  );
}
