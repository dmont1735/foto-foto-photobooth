import React from "react";
import { createRoot } from "react-dom/client";
import * as htmlToImage from "html-to-image";

/**
 * Safely renders a React element offscreen and exports it as a PNG file.
 * Handles refs and prevents invalid React children from breaking the render.
 *
 * @param {React.ReactElement} element - The element to render.
 * @param {string} [filename="component.png"] - The output filename.
 * @returns {Promise<File|null>}
 */
export async function exportComponentAsFile(element, filename = "component.png") {
  if (!element) return null;

  // Create offscreen container
  const container = document.createElement("div");
  container.style.position = "fixed";
  container.style.top = "-9999px";
  container.style.left = "-9999px";
  container.style.opacity = "0";
  container.style.pointerEvents = "none";
  document.body.appendChild(container);

  // Render component
  const root = createRoot(container);
  root.render(
    // Wrap element in a div to ensure single DOM root and prevent refs as children
    <div>{element}</div>
  );

  // Wait a short time for layout/DOM to settle
  await new Promise((resolve) => setTimeout(resolve, 150));

  try {
    // Use the container itself; safe for fragments and multiple children
    const blob = await htmlToImage.toBlob(container, {
      backgroundColor: "#fff",
      pixelRatio: 2,
      cacheBust: true,
      skipFonts: true,
    });

    if (!blob) throw new Error("Failed to create image blob");

    return new File([blob], filename, {
      type: "image/png",
      lastModified: Date.now(),
    });
  } catch (err) {
    console.error("Error exporting component:", err);
    return null;
  } finally {
    root.unmount();
    document.body.removeChild(container);
  }
}
