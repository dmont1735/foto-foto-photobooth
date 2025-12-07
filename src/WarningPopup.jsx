import { useState } from "react";

export default function WarningPopup({
  message = "Are you sure?",
  onConfirm,
  onCancel
}) {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  const handleClose = () => {
    setOpen(false);
    if (onCancel) onCancel();
  };

  const handleConfirm = () => {
    setOpen(false);
    if (onConfirm) onConfirm();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-card">
        <h2 className="popup-title">Warning</h2>
        <p className="popup-message">{message}</p>

        <div className="popup-actions">
          <button className="photobooth-nav-button" onClick={handleClose}>
            Cancel
          </button>
          <button className="photobooth-nav-button" style={{background:"#8a0083ff"}} onClick={handleConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
