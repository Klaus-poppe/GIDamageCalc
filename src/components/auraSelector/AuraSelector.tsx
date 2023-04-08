import anemoAura from "../../assets/misc/Element_Anemo.svg";
import geoAura from "../../assets/misc/Element_Geo.svg";
import dendroAura from "../../assets/misc/Element_Dendro.svg";
import cryoAura from "../../assets/misc/Element_Cryo.svg";
import electroAura from "../../assets/misc/Element_Electro.svg";
import pyroAura from "../../assets/misc/Element_Pyro.svg";
import hydroAura from "../../assets/misc/Element_Hydro.svg";
import { IoClose } from "react-icons/io5";

const AuraSelector = ({ aura, setAura }: auraSelector) => {
  return (
    <>
      <div className="char-aura-container">
        {aura === "none" ? (
          <div
            className="char-aura current-aura"
            style={{
              padding: "4px",
              height: "40px",
              width: "40px",
            }}
          ></div>
        ) : (
          <img className="char-aura current-aura" src={aura}></img>
        )}
      </div>
      <div className="aura-selecter">
        <img
          className={`char-aura ${aura === anemoAura && "selected-aura"}`}
          onClick={setAura(anemoAura)}
          src={anemoAura}
        ></img>
        <img
          className={`char-aura ${aura === geoAura && "selected-aura"}`}
          onClick={setAura(geoAura)}
          src={geoAura}
        ></img>
        <img
          className={`char-aura ${aura === dendroAura && "selected-aura"}`}
          onClick={setAura(dendroAura)}
          src={dendroAura}
        ></img>
        <img
          className={`char-aura ${aura === cryoAura && "selected-aura"}`}
          onClick={setAura(cryoAura)}
          src={cryoAura}
        ></img>
        <img
          className={`char-aura ${aura === pyroAura && "selected-aura"}`}
          onClick={setAura(pyroAura)}
          src={pyroAura}
        ></img>
        <img
          className={`char-aura ${aura === electroAura && "selected-aura"}`}
          onClick={setAura(electroAura)}
          src={electroAura}
        ></img>
        <img
          className={`char-aura ${aura === hydroAura && "selected-aura"}`}
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
