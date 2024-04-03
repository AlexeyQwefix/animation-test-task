import { useRef, useState } from "react";
import s from "./style.module.scss";

function MovingBlock({ refToDiv }: { refToDiv: React.RefObject<HTMLDivElement> }) {
  return (
    <div ref={refToDiv} className={s.block}>
      1
    </div>
  );
}

export default MovingBlock;
