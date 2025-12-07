import { useEffect, useState } from "react";

export function usePhotoframeCanvas(pictureUrls, layout) {
  const [slots, setSlots] = useState(null);
  const [frameRect, setFrameRect] = useState(null);

  // 1. Measure DOM layout (from <Photoframe ref>)
  function measureFrame(dom) {
    if (!dom) return;

    const frame = dom;
    const frameBox = frame.getBoundingClientRect();
    setFrameRect({
      width: frameBox.width,
      height: frameBox.height,
    });

    const slotEls = [...frame.children];

    const slotRects = slotEls.map(el => {
      const r = el.getBoundingClientRect();
      return {
        x: r.x - frameBox.x,
        y: r.y - frameBox.y,
        width: r.width,
        height: r.height,
      };
    });

    setSlots(slotRects);
  }

  // 2. Preload all images
  async function loadAllImages() {
    const results = await Promise.all(
      pictureUrls.map(src => loadImage(src))
    );
    return results;
  }

  return {
    slots,
    frameRect,
    measureFrame,
    loadAllImages,
  };
}
