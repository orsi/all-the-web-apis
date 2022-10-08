import BackgroundTasks from "../islands/BackgroundTasks.tsx";
import BatteryStatus from "../islands/BatteryStatus.tsx";
import MediaStreams from "../islands/MediaStreams.tsx";

export default function Home() {
  return (
    <div>
      <h1>All the Web APIs!</h1>
      <small>
        -- or at least the ones I think are interesting or supported enough ---
      </small>
      <BackgroundTasks />
      <BatteryStatus />
      <MediaStreams />
      {/* 
      Interesting APIs:
      - Broadcast Channel API
      - Canvas API
      - Credential Management API
      - Device Orientation Events
      - Encoding API
      - File API
      - File and Directory Entries API
      - Fullscreen API
      - Gamepad API
      - Geolocation API
      - HTML Drag and Drop API
      - High Resolution Time
      - History API
      - IndexedDB API
      - Intersection Observer API
      - Media Capabilities API
      - Media Session API
      - MediaStream Recording API
      - Navigation Timing API (Performance)
      - Page Visibility API
      - Performance API
      - Permissions API
      - Pointer events
      - Pointer Lock API
      - Resize Observer API
      - Screen Capture API
      - Selection API
      - Service Worker API
      - Storage API
      - UI Events
      - URL API
      - Vibration API
      - Visual Viewport API
      - Web Animations
      - Web Audio API
      - Web Authentication API
      - Web Crypto API
      - Web MIDI API
      - Web Notifications
      - Web Share API
      - Web Speech API
      - Web Storage API
      - Web Workers API
      - WebCodecs API
      - WebGL
      - WebRTC
      - WebVTT
      - Websockets API
      */}
    </div>
  );
}
