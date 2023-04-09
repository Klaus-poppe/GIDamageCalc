import anemoAura from "../../assets/misc/Element_Anemo.svg";
import geoAura from "../../assets/misc/Element_Geo.svg";
import dendroAura from "../../assets/misc/Element_Dendro.svg";
import cryoAura from "../../assets/misc/Element_Cryo.svg";
import electroAura from "../../assets/misc/Element_Electro.svg";
import pyroAura from "../../assets/misc/Element_Pyro.svg";
import hydroAura from "../../assets/misc/Element_Hydro.svg";
import { IoClose } from "react-icons/io5";
import styles from "./auraSelector.module.css";

const AuraSelector = ({ aura, setAura }: auraSelector) => {
  return (
    <>
      <div className={styles["char-aura-container"]}>
        {aura === "none" ? (
          <div
            className={styles["char-aura current-aura"]}
            style={{
              padding: "4px",
              height: "40px",
              width: "40px",
            }}
          ></div>
        ) : (
          <img
            className={`${styles["char-aura"]} ${styles["current-aura"]}`}
            src={aura}
          ></img>
        )}
      </div>
      <div className={styles["aura-selecter"]}>
        <img
          className={`${styles["char-aura"]} ${
            aura === anemoAura && styles["selected-aura"]
          }`}
          onClick={setAura(anemoAura)}
          src={anemoAura}
        ></img>
        <img
          className={`${styles["char-aura"]} ${
            aura === geoAura && styles["selected-aura"]
          }`}
          onClick={setAura(geoAura)}
          src={geoAura}
        ></img>
        <img
          className={`${styles["char-aura"]} ${
            aura === dendroAura && styles["selected-aura"]
          }`}
          onClick={setAura(dendroAura)}
          src={dendroAura}
        ></img>
        <img
          className={`${styles["char-aura"]} ${
            aura === cryoAura && styles["selected-aura"]
          }`}
          onClick={setAura(cryoAura)}
          src={cryoAura}
        ></img>
        <img
          className={`${styles["char-aura"]} ${
            aura === pyroAura && styles["selected-aura"]
          }`}
          onClick={setAura(pyroAura)}
          src={pyroAura}
        ></img>
        <img
          className={`${styles["char-aura"]} ${
            aura === electroAura && styles["selected-aura"]
          }`}
          onClick={setAura(electroAura)}
          src={electroAura}
        ></img>
        <img
          className={`${styles["char-aura"]} ${
            aura === hydroAura && styles["selected-aura"]
          }`}
          onClick={setAura(hydroAura)}
          src={hydroAura}
        ></img>
        <IoClose
          onClick={setAura("none")}
          size={22}
          style={{
            color: "rgba(0 ,0, 0, 0.4)",
            cursor: "pointer",
          }}
        />
      </div>
    </>
  );
};

interface auraSelector {
  aura: string;
  setAura: (aura: string) => () => void;
}

export default AuraSelector;
