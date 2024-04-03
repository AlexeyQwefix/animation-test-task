import React, { useCallback, useEffect, useRef, useState } from "react";
import s from "./style.module.scss";

const THROW_BALL_TIME = 3000;
const FPS = 5;

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
    }, FPS / 1000);

    setTimeout(() => {
      clearInterval(interval)
      setProgress(null)
    }, THROW_BALL_TIME);
  };

  return (
    <div className={s.app}>
      <div ref={movingBlock} className={`${s.block} ${s.movingBlock}`}>
        1
      </div>
      <div ref={staticBlock} className={`${s.block} ${s.staticBlock}`}>
        2
      </div>
      {startPoint && staticBlock.current && progress && (
        <div
          className={s.ball}
          style={{
            left: Math.round(
              startPoint.x +
                (staticBlock.current.getBoundingClientRect().x - startPoint.x) *
                  progress
            ),
            top: Math.round(
              startPoint.y +
                (staticBlock.current.getBoundingClientRect().y - startPoint.y) *
                  progress
            ),
          }}
        >
          
        </div>
      )}

      <button onClick={throwBall} className={s.startButton}>
        START
      </button>
    </div>
  );
}

export default App;
