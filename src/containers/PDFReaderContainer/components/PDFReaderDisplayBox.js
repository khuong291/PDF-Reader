import React from "react";
import icon from "../assets/ic_document_big.png";
import "../styles/PDFReaderDisplayBox.sass";

const PDFReaderDisplayBox = props => (
  <div className="display-box">
    <div>
      <img src={icon} alt="logo" />
      <h2>{props.chosenFile.name}</h2>
    </div>
    <embed
      src={props.chosenFile.url}
      alt="pdf"
      pluginspage="http://www.adobe.com/products/acrobat/readstep2.html"
    />
  </div>
);

export default PDFReaderDisplayBox;
