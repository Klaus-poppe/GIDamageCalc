import { ChangeEvent, useState } from "react";
import { character, constellation } from "../../models/character";
import styles from "./constellations.module.css";

const Constellations = ({ setCharCon }: constellationsProps) => {
  const [cons, setCons] = useState([false, false, false, false, false, false]);

  const selectCon = (index: number) => {
    return () => {
      const selectedCon = (index + 1) as constellation;
      const currentSelectedCon = cons.reduce(
        (conNumber, conStatus) => (conStatus ? conNumber + 1 : conNumber),
        0
      );
      const isConActivated = currentSelectedCon === selectedCon;

      let selectedConsStatus = cons.map((con, i) => {
        if (i <= index) return !isConActivated;
        return false;
      });

      setCons(selectedConsStatus);
      setCharCon(selectedCon);
    };
  };

  return (
    <div className={styles["constellation-container"]}>
      {cons.map((conStatus, index) => (
        <div
          key={index}
          onClick={selectCon(index)}
          className={`${styles["constellation"]} ${
            conStatus && styles["constellation-selected"]
          }`}
        >
          {`C${index + 1}`}
        </div>
      ))}
    </div>
  );
};

interface constellationsProps {
  setCharCon: (con: constellation) => () => void;
}

export default Constellations;
