import { useRef, useState } from "react"
import FilterPicker from "./FilterPicker.jsx"
import Photoframe from "./Photoframe.jsx"
import WarningPopup from "./WarningPopup.jsx"
import html2canvas from "html2canvas";
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

    // Desired scale for higher resolution
    const scale = 2; // 2x for sharper export

    // Create a temporary canvas
    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = canvas.width * scale;
    tempCanvas.height = canvas.height * scale;
    const ctx = tempCanvas.getContext("2d");

    // Scale context
    ctx.scale(scale, scale);

    // Draw the original canvas onto the temporary canvas
    ctx.drawImage(canvas, 0, 0);

    // Export as PNG
    const imgData = tempCanvas.toDataURL("image/png");

    // Trigger download
    const link = document.createElement("a");
    link.href = imgData;
    link.download = "my-photobooth.png";
    link.click();
    };



    return(
        <div className="output-strip-preview">
            <h1>Pick a filter!</h1>
            <div className={`strip-preview-container-${layout.type}`}>
                <div className="strip-preview">
                    <h3>Photo Strip Preview</h3>
                    <PhotoframeExport ref={frameRef} layout={layout} pictureUrls={pictureUrls}/>
                </div>
                <FilterPicker filter={layout.imgStyle.filter} onPickedFilterCallback={onPickedFilterCallback} direction={layout.type}/>
            </div>
            <div className="photobooth-nav-options">
                <button
                    className="photobooth-nav-button"
                    onClick={handleDownload}>
                    Download
                </button>
                <button 
                    className="photobooth-nav-button" 
                    onClick={handleReturnToPhotos}>
                    Return to Photos
                </button>
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
