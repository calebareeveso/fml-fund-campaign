import React, { useState } from 'react';
import style from './dropzone.module.css';

import Dropzone from 'react-dropzone';

export default function App() {
  const [fileNames, setFileNames] = useState([]);
  const handleDrop = (acceptedFiles) =>
    setFileNames(acceptedFiles.map((file) => file.name));

  return (
    <div className="App">
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: style.dropzone })}>
            <input {...getInputProps()} />
            <i
              class="fa fa-upload"
              style={{ margin: 'auto' }}
              aria-hidden="true"
            ></i>
          </div>
        )}
      </Dropzone>
      <div>
        <ul>
          {fileNames.map((fileName) => (
            <li key={fileName}>{fileName}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
