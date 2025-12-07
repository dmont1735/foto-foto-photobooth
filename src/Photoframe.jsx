import { forwardRef, useEffect } from "react";

const Photoframe = forwardRef(function Photoframe(
  { pictureUrls, layout },
  ref
) {
  return (
    <div
      className="photo-frame"
      style={layout.style}
      ref={ref}
    >
      {Array.from({ length: layout.totalSlots }).map((_, index) => {
        const src = pictureUrls?.[index] || null;

        return (
          <div key={index} style={layout.slotStyle}>
            {src ? (
              <img
                src={src}
                style={layout.imgStyle}
                alt=""
              />
            ) : (
              <span style={{ color: "#777", fontSize: "2.5rem" }}>
                Empty
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
});

export default Photoframe;
