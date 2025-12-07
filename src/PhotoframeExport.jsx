import { useRef, useState, useEffect, forwardRef, useImperativeHandle } from "react";
import Photoframe from "./Photoframe";
import PhotoframeCanvasRenderer from "./PhotoframeCanvasRenderer";
import { loadImage } from "./ImageCache";
import { parseBackground } from "./ParseBackground";

const PhotoframeExport = forwardRef(function ({ pictureUrls, layout }, ref) {
  const previewRef = useRef();
  const canvasRef = useRef();
  useImperativeHandle(ref, () => canvasRef.current);

  const [frameRect, setFrameRect] = useState(null);
  const [slots, setSlots] = useState(null);
  const [images, setImages] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState(null);

  // Measure DOM frame and slots
  const measureFrame = (dom) => {
    if (!dom) return;
    const frameBox = dom.getBoundingClientRect();
    const slotEls = [...dom.children];
    const slotRects = slotEls.map((el) => {
      const r = el.getBoundingClientRect();
      return {
        x: r.x - frameBox.x,
        y: r.y - frameBox.y,
        width: r.width,
        height: r.height,
      };
    });
    setSlots(slotRects);
    setFrameRect({ width: frameBox.width, height: frameBox.height });
  };

  // Preload images + background whenever pictureUrls or layout changes
  useEffect(() => {
    async function loadAll() {
      const loadedImages = await Promise.all(
        (pictureUrls || []).map((src) => loadImage(src))
      );
      setImages(loadedImages);

      const { imageUrl } = parseBackground(layout?.style?.background);
      if (imageUrl) {
        const bgImg = await loadImage(imageUrl);
        setBackgroundImage(bgImg);
      } else {
        setBackgroundImage(null);
      }
    }
    loadAll();
  }, [pictureUrls, layout?.style?.background]);

  // Re-measure slots whenever layout or pictures change
  useEffect(() => {
    if (previewRef.current) {
      measureFrame(previewRef.current);
    }
  }, [layout, pictureUrls]);

  const isReady =
    slots &&
    frameRect &&
    images.length === (pictureUrls?.length || 0) &&
    (!parseBackground(layout?.style?.background).imageUrl || backgroundImage);

  return (
    <>
      {/* Hidden DOM preview used only for measuring slots */}
      <div style={{ position: "absolute", opacity: 0, pointerEvents: "none" }}>
        <Photoframe
          ref={previewRef}
          pictureUrls={pictureUrls}
          layout={layout}
        />
      </div>

      {isReady && (
        <PhotoframeCanvasRenderer
          ref={canvasRef}
          slots={slots}
          frameRect={frameRect}
          images={images}
          layout={layout}
          backgroundImage={backgroundImage}
        />
      )}
    </>
  );
});

export default PhotoframeExport;
