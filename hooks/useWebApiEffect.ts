import { useEffect, useState } from "preact/hooks";

/**
 * This hook is similar useEffect, except the dependencies should be the Web API objects that
 * the effect will use in the browser.
 * @param effect Callback that will use the Web API
 * @param api Web API the effect will used
 * @returns
 */
export default function (effect: () => void, api?: unknown) {
  const [isWebApiSupported, setIsWebApiSupported] = useState(false);

  useEffect(() => {
    if (api) {
      setIsWebApiSupported(true);
      return effect();
    } else {
      setIsWebApiSupported(false);
    }
  }, []);

  return isWebApiSupported;
}
