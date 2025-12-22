import { useRef, useState } from "react"
import FilterPicker from "./FilterPicker.jsx"
import WarningPopup from "./WarningPopup.jsx"
import PhotoframeExport from "./PhotoframeExport.jsx"

function OutputStripPreview({layout, pictureUrls, onPickedFilterCallback, onBack}){
    const [showWarning, setShowWarning] = useState(false);
    const handleReturnToPhotos =() => {
        setShowWarning(true);
    }

    const frameRef = useRef(null);

    const handleDownload = async () => {
    const canvas = frameRef.current;
    if (!canvas) return;

    const scale = 2;

    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = canvas.width * scale;
    tempCanvas.height = canvas.height * scale;
    const ctx = tempCanvas.getContext("2d");

    ctx.scale(scale, scale);
    ctx.drawImage(canvas, 0, 0);

    const imgData = tempCanvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = imgData;
    link.download = "my-photobooth.png";
    link.click();
    };



    return(
        <div className="output-strip-preview">
            <h1>Pick a Filter & Download Your Photos!</h1>
            <div className="photobooth-nav-options">
                <button 
                    className="photobooth-nav-button" 
                    onClick={handleReturnToPhotos}>
                    Return to Photos
                </button>
                <button
                    className="photobooth-nav-button"
                    onClick={handleDownload}>
                    Download
                </button>

            </div>
            <div className={`strip-preview-container-${layout.type}`}>
                <div className="strip-preview">
                    <h3>Photo Strip Preview</h3>
                    <PhotoframeExport ref={frameRef} layout={layout} pictureUrls={pictureUrls}/>
                </div>
                <FilterPicker filter={layout.imgStyle.filter} onPickedFilterCallback={onPickedFilterCallback} direction={layout.type}/>
            </div>


            {(showWarning) &&
            (<WarningPopup message={
                `Returning to the previous page will discard all photos taken.
                Are you sure you want to return?`
            }
                onCancel={() => setShowWarning(false)}
                onConfirm={() => onBack()}
            />)
            }
        </div>
    )
}

export default OutputStripPreview
