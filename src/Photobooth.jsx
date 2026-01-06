import { useState, useEffect } from "react";
import PhotoboothStartPage from "./PhotoboothStartPage.jsx"
import LayoutPicker from "./LayoutPicker";
import { getLayoutSettings, tweakLayoutSettings } from "./Layouts";
import PhotoboothCamera from "./PhotoboothCamera.jsx";
import DesignPicker from "./DesignPicker.jsx";
import OutputStripPreview from "./OutputStripPreview.jsx"
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Instructions from "./Instructions.jsx";

const STAGE = {
    START: "START",
    INSTRUCTIONS: "INSTRUCTIONS",
    LAYOUT_SELECTION: "LAYOUT_SELECTION",
    DESIGN_SELECTION: "DESIGN_SELECTION",
    PICTURE_SELECTION: "PICTURE_SELECTION",
    STRIP_PREVIEW: "STRIP_PREVIEW",
    END: "END",
}

function Photobooth(){
    const [layout, setLayout] = useState(getLayoutSettings("A"));
    const [pictures, setPictures] = useState([]);
    const [backgroundColor, setBackgroundColor] = useState("white");
    const [background, setBackground] = useState("none");
    const [filter, setFilter] = useState("none");
    const [stage, setStage] = useState(STAGE.START);

    useEffect(()=>{
        const _background = background!=="none"? background : null;
        const _backgroundColor = backgroundColor!=="white"? backgroundColor : null;
        const _filter = filter!=="none"? filter : null;
        const _ = tweakLayoutSettings(layout,_background,_backgroundColor,_filter);
        setLayout(_);
    },[background, backgroundColor, filter]);

    const goToStage = (stage) =>{
        setStage(stage);
    }

    const handleLayoutChange = (_layout) => {
        const _ = getLayoutSettings(_layout);
        setLayout(_);
    }

    const handlePicsTakenChange = (pics) =>{
        setPictures(pics);
    }

    const handleDesignChange = (designSettings) =>{
        if (designSettings.backgroundColor!=="white"){
            setBackground("none");
            setBackgroundColor(designSettings.backgroundColor);
        }
        if(designSettings.background!=="none"){
            setBackground("white");
            setBackground(designSettings.background);
        }
    }

    const handleFilterChange = (filter) =>{
        setFilter(filter);
    }
    return(
        <div className="photobooth-main">
            {(stage === STAGE.START) &&
                (<PhotoboothStartPage onComplete={() =>  goToStage(STAGE.INSTRUCTIONS)}/>)
            }
            {
                (stage === STAGE.INSTRUCTIONS) &&
                (<Instructions
                    onComplete={() => goToStage(STAGE.LAYOUT_SELECTION)}
                    onBack={() => goToStage(STAGE.START)}/>)
            }
            {
                (stage === STAGE.LAYOUT_SELECTION) &&
                (<LayoutPicker 
                    pickedLayout={layout} 
                    layoutPickedCallback={(l) => handleLayoutChange(l)} 
                    onComplete={() => goToStage(STAGE.DESIGN_SELECTION)}
                    onBack={() => goToStage(STAGE.INSTRUCTIONS)}
                />)
            }
            {
                (stage === STAGE.DESIGN_SELECTION ) &&
                (<DesignPicker 
                    layout={layout}
                    onPickedDesignCallback={handleDesignChange}
                    onComplete={() => goToStage(STAGE.PICTURE_SELECTION)}
                    onBack={() => goToStage(STAGE.LAYOUT_SELECTION)}
                />)
            }
            {
                (stage === STAGE.PICTURE_SELECTION) &&
                (<PhotoboothCamera 
                    layout={layout}
                    picsTakenCallback={handlePicsTakenChange}
                    pictures={pictures}
                    onComplete={() => goToStage(STAGE.STRIP_PREVIEW)}
                    onBack={() => goToStage(STAGE.DESIGN_SELECTION)}
                />)
            }
            {
                (stage === STAGE.STRIP_PREVIEW) && 
                (<OutputStripPreview 
                    pictureUrls={pictures} 
                    layout={layout} 
                    onPickedFilterCallback={handleFilterChange} 
                    onBack={() => goToStage(STAGE.PICTURE_SELECTION)}
                />)
            }
        </div>
    );
}

export default Photobooth
