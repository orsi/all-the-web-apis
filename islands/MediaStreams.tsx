import { useRef, useState } from "preact/hooks";

export default function MediaStreams() {
  const [isMediaReady, setIsMediaReady] = useState(false);
  const video = useRef<HTMLVideoElement>(null);
  const photo = useRef<HTMLImageElement>(null);

  function onPlayVideo() {
    if (!video.current) {
      return;
    }
    setIsMediaReady(true);
  }

  async function start() {
    const stream = await navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .catch((err) => {
        console.error(`An error occurred: ${err}`);
      });

    if (stream && video.current !== null) {
      video.current.srcObject = stream;
      video.current.play();
    }
  }

  function captureImage() {
    const videoWidth = `${video.current?.videoWidth}`;
    const videoHeight = `${video.current?.videoHeight}`;
    const canvas = document.createElement("canvas");
    canvas.setAttribute("width", videoWidth);
    canvas.setAttribute("height", videoHeight);
    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    context.drawImage(video.current!, 0, 0, videoWidth, videoHeight);
    const data = canvas.toDataURL("image/png");
    photo.current!.setAttribute("width", videoWidth);
    photo.current!.setAttribute("height", videoHeight);
    photo.current!.setAttribute("src", data);
  }

  function clearImage() {
    const canvas = document.createElement("canvas");
    canvas.setAttribute("width", `${video.current?.videoWidth}`);
    canvas.setAttribute("height", `${video.current?.videoHeight}`);
    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    context.clearRect(
      0,
      0,
      video.current!.videoWidth,
      video.current!.videoHeight
    );
    const data = canvas.toDataURL("image/png");
    photo.current!.setAttribute("src", data);
  }

  return (
    <section>
      <h2>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/Media_Capture_and_Streams_API"
          target="_blank"
          rel="noreferrer"
        >
          Media Streams
        </a>
      </h2>
      <small>HTTPS only</small>
      <p>
        This API allows developers to request permission for access to media
        stream inputs on the user's device, such as a web camera or microphone.
      </p>
      <div
        style={{
          display: "flex",
        }}
      >
        <div>
          <button disabled={isMediaReady} onClick={start}>
            Turn on Webcam
          </button>
          <br />
          <button disabled={!isMediaReady} onClick={captureImage}>
            Take photo
          </button>
          <button disabled={!isMediaReady} onClick={clearImage}>
            Clear photo
          </button>
        </div>
        <video ref={video} onCanPlay={onPlayVideo}>
          Video stream not available.
        </video>
        <img ref={photo} alt="Captured photos will appear here." />
      </div>
    </section>
  );
}
