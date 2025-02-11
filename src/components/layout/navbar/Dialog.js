import Flipbook from "@/components/index/Flipbook";
import React from "react";

export default function Dialog({ file }) {
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

  const regularWidth = 490;
  const regularHeight = 693;

  return (
    <>
      {/* regular screens */}
      <dialog
        id="profile"
        className={`hidden md:flex place-content-center justify-center overflow-hidden rounded-lg outline-none md:w-[980px]`}
        onClick={(e) => closeModal(e)}
      >
        <Flipbook
          width={regularWidth}
          height={regularHeight}
          pdfFileLink={file}
        />
        <style jsx>
          {`
            dialog {
              transition: all 0.2s linear;
            }
            dialog::backdrop {
              background: rgba(0, 0, 0, 0.5);
            }
            dialog:not([open]) {
              opacity: 0;
              height: 0;
            }
          `}
        </style>
      </dialog>
    </>
  );
}
