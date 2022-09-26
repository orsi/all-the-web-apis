import { useState } from "preact/hooks";
import useWebApiEffect from "../hooks/useWebApiEffect.ts";

interface BatteryStatusProps {}

export default function BatteryStatus(props: BatteryStatusProps) {
  const [batteryLevel, setBatteryLevel] = useState();
  const [batteryCharging, setBatteryCharging] = useState();
  const [batteryChargingTime, setBatteryChargingTime] = useState();
  const [batteryDischargingTime, setBatteryDischargingTime] = useState();

  const isApiSupportedInBrowser = useWebApiEffect(() => {
    navigator.getBattery().then((battery) => {
      setBatteryLevel(battery.level);
      setBatteryCharging(battery.charging);
      setBatteryChargingTime(battery.chargingTime);
      setBatteryDischargingTime(battery.dischargingTime);

      battery.addEventListener("levelchange", () => {
        setBatteryLevel(battery.level);
      });
      battery.addEventListener("chargingchange", () => {
        setBatteryCharging(battery.charging);
      });
      battery.addEventListener("chargingtimechange", () => {
        setBatteryChargingTime(battery.chargingTime);
      });
      battery.addEventListener("dischargingtimechange", () => {
        setBatteryDischargingTime(battery.dischargingTime);
      });
    });
  }, navigator?.getBattery);

  return (
    <section>
      <h2>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API"
          target="_blank"
          rel="noreferrer"
        >
          Battery Status
        </a>
      </h2>
      {!isApiSupportedInBrowser ? (
        <p>
          <code>navigater.getBattery</code> is not supported in your browser :(.
        </p>
      ) : (
        <>
          <p>
            Level: {(batteryLevel ?? 0) * 100}% <br />
            Charging: {batteryCharging ? "Yup" : "Nope"} <br />
            Charging Time:{" "}
            {batteryChargingTime && isFinite(batteryChargingTime)
              ? `${batteryChargingTime} seconds`
              : `Not charging`}
            <br />
            Discharging Time:{" "}
            {batteryDischargingTime && isFinite(batteryDischargingTime)
              ? `${batteryLevel} seconds`
              : `Not discharging`}
          </p>
        </>
      )}
    </section>
  );
}
