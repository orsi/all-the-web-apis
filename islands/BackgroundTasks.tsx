import { useState } from "preact/hooks";
import useWebApiEffect from "../hooks/useWebApiEffect.ts";

interface BackgroundTasksProps {}

export default function BackgroundTasks(props: BackgroundTasksProps) {
  const [idleCallbackCounter, setIdleCallbackCounter] = useState(0);
  const [backgroundTaskCounter, setBackgroundTaskCounter] = useState(0);

  const isApiSupportedInBrowser = useWebApiEffect(() => {
    const idleCallback = (deadline: IdleDeadline) => {
      setIdleCallbackCounter((value) => value + 1);
      while (deadline.timeRemaining() > 0 && !deadline.didTimeout) {
        setBackgroundTaskCounter((value) => value + 1);
      }
      requestIdleCallback(idleCallback, { timeout: 1000 });
    };
    const requestIdleCallbackId = requestIdleCallback(idleCallback, {
      timeout: 1000,
    });

    return () => {
      cancelIdleCallback(requestIdleCallbackId);
    };
  }, window?.requestIdleCallback);

  return (
    <section>
      <h2>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/Background_Tasks_API"
          target="_blank"
          rel="noreferrer"
        >
          Background Tasks
        </a>
      </h2>
      {!isApiSupportedInBrowser ? (
        <p>
          <code>requestIdleCallback</code> is not supported in your browser :(.
        </p>
      ) : (
        <p>
          I've called {idleCallbackCounter} idle callbacks and performed{" "}
          {backgroundTaskCounter} background tasks... kind of.
        </p>
      )}
    </section>
  );
}
