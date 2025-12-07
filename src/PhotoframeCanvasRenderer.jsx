import { forwardRef, useEffect, useRef } from "react";

function parseBorder(border) {
  // Example: "3px solid #fff"
  if (!border) return { width: 1, color: "#000" };
  const parts = border.split(" ");
  const width = parseInt(parts[0]) || 1;
  const color = parts[2] || "#000";
  return { width, color };
}

const PhotoframeCanvasRenderer = forwardRef(function ({
  slots,
  frameRect,
  images,
  layout,
  backgroundImage,
}, ref) {
  const canvasRef = ref || useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !frameRect) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = 3; // fixed high-DPI for downloads
    canvas.width = frameRect.width * dpr;
    canvas.height = frameRect.height * dpr;
    canvas.style.width = `${frameRect.width}px`;
    canvas.style.height = `${frameRect.height}px`;
    ctx.setTransform(1, 0, 0, 1, 0, 0); // reset transform
    ctx.scale(dpr, dpr);

    ctx.clearRect(0, 0, frameRect.width, frameRect.height);

    const outerRadius = parseInt(layout.style?.borderRadius || 0);
    const { width: outerBorderWidth, color: outerBorderColor } = parseBorder(layout.style?.border);

    // Clip outer border first
    ctx.save();
    ctx.beginPath();
    if (outerRadius > 0) ctx.roundRect(0, 0, frameRect.width, frameRect.height, outerRadius);
    else ctx.rect(0, 0, frameRect.width, frameRect.height);
    ctx.clip();

    // Draw background (image or color)
    if (backgroundImage) {
      // object-fit: cover
      const frameRatio = frameRect.width / frameRect.height;
      const imgRatio = backgroundImage.width / backgroundImage.height;

      let drawWidth, drawHeight, offsetX = 0, offsetY = 0;

      if (imgRatio > frameRatio) {
        drawHeight = frameRect.height;
        drawWidth = imgRatio * drawHeight;
        offsetX = (frameRect.width - drawWidth) / 2;
      } else {
        drawWidth = frameRect.width;
        drawHeight = drawWidth / imgRatio;
        offsetY = (frameRect.height - drawHeight) / 2;
      }

      ctx.drawImage(backgroundImage, offsetX, offsetY, drawWidth, drawHeight);
    } else if (layout.style?.background) {
      ctx.fillStyle = layout.style.background;
      ctx.fillRect(0, 0, frameRect.width, frameRect.height);
    }
    ctx.restore();

    // Draw outer border
    if (layout.style?.border) {
      ctx.strokeStyle = outerBorderColor;
      ctx.lineWidth = outerBorderWidth;
      ctx.beginPath();
      if (outerRadius > 0) {
        ctx.roundRect(
          outerBorderWidth / 2,
          outerBorderWidth / 2,
          frameRect.width - outerBorderWidth,
          frameRect.height - outerBorderWidth,
          outerRadius
        );
      } else {
        ctx.rect(outerBorderWidth / 2, outerBorderWidth / 2, frameRect.width - outerBorderWidth, frameRect.height - outerBorderWidth);
      }
      ctx.stroke();
    }

    // Draw each slot
    slots.forEach((slot, index) => {
      const { width: slotBorderWidth, color: slotBorderColor } = parseBorder(layout.slotStyle?.border);
      const slotRadius = parseInt(layout.slotStyle?.borderRadius || 0);

      // Slot background
      ctx.fillStyle = layout.slotStyle?.backgroundColor || "#f5f5f5";
      ctx.beginPath();
      if (slotRadius > 0) ctx.roundRect(slot.x, slot.y, slot.width, slot.height, slotRadius);
      else ctx.rect(slot.x, slot.y, slot.width, slot.height);
      ctx.fill();

      // Slot border
      if (layout.slotStyle?.border) {
        ctx.strokeStyle = slotBorderColor;
        ctx.lineWidth = slotBorderWidth;
        ctx.beginPath();
        if (slotRadius > 0) ctx.roundRect(slot.x, slot.y, slot.width, slot.height, slotRadius);
        else ctx.rect(slot.x, slot.y, slot.width, slot.height);
        ctx.stroke();
      }

      // Draw image
      const img = images[index];
      if (img) {
        const imgRatio = img.width / img.height;
        const slotRatio = slot.width / slot.height;

        let drawWidth = slot.width;
        let drawHeight = slot.height;
        let offsetX = 0;
        let offsetY = 0;

        if (imgRatio > slotRatio) {
          drawHeight = slot.height;
          drawWidth = imgRatio * drawHeight;
          offsetX = (slot.width - drawWidth) / 2;
        } else {
          drawWidth = slot.width;
          drawHeight = drawWidth / imgRatio;
          offsetY = (slot.height - drawHeight) / 2;
        }

        ctx.save();
        ctx.filter = layout.imgStyle?.filter || "none";

        // Clip to slot
        ctx.beginPath();
        if (slotRadius > 0) ctx.roundRect(slot.x, slot.y, slot.width, slot.height, slotRadius);
        else ctx.rect(slot.x, slot.y, slot.width, slot.height);
        ctx.clip();

        ctx.drawImage(img, slot.x + offsetX, slot.y + offsetY, drawWidth, drawHeight);
        ctx.restore();
      } else {
        ctx.fillStyle = "#777";
        ctx.font = "2rem sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("Empty", slot.x + slot.width / 2, slot.y + slot.height / 2);
      }
    });
  }, [slots, frameRect, images, layout, backgroundImage]);

  return <canvas ref={canvasRef} style={{ display: "block" }} />;
});

export default PhotoframeCanvasRenderer;
