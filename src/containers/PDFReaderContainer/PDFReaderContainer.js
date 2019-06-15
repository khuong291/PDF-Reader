import React from "react";
import PDFReaderMenuBar from "./components/PDFReaderMenuBar";
import PDFReaderDisplayBox from "./components/PDFReaderDisplayBox";
import "./styles/PDFReaderContainer.sass";

class ReaderZoneContainer extends React.Component {
  state = {
    chosenFile: undefined
  };

  onSelect = chosenFile => {
    this.setState(
      {
        chosenFile: undefined
      },
      () => {
        this.setState({
          chosenFile
        });
      }
    );
  };

  render() {
    const { chosenFile } = this.state;
    return (
      <div className="pdf-reader-container">
        <PDFReaderMenuBar onSelect={this.onSelect} />
        {chosenFile && <PDFReaderDisplayBox chosenFile={chosenFile} />}
      </div>
    );
  }
}

export default ReaderZoneContainer;
