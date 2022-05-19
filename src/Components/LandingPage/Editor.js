import React, { useEffect, useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { makeStyles } from '@mui/styles';
import draftToHtml from "draftjs-to-html";
const useStyles = makeStyles({
  root: {
    '& .rdw-editor-wrapper': {
      '& .toolbar-class': {
        backgroundColor: '#f3f3f3',
      },
      '& .rdw-editor-main':{
          paddingLeft: '9px',
          marginTop: '-19px'
      }
    },
  },
});
const MyEditor = ({setEditorTextLength, editorTextLength }) => {
  const classes = useStyles();
  const [editor, setEditor] = useState(EditorState.createEmpty());
  
  let EditorArray= draftToHtml(convertToRaw(editor.getCurrentContent()));
  const handleReturnTextlength=()=>{
    let EnterText = EditorArray.replace(/<\/{0,1}[a-z]+>/gi, "").length
  console.log("sfdfdss",editor.getCurrentContent())
    setEditorTextLength(EnterText)
}
useEffect(()=>{
handleReturnTextlength() 
},[editor])
  return (
    <div className={classes.root}>
      <Editor
        editorState={editor}
        toolbarClassName='toolbar-class'
        wrapperClassName='demo-wrapper'
        editorClassName='demo-editor'
        onEditorStateChange={setEditor}
        toolbar={{
          options: ['inline', 'list'],
          blockType: {
            inDropdown: false,
            options: ['bold', 'italic'],
            className: 'blockText',
            dropdownClassName: 'blockTextDown',
          },
        }}
        handleReturnTextlength={handleReturnTextlength}
      />
    </div>
  );
};
export default MyEditor;
