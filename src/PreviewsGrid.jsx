import ImagePreview from "./ImagePreview.jsx"

function PreviewsGrid({label, picUrls, colors, onClickCallback, scale = "normal"}){
    return (
        <div className="image-grid-container"> 
            { (label) && (<h3 style={{fontWeight:"bold"}}>{`${label}`}</h3>)}
            <div className={`image-grid-${scale}`}> 
                {
                    (picUrls && picUrls.length) &&
                    (
                        picUrls.map((u, index) =>{
                            return <ImagePreview 
                                        scale={scale} 
                                        key={`image-${index}`} 
                                        picSrc={u} 
                                        onClickCallback={() => onClickCallback(u)} 
                                        color={colors? colors[index] : "white"}
                                    />
                        })
                    )
                }
                {
                    (colors && colors.length) &&
                    (
                        colors.map((c, index) =>{
                            return (
                                <div className="image-item-normal" key={`sample-color-${index}`}>
                                    <div className="image-normal" 
                                        style={{backgroundColor: c}}                                          
                                        onClick={() => onClickCallback(c, index)}
                                    ></div>
                                </div>);
                        })
                    )
                }
               
            </div>
        </div>

    );
}
export default PreviewsGrid
