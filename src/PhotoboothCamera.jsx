import { useState } from "react";
import Camera from "./Camera";
import PreviewsGrid from "./PreviewsGrid";
import ImageUploader from "./ImageUploader.jsx"

function PhotoboothCamera({layout, picsTakenCallback, pictures, onComplete, onBack}){
    const [pictureSelection, setPictureSelection] = useState("Camera");

    const handlePictureSelection = (source) =>{
        setPictureSelection(source);
    }
    const handlePictureUpload = (files) =>{
        let pics = [];
        files.map((file, index)=>{
            const url = file.src;
            pics = [...pics, url];
        });
        picsTakenCallback(pics);
    }

    return (
        <div className="picture-picker">
            <h1>Get Ready for the Pictures!</h1>     
            <button 
                className={pictureSelection==="Camera"? "option-button-selected": "option-button"} 
                onClick={()=>handlePictureSelection("Camera")}>
                Camera
            </button>
            <button 
                className={pictureSelection==="Upload"? "option-button-selected": "option-button"} 
                onClick={()=>handlePictureSelection("Upload")}>
                Upload
            </button>
            <div className="picture-picker-container">
                {
                    (pictureSelection==="Camera") &&
                    (<div className="camera-container">
                        <h3 style={{whiteSpace:"pre-line"}}>{`Take ${layout.totalSlots} pictures in a row.
                            You can adjust the countdown timer up to 10 seconds.`}</h3>
                        <Camera picsTakenCallback={picsTakenCallback} layout={layout} onBack={onBack}/>
                    </div>)
                }
                {
                    (pictureSelection==="Upload") &&
                    (<div className="upload-container">
                        <p>{`Choose ${layout.totalSlots} pictures to upload`}</p>
                        <ImageUploader onFilesChange={handlePictureUpload} maxFiles={layout.totalSlots}/>
                    </div>)
                }
                {
                    (pictures.length !==0) &&
                    (<PreviewsGrid picUrls={pictures} direction="horizontal" scale="scale-up"></PreviewsGrid>)
                }
                <div>
                    <button 
                        className="photobooth-nav-button" 
                        onClick={onBack}>
                        Return to Design
                    </button>
                    {
                        (pictures.length === layout.totalSlots) && 
                        (<button 
                            className="photobooth-nav-button" 
                            onClick={onComplete}>
                            Continue to Editing
                        </button>)
                    }
                </div>
            </div>
        </div>
    );
}
export default PhotoboothCamera
