import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import { Button, Box } from '@mui/material';
import 'react-quill/dist/quill.snow.css'; // ✅ Import required styles

const RichTextEditor: React.FC = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const savedContent = localStorage.getItem('richText');
    if (savedContent) setContent(savedContent);
  }, []);

  const handleSave = () => {
    localStorage.setItem('richText', content);
    console.log(content);
    alert('Content Saved!');
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  return (
    <Box sx={{ maxWidth: 600, margin: '60px auto' }}>
      <h2>Rich Text Editor</h2>
      {/* ✅ Fix: Added theme & explicit height */}
      <ReactQuill 
        theme="snow" // ✅ Required to make it visible
        value={content} 
        onChange={setContent} 
        modules={modules} 
        style={{ height: "300px" }} 
      />
      <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleSave}>
        Save Content
      </Button>
    </Box>
  );
};

export default RichTextEditor;
