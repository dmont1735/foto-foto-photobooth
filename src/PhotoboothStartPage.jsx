
function PhotoboothStartPage({onComplete}){
    return(
            <div className="photobooth-start-page">
                <h1>Foto-Foto - Free Interactive Online Photobooth</h1>
                <h3>Welcome to Foto-Foto! Create fun Photobooth strips with different layouts. </h3>
                <img src={null}
                    alt={`Start Page Example Preview`}>
                </img>
                <button className="photobooth-nav-button" onClick={onComplete}>START</button>
            </div>
    );
}

export default PhotoboothStartPage
