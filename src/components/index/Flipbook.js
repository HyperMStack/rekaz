import React, { forwardRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const width = 400;
const height = 285;

const Pages = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
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
    <HTMLFlipBook width={width} height={height} className="relative">
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
  );
}
