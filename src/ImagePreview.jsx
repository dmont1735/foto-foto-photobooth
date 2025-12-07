
function ImagePreview({ picSrc, color = "white", onClickCallback, scale }) {

  if (!picSrc) {
    return <p className="no-image-text">No image selected yet.</p>;
  }

  return (
    <div className={`image-item-${scale}`}>
      <img
        src={picSrc}
        className={`image-${scale}`}
        onClick={onClickCallback}
        style={
          {backgroundColor: `${color}`}
        }
      />
    </div>
  );
}
export default ImagePreview
