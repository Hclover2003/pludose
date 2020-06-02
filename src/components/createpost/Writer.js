import React, { Component } from "react";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import Editor from "draft-js-plugins-editor";

class Writer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: null,
    };
    if (this.state.content != null) {
      this.state.editorState = EditorState.createWithContent(
        convertFromRaw(JSON.parse(this.state.content))
      );
    } else {
      this.state.editorState = EditorState.createEmpty();
    }
  }
  getContent = (content) => {
    return JSON.stringify(convertToRaw(content));
  };
  onChange = (editorState) => {
    const contentState = editorState.getCurrentContent();
    const content = this.getContent(contentState);
    this.setState({ editorState, content });
  };

  sendInfo = () => {
    if (this.props.onChange) {
      this.props.onChange(this.state);
    }
  };

  render() {
    if (!this.state.editorState) {
      return (
        <div>
          <h3>Loading...</h3>
        </div>
      );
    } else {
      return (
        <div>
          <Editor
            onChange={this.onChange}
            editorState={this.state.editorState}
          ></Editor>
          <div className="row">
            <div className="col s12 l4">
              <button
                type="button"
                onClick={this.sendInfo}
                className="btn blue lighten-1 z-depth-0"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Writer;
