import React, { forwardRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";
// import pdfFile from "../../../public/pdf/rekaz-profil.pdf";

// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const width = 400;
const height = 285;

const Pages = forwardRef((props, ref) => {
  return (
    <div className="demoPage" ref={ref}>
      <div>{props.children}</div>
    </div>
  );
});

Pages.displayName = "Pages";

export default function Flipbook() {
  const [numPages, setNumPages] = useState();

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="h-screen w-screen flex flex-col gap-5 justify-center items-center bg-gray-900 overflow-hidden">
      <h1 className="text-3xl text-white text-center font-bold">
        FlipBook-Rekaz
      </h1>
      <HTMLFlipBook width={width} height={height}>
        {[...Array(numPages).keys()].map((pNum) => (
          <Pages key={pNum} number={pNum + 1}>
            <Document
              file={`/pdf/rekaz-profil.pdf`}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page
                pageNumber={pNum + 1}
                width={400}
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
            </Document>
          </Pages>
        ))}
      </HTMLFlipBook>
    </div>
  );
}
