import React, { useState } from 'react';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const MyEditor = () => {
  const [content, setContent] = useState('');

  const handleChange = (event, editor) => {
    const data = editor.getData();
    setContent(data);
  };

  return (
    <div>
      <h2>CKEditor Example</h2>
      <CKEditor
        editor={ClassicEditor}
        data={content}
        onChange={handleChange}
      />
    </div>
  );
};

export default MyEditor;
