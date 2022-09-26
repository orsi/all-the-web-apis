import BackgroundTasks from "../islands/BackgroundTasks.tsx";
import BatteryStatus from "../islands/BatteryStatus.tsx";

export default function Home() {
  return (
    <div>
      <h1>All the Web APIs!</h1>
      <small>
        -- or at least the ones that aren't experimental on{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API"
          target="_blank"
          rel="noopener noreferrer"
        >
          MDN
        </a>{" "}
        ---
      </small>
      <BackgroundTasks />
      <BatteryStatus />
    </div>
  );
}
