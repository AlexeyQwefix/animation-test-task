import { useRef, useState } from "react";
import s from "./style.module.scss";

type Props = {
  progress: null | number;
  throwBall: () => void;
  throwBallTime: number;
};

function StartButton({ progress, throwBall, throwBallTime }:Props) {
  return (
    <button disabled={!!progress} onClick={throwBall} className={s.startButton}>
      START{" "}
      {progress &&
        Math.round((throwBallTime - throwBallTime * progress) / 1000)}
    </button>
  );
}

export default StartButton;
