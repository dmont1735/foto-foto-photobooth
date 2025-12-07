import { useEffect, useState } from "react"
import ColorPicker from "./ColorPicker.jsx"
import BackgroundPicker from "./BackgroundPicker.jsx"
import Photoframe from "./Photoframe.jsx";
import PhotoframeCanvas from "./PhotoframeCanvasRenderer.jsx";
import PhotoframeExport from "./PhotoframeExport.jsx";

function DesignPicker({layout, onPickedDesignCallback, onComplete, onBack}){
    const [ backgroundDesign, setBackgroundDesign] = useState({backgroundColor: "white", background: "none"});

    const direction = layout.type;

    const handleColorSelection = (color) => {
        setBackgroundDesign({backgroundColor: color, background:"none"});
    }

    const handleBackgroundSelection = (bg) => {
        setBackgroundDesign({backgroundColor: "white", background: bg});
    }

    useEffect(()=>{
        onPickedDesignCallback(backgroundDesign);
    },[backgroundDesign]);

    return (
        <div className="design-picker">
            <h1>Pick your photo strip design!</h1>
            <h3>Choose from a selection of backgrounds and colors, or customize your own!</h3>
            <div>
                <button className="photobooth-nav-button" onClick={onBack}>Return to Layout</button>
                <button className="photobooth-nav-button" onClick={onComplete}>Continue to Photos</button>            
            </div>
            <div className={`design-options-container-${direction}`}>      
                <div className="strip-preview-container">
                    <h2>{`Layout ${layout.name} - ${layout.totalSlots} Photos`}</h2>
                    <div className="frame-preview">
                        <PhotoframeExport layout={layout}/>
                    </div>
                </div>
                <div className={`design-options-${direction}`}>
                    <ColorPicker selectedColor ={backgroundDesign.backgroundColor} colorCallback={handleColorSelection}/>
                    <BackgroundPicker onBackgroundCallback={handleBackgroundSelection}/>
                </div> 
            </div> 
        </div>
    )
}

export default DesignPicker
