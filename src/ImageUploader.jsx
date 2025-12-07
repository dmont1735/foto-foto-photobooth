import React, { useState, useRef } from 'react';
import WarningPopup from './WarningPopup';

const ImageUploader = ({ label, maxFiles, onFilesChange }) => {
  const [files, setFiles] = useState([]);
  const inputRef = useRef(null);
  const [showWarning, setShowWarning] = useState(false);
  if(!label) label = "Choose Files";
  if(!maxFiles) maxFiles= 1;

    const handleButtonClick = () => {
        if (!inputRef.current) return;

        if (files.length >= maxFiles) {
            setShowWarning(true);
            return;
        }

        inputRef.current.value = "";
        inputRef.current.click();   
    };


    const handleNewSelection = () => {
        setShowWarning(false)
        setFiles([]);
        onFilesChange([]);

        if (inputRef.current) {
            inputRef.current.value = "";
            inputRef.current.click();
        }
    };


    const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);

    const limitedFiles = selectedFiles.slice(0, maxFiles - files.length);

    // Convert files to data URLs to avoid blob issues
    const fileReaders = limitedFiles.map(file => {
        return new Promise(resolve => {
        const reader = new FileReader();
        reader.onload = (e) => resolve({ name: file.name, src: e.target.result });
        reader.readAsDataURL(file);
        });
    });

    Promise.all(fileReaders).then(results => {
        const updatedFiles = [...files, ...results];
        setFiles(updatedFiles);
        onFilesChange(updatedFiles);
    });
    };

  return (
    <div>
        {
            (showWarning) &&
            (
                <WarningPopup 
                    message={`You have reached the picture limit. Uploading will discard the current selection.\n Continue and discard?`}
                    onCancel={()=>setShowWarning(false)} 
                    onConfirm={handleNewSelection}
                />
            )
        }
      <button
        className="option-button"
        onClick={handleButtonClick}>
        {label}
      </button>

      <input
        type="file"
        accept="image/*"
        multiple
        ref={inputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />

      {(maxFiles) &&
        <p>{`Uploaded ${files.length} file${files.length!=1?`s`:""} out of ${maxFiles}`}</p>
      }
    </div>
  );
};

export default ImageUploader;
