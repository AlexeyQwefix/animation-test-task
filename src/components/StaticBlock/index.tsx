import { useRef, useState } from "react";
import s from "./style.module.scss";

function StaticBlock({ refToDiv }: { refToDiv: React.RefObject<HTMLDivElement> }) {
  return (
    <div ref={refToDiv} className={s.block}>
      2
    </div>
  );
}

export default StaticBlock;
