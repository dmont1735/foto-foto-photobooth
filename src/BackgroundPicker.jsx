import { useState } from "react";
import ImageUploader from "./ImageUploader";
import PreviewsGrid from "./PreviewsGrid";

function BackgroundPicker({ onBackgroundCallback }) {
    const backgrounds = import.meta.glob('../src/assets/backgrounds/*.{png,jpg,jpeg,svg}', {eager: true});

    const bgArray = Object.values(backgrounds);
    const srcUrls = bgArray.map((b, index)=>{
        return b.default;
    });

    const [backgroundPreviews, setBackgroundPreviews] = useState(srcUrls);

    const handleBackgroundUpload = (files) =>{
        let pics = [];
        files.map((file, index)=>{
            const url = file.src;
            pics = [...pics, url];
        });
        console.log(pics);
        setBackgroundPreviews((prev)=>[...prev, pics]);
    }

    return (
        <div className="background-picker">
            <PreviewsGrid label="Image Background" picUrls={backgroundPreviews} onClickCallback={onBackgroundCallback}></PreviewsGrid>
                <div className="custom-color-picker">
                    {/* <button className="option-button">Add Custom Background</button> */}
                    <ImageUploader label="Add Custom Background" onFilesChange={handleBackgroundUpload}/>
                    {/* <label>Custom Background: </label> */}
                    {/* <input className="custom-color-preview" type="color" value={color} onChange={handleColorChange}/> */}
                    {/* <div className="color-display" style = {{backgroundColor: color}}></div> */}
                </div>
        </div>
    );
}

export default BackgroundPicker

