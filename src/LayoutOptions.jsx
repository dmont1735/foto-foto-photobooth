import { useEffect, useState } from "react";
import { getLayoutSettings } from "./Layouts";

function LayoutOptions({type, layoutPickedCallback, pickedLayout}){
    const [previews, setPreviews] = useState([]);
   
    useEffect(()=>{
        let _previews;
        switch (type){
            case "vertical":
                _previews = import.meta.glob('../src/assets/previews/vertical/*.{png,jpg,jpeg,svg}', {eager: true});
                break;
            case "horizontal":
                _previews = import.meta.glob('../src/assets/previews/horizontal/*.{png,jpg,jpeg,svg}', {eager: true});
                break;
            default:
                return;
        }
        const _previewsArray = Object.values(_previews);

        const names = Object.keys(_previews).map((path) => {
            const file = path.split('/').pop();           // "frame-A-1.png"
            const name = file.replace(/\.[^.]+$/, "");    // "frame-A-1"
            return name.match(/frame-([A-Za-z])-/)?.[1];  // "A"
        });

        _previewsArray.map((preview, index) =>{
            setPreviews((prev) => [...prev, {url: preview.default, name: names[index]}]);
        });
        
    }, [type]);

    return (
        <div className="layout-options-container">
            <div className={`layout-options-${type}`}>
                {previews.map((preview, index) =>{
                    return (
                    <div className={(pickedLayout && pickedLayout.name===preview.name) ? "layout-option-selected" : "layout-option"}  
                        key={`layout-preview-${index}`} 
                        onClick={()=>layoutPickedCallback(preview.name)}>
                        <div className="layout-preview">
                            <img
                                src={preview.url}
                                className="layout-img"
                            />
                        </div>
                        <div className="layout-label">
                            <p>{`Layout ${preview.name} - ${getLayoutSettings(preview.name).totalSlots} photos`}</p>
                        </div>
                    </div>);     
                })}
            </div>
        </div>
    );
}

export default LayoutOptions
