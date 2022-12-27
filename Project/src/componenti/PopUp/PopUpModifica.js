import classes from "./PopUpModifica.module.css";
import Modal2 from "../UI/Modal2";
import { useState } from "react";

const PopUpModifica = (props) => {
  const [inputNome, setInputNome] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  const prendiNome = (e) => {
    setInputNome(e.target.value);
  };

  const prendiEmail = (e) => {
    setInputEmail(e.target.value);
  };

  const inviaDati = (e) => {
    e.preventDefault();

    props.datiModificati(inputNome, inputEmail);

    setInputNome("");
    setInputEmail("");

    props.chiudiPopUp();
  };

  return (
    <Modal2>
      <div className={classes["posizione-bottone"]}>
        <button className={classes.close} onClick={props.chiudiPopUp}>
          &times;
        </button>
      </div>
      <h1 className={classes.titolo}>
        Inserisci i dati nel form qui si seguito:
      </h1>
      <form className={classes["form-aggiunta-utenti"]} onSubmit={inviaDati}>
        <label htmlFor="nomecompleto">Nome e Cognome</label>
        <input
          name="nomecompleto"
          type="text"
          placeholder="Nome"
          className={classes["input-popup2"]}
          onChange={prendiNome}
          value={inputNome}
          required
        />
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          name="email"
          type="text"
          placeholder="E-mail"
          className={classes["input-popup2"]}
          onChange={prendiEmail}
          value={inputEmail}
          required
        />
        <button type="submit" className={classes["bottone-conferma"]}>
          Aggiungi utente
        </button>
      </form>
    </Modal2>
  );
};

export default PopUpModifica;
