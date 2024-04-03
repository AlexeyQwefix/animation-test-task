import { useCallback, useEffect, useState } from "react";
import s from "./style.module.scss";

type Props = { startTime: number; isTimerRunning: boolean };

function Timer({ startTime, isTimerRunning }: Props) {
  const [timeFromStart, setTimeFromStart] = useState<{
    m: number;
    s: number;
    ms: number;
  }>({ m: 0, s: 0, ms: 0 });

  const padTime = useCallback(
    (number: number) => ("00" + number).slice(-2),
    []
  );

  useEffect(() => {
    if (!isTimerRunning) return;
    const updateTime = () => {
      const currentTime = new Date().getTime() - startTime;
      setTimeFromStart({
        m: Math.floor(currentTime / 60000),
        s: Math.floor((currentTime % 60000) / 1000),
        ms: Math.floor((currentTime % 1000) / 10),
      });
      console.log(startTime);
    };

    const interval = setInterval(updateTime, 10);
    return () => clearInterval(interval);
  }, [startTime,isTimerRunning]);

  return (
    <div className={s.wrapper}>
      <div>{padTime(timeFromStart?.m)}</div>
      <div>:</div>
      <div>{padTime(timeFromStart?.s)}</div>
      <div>:</div>
      <div>{padTime(timeFromStart?.ms)}</div>
    </div>
  );
}

export default Timer;
