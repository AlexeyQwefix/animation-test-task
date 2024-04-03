import { useRef, useState } from "react";
import s from "./style.module.scss";

type Props = {
  progress: number | null;
  startPoint: { x: number; y: number } | null;
  staticBlock: React.RefObject<HTMLDivElement>;
};

function Ball({ progress, startPoint, staticBlock }: Props) {
  if (!startPoint || !staticBlock.current || !progress) return null;
  return (
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
    ></div>
  );
}

export default Ball;
