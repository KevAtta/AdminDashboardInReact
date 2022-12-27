import classes from "./PopUpInfo.module.css";
import Modal3 from "../UI/Modal3";
import InfoUtente from "./InfoUtente";
import InfoPost from "./InfoPost";
import { useState } from "react";

const PopUpInfo = (props) => {
  const [attivo, setAttivo] = useState(true);

  const attivaDx = () => {
    setAttivo(false);
  };

  const attivaSx = () => {
    setAttivo(true);
  };

  let content1 = "";
  if (attivo) {
    content1 = `${classes["bottone-selezione"]} ${classes.attivo} ${classes.bottonesx}`;
  } else {
    content1 = `${classes["bottone-selezione"]} ${classes.bottonesx}`;
  }

  let content2 = "";
  if (attivo) {
    content2 = `${classes["bottone-selezione"]} ${classes.bottonedx}`;
  } else {
    content2 = `${classes["bottone-selezione"]} ${classes.attivo} ${classes.bottonedx}`;
  }

  return (
    <Modal3>
      <div className={classes.popup}>
        <div className={classes["posizione-bottone"]}>
          <button className={classes.close} onClick={props.chiudiPopUp}>
            &times;
          </button>
        </div>
        <div className={classes.corpo}>
          <div className={classes["bottoni-selezione"]}>
            <button className={content1} onClick={attivaSx}>
              Dati utente
            </button>
            <button className={content2} onClick={attivaDx}>
              Post
            </button>
          </div>
          {attivo ? (
            <InfoUtente dati={props.datiUtente} />
          ) : (
            <InfoPost dati={props.datiPost} />
          )}
        </div>
      </div>
    </Modal3>
  );
};

export default PopUpInfo;
