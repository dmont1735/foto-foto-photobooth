import { useEffect, useState } from "react";
import PreviewsGrid from "./PreviewsGrid";

function ColorPicker({colorCallback}){
    const [color, setColor] = useState("#ffffff");
    const initialColors = [
        "#4c69ec",
        "#ec944c",
        "#23ca3f",
        "#fa2f2f",
        "#f86ad5"];
    const [sampleColors, setSampleColors] = useState(initialColors);

    function handleColorChange(event){
        const c =  event.target.value;
        setColor(c);
        colorCallback(c);
    }

    function handleColorChangeSample(c){
        setColor(c);
        colorCallback(c);
    }

    useEffect(() =>{
        if(!sampleColors.includes(color)){
            setSampleColors([color, ...initialColors]);
        }
    },[color]);

    return(
            <div className="color-picker-container">
                <PreviewsGrid label="Solid Color" colors={sampleColors} onClickCallback={handleColorChangeSample}></PreviewsGrid>
                <div className="custom-color-picker">
                    <label>Custom Color: </label>
                    <input className="custom-color-preview" type="color" value={color} onChange={handleColorChange}/>
                </div>
            </div>
    )
}

export default ColorPicker;
