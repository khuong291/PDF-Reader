import React from "react";
import icon from "../assets/ic_document.png";
import "../styles/PDFReaderMenuItem.sass";

const PDFReaderMenuItem = props => (
  <div
    className={props.file.selected ? "menu-item-highlighted" : "menu-item"}
    onClick={props.onSelectItem}
  >
    <img src={icon} alt="logo" />
    <div>
      <h3>{props.file.name}</h3>
      <h4>Nam vel porta velit</h4>
    </div>
  </div>
);

export default PDFReaderMenuItem;
