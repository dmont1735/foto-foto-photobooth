import LayoutOptions from "./LayoutOptions.jsx";

function LayoutPicker ({pickedLayout, layoutPickedCallback, onComplete, onBack}) {
  const handleConfirmationButton = () =>{
    if (!pickedLayout){
        window.alert("⚠️ Please choose a layout!");
        return;
    }
    onComplete();
  }

  const handleReturnButton = () => {
    onBack();
  }

    return(
        <div className="layout-picker">
            <h1>Pick your favorite layout!</h1>
            <h3>Choose from several options of vertical or horizontal frame layouts, up to 6 photos per frame</h3>

            <div>
                <button className="photobooth-nav-button" onClick={()=>handleReturnButton()}>Return to Instructions</button>
                <button className="photobooth-nav-button" onClick={()=>handleConfirmationButton()}>Continue to Design</button>
            </div>
            
            <div className="layout-options-container">
                <div>
                    <h2>Vertical Layouts</h2>
                    <LayoutOptions type={"vertical"} layoutPickedCallback={(l) => layoutPickedCallback(l)} pickedLayout={pickedLayout}></LayoutOptions>
                </div>
                <div>
                    <h2>Horizontal Layouts</h2>
                    <LayoutOptions type={"horizontal"} layoutPickedCallback={(l) => layoutPickedCallback(l)} pickedLayout={pickedLayout}></LayoutOptions>
                </div>
            </div>            
        </div>          
    );
}
export default LayoutPicker
