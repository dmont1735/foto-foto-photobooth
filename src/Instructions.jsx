import React from "react";

export default function Instructions({ onComplete, onBack}) {
    const handleConfirmationButton = () =>{
    onComplete();
  }

  const handleReturnButton = () => {
    onBack();
  }

    return (
        <div className="instructions">
            <h1>How to use Foto-Foto</h1>
            <h3>Follow these simple steps to create your custom photobooth strip:</h3>
            <div>
                <button className="photobooth-nav-button" onClick={()=>handleReturnButton()}>Return to Start</button>
                <button className="photobooth-nav-button" onClick={()=>handleConfirmationButton()}>Continue to Layout</button>
            </div>

            <div className="instructions-container">

                <div className="instructions-grid">
                    <div className="step">
                        <figure>
                            <figcaption>Step 1. Select a Layout</figcaption>
                            <img src="src/assets/previews/step1.png" alt="Select layout preview" />
                        </figure>
                    </div>

                    <div className="step">
                        <figure>
                            <figcaption>Step 2. Choose a Background Design</figcaption>
                            <img src="src/assets/previews/step2.png" alt="Choose design preview" />
                        </figure>
                    </div>

                    <div className="step">
                        <figure>
                            <figcaption>Step 3. Take or Upload your Pictures</figcaption>
                            <img src="src/assets/previews/step3.png" alt="Take or upload pictures preview" />
                        </figure>
                    </div>

                    <div className="step">
                        <figure>
                            <figcaption>Step 4. Preview and Download your Photobooth Strip</figcaption>
                            <img src="src/assets/previews/step4.png" alt="Preview and download preview" />
                        </figure>
                    </div>
            </div>
        </div>

        </div>
    );
}
 