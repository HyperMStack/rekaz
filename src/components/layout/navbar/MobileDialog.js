import Flipbook from "@/components/index/Flipbook";
import React from "react";

export default function MobileDialog({ file }) {
  function closeModal(e) {
    const mobileModal = document.getElementById("mobileProfile");
    const mobileDialogDimensions = mobileModal.getBoundingClientRect();
    if (
      e.clientX < mobileDialogDimensions.left ||
      e.clientX > mobileDialogDimensions.right ||
      e.clientY < mobileDialogDimensions.top ||
      e.clientY > mobileDialogDimensions.bottom
    ) {
      mobileModal.close();
    }
  }

  const mobileWidth = 350;
  const mobileHeight = 495;

  return (
    <>
      {/* mobile screens */}
      <dialog
        id="mobileProfile"
        className={`flex md:hidden place-content-center justify-center overflow-hidden rounded-lg outline-none w-[350px]`}
        onClick={(e) => closeModal(e)}
      >
        <Flipbook width={mobileWidth} height={mobileHeight} pdfFile={file} />
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
