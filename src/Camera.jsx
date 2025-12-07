import { useEffect, useRef, useState } from "react";
import Overlay from "./Overlay.jsx";

export default function Camera({picsTakenCallback, onBack, layout}) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [devices, setDevices] = useState([]);
  const [selectedDeviceId, setSelectedDeviceId] = useState(null);
  const [photoDataUrls, setPhotoDataUrls] = useState([]);
  const [error, setError] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayTimer, setOverlayTimer] = useState(10);

  useEffect(() => picsTakenCallback(photoDataUrls),[photoDataUrls]);

  async function updateDeviceList() {
    try {
      const all = await navigator.mediaDevices.enumerateDevices();
      const videoInputs = all.filter((d) => d.kind === "videoinput");
      setDevices(videoInputs);
      if (!selectedDeviceId && videoInputs[0]) {
        setSelectedDeviceId(videoInputs[0].deviceId);
      }
    } catch (err) {
      console.error("enumerateDevices error", err);
    }
  }

  async function startCamera(deviceId = null) {
    setError(null);
    try {
      if (stream) stopCamera();

      const constraints = {
        audio: false,
        video: {
          width: { ideal: 1280 },
          height: { ideal: 720 },
          ...(deviceId
            ? { deviceId: { exact: deviceId } }
            : { facingMode: { ideal: "environment" } }),
        },
      };

      const newStream = await navigator.mediaDevices.getUserMedia(constraints);
      setStream(newStream);

      if (videoRef.current) {
        videoRef.current.srcObject = newStream;

        videoRef.current.playsInline = true;
        videoRef.current.muted = true;
        await videoRef.current.play().catch(() => {
        });
      }
      updateDeviceList();
      
    } catch (err) {
      console.error("startCamera error", err);
      setError(err.message || String(err));
    }
  }

  function stopCamera() {
    if (!stream) return;
    setShowOverlay(false);
    stream.getTracks().forEach((t) => t.stop());
    setStream(null);
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  }

  function takePhoto() {
    if (!videoRef.current) return;
    const video = videoRef.current;
    const width = video.videoWidth || 1280;
    const height = video.videoHeight || 720;
    const canvas = canvasRef.current || document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    ctx.save();
    ctx.scale(-1,1);
    ctx.drawImage(video, -width, 0, width, height);
    ctx.restore();
    const dataUrl = canvas.toDataURL("image/png");
    setPhotoDataUrls(u => [...u, dataUrl]);
}

function takePhotoWithTimer(seconds) {
  if (!stream) return;
  setOverlayTimer(seconds);
  setShowOverlay(true);
}

const handlePhotoCapture = (photosTaken) =>{
  if(photosTaken === layout.totalSlots) setShowOverlay(false);
  takePhoto();
}

const handleAllPhotosComplete = () =>{
  stopCamera();
}

const handleBackButtonPress = () =>{
  stopCamera();
  onBack();
}

const handleTimerChange = () =>{
  switch (overlayTimer){
    case 10:
      setOverlayTimer(5);
      break;
    case 5:
      setOverlayTimer(3);
      break;
    case 3:
      setOverlayTimer(10);
      break;
  }
}

  useEffect(() => {
    updateDeviceList();
    startCamera();
    return () => {
      stopCamera();
      if (mediaRecorderRef.current) {
        try { mediaRecorderRef.current.stop(); } catch (e) {}
      }
    };
  }, []);


  return (
    <div className="camera">
      {error && (
        <div>
          <strong>Error:</strong> {error}
        </div>
      )}
        <video
          className="video-feed"
          ref={videoRef}
          autoPlay
          playsInline
          muted
        />
        {
        showOverlay && 
        (<Overlay start={overlayTimer} cycles={layout.totalSlots} onCycleComplete={handlePhotoCapture} onAllComplete={handleAllPhotosComplete}/>)
        }

      <div>
        <button className="option-button" onClick={() => handleTimerChange()} >{`${overlayTimer}s`}</button>
        <button className={!stream?"option-button-selected": "option-button"} onClick={() => takePhotoWithTimer(overlayTimer)} disabled={!stream}>Start Timer</button>
      </div>
    </div>
  );
}
