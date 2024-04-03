import { useCallback } from "react";
import s from "./style.module.scss";

type Props = {
  setStartTime: (a: number) => void;
  setIsTimerRunning: (a: boolean) => void;
  isTimerRunning: boolean;
};

function TimerButton({
  setStartTime,
  setIsTimerRunning,
  isTimerRunning,
}: Props) {
  const onTimerClick = useCallback(() => {
    if (!isTimerRunning) {
      setStartTime(new Date().getTime());
    }

    setIsTimerRunning(!isTimerRunning);
  }, [setIsTimerRunning, isTimerRunning, setStartTime]);

  return (
    <button className={s.wrapper} onClick={onTimerClick}>
      {!isTimerRunning ? "Start" : "Stop"}
    </button>
  );
}

export default TimerButton;
