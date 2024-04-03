import { useRef, useState } from "react";
import Ball from "../Ball";
import MovingBlock from "../MovingBlock";
import StartButton from "../StartButton";
import StaticBlock from "../StaticBlock";
import s from "./style.module.scss";

const THROW_BALL_TIME = 2000;
const FPS = 144;

function App() {
  const movingBlock = useRef<HTMLDivElement>(null);
  const staticBlock = useRef<HTMLDivElement>(null);

  const [startPoint, setStartPoint] = useState<{ x: number; y: number } | null>(
    null
  );
  const [progress, setProgress] = useState<number | null>(null);

  const throwBall = () => {
    if (!movingBlock.current) return;
    const { x, y } = movingBlock.current.getBoundingClientRect();
    setStartPoint({ x, y });

    const startTime = new Date().getTime();

    const interval = setInterval(() => {
      setProgress((new Date().getTime() - startTime) / THROW_BALL_TIME);
    }, 1000 / FPS);

    setTimeout(() => {
      clearInterval(interval);
      setProgress(null);
    }, THROW_BALL_TIME);
  };

  return (
    <div className={s.app}>
      <MovingBlock refToDiv={movingBlock} />
      <StaticBlock refToDiv={staticBlock} />
      <Ball
        progress={progress}
        startPoint={startPoint}
        staticBlock={staticBlock}
      />
      <StartButton
        throwBall={throwBall}
        progress={progress}
        throwBallTime={THROW_BALL_TIME}
      />
    </div>
  );
}

export default App;
