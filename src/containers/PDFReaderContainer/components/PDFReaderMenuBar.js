import React from "react";
import ic_logo_white from "../assets/ic_logo_white.png";
import ic_upload from "../assets/ic_upload.png";
import "../styles/PDFReaderMenuBar.sass";
import PDFReaderMenuItem from "../components/PDFReaderMenuItem";

class PDFReaderMenuBar extends React.Component {
  inputOpenFileRef;

  constructor(props) {
    super(props);
    this.inputOpenFileRef = React.createRef();
    this.state = {
      files: []
    };
  }

  chooseFile = () => {
    this.inputOpenFileRef.current.click();
  };

  didChooseFile = async e => {
    const { files } = this.state;
    if (e.target.files.length > 0) {
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      const chosenFile = {
        url: URL.createObjectURL(e.target.files[0]),
        name: e.target.files[0].name,
        data: formData,
        selected: true
      };
      this.props.onSelect(chosenFile);
      const unselectedFiles = [...files];
      unselectedFiles.forEach((file, index) => {
        files[index].selected = false;
      });
      this.setState({
        files: [chosenFile, ...unselectedFiles]
      });
    }
  };

  onSelectItem = selectedIndex => {
    const files = [...this.state.files];
    files.forEach((file, index) => {
      files[index].selected = false;
      if (index === selectedIndex) {
        files[index].selected = true;
      }
    });
    this.setState({
      files
    });
  };

  render() {
    const { files } = this.state;
    return (
      <div className="menu-bar">
        <img className="menu-logo" src={ic_logo_white} alt="logo" />
        <h4 className="menu-files">FILES</h4>
        <div className="menu-list">
          {files.map((file, index) => {
            return (
              <PDFReaderMenuItem
                key={index}
                file={file}
                onSelectItem={() => this.onSelectItem(index)}
              />
            );
          })}
        </div>
        <div className="menu-upload" onClick={this.chooseFile}>
          <input
            type="file"
            style={{ display: "none" }}
            ref={this.inputOpenFileRef}
            onChange={this.didChooseFile}
          />
          <img src={ic_upload} alt="ic_upload" />
        </div>
      </div>
    );
  }
}

export default PDFReaderMenuBar;
