import { FC } from "react";

import { Cell } from "./Cell";

import styles from "./Row.module.css";

export const Row: FC<{ cellCount: number }> = ({ cellCount }) => {
  return (
    <div className={styles.row}>
      {Array(cellCount)
        .fill(null)
        .map((_, index) => (
          <Cell key={index} />
        ))}
    </div>
  );
};
