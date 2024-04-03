import { useState } from "react";
import Timer from "../Timer";
import TimerButton from "../TimerButton";
import s from "./style.module.scss";

function App() {
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [startTime, setStartTime] = useState<number>(new Date().getTime());

  return (
    <div className={s.app}>
      TS template
      <TimerButton
        setStartTime={setStartTime}
        isTimerRunning={isTimerRunning}
        setIsTimerRunning={setIsTimerRunning}
      />
      {startTime}
      <Timer startTime={startTime} isTimerRunning={isTimerRunning}/>
    </div>
  );
}

export default App;
