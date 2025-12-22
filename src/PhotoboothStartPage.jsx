
function PhotoboothStartPage({onComplete}){
    return(
            <div className="photobooth-start-page">
                <h1>Foto-Foto - Free Interactive Online Photobooth</h1>
                <h3>Welcome to Foto-Foto! Create fun Photobooth strips with different layouts. </h3>
                <div className="start-container">
                    <button className="photobooth-nav-button" onClick={onComplete}>START</button>
                    <img className="start-preview"
                        src="src/assets/previews/start-preview.png"
                        alt={`Start Page Example Preview`}>
                    </img>
                </div>
            </div>
    );
}

export default PhotoboothStartPage
