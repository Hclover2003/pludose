import { Editor, EditorState, convertFromRaw } from "draft-js";
import React, { Component } from "react";
import { connect } from "react-redux";

class PostContent extends Component {
  render() {
    const post = this.props.post.content;
    const contentState = convertFromRaw(JSON.parse(post));
    const editorState = EditorState.createWithContent(contentState);
    return (
      <div>
        <Editor editorState={editorState} readOnly={true} />
      </div>
    );
  }
}

export default PostContent;
