import React, { forwardRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Pages = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div>{props.children}</div>
    </div>
  );
});

Pages.displayName = "Pages";

export default function Flipbook({ width, height, pdfFile }) {
  const [numPages, setNumPages] = useState();
  // const pdfFile = "/pdf/rekaz-portfolio.pdf";

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <HTMLFlipBook
      width={width}
      height={height}
      style={{
        minHeight: 0,
        height: height,
      }}
      maxShadowOpacity={0.2}
    >
      {[...Array(numPages).keys()].map((pNum) => (
        <Pages key={pNum} number={pNum + 1}>
          <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
            <Page
              pageNumber={pNum + 1}
              width={width}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          </Document>
        </Pages>
      ))}
    </HTMLFlipBook>
  );
}
