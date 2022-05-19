import React, { useEffect, useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { makeStyles } from '@mui/styles';

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
const MyEditor = ({setEditorTextLength }) => {
  const classes = useStyles();
  const [editor, setEditor] = useState(EditorState.createEmpty());
  
  const handleReturnTextlength=()=>{
    let EnterText = editor.getCurrentContent().getPlainText('').length
    setEditorTextLength(EnterText)
}
const onEditorStateChange = (editorState) => {
    const text =  editor.getCurrentContent().getPlainText('')
    if ( text.length <1500) {
      setEditor(editorState)
    } else {
       return 'handled'
    }
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
        onEditorStateChange={onEditorStateChange}
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
