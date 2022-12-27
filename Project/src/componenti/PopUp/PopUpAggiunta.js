import classes from "./PopUpAggiunta.module.css";
import Modal from "../UI/Modal";
import { useState } from "react";

const PopUpAggiunta = (props) => {
  const [inputNome, setInputNome] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputIndirizzo, setInputIndirizzo] = useState("");
  const [inputTelefono, setInputTelefono] = useState("");
  const [inputAzienda, setInputAzienda] = useState("");
  const [numeroID, setNumeroID] = useState(10);

  const prendiNome = (e) => {
    setInputNome(e.target.value);
  };

  const prendiEmail = (e) => {
    setInputEmail(e.target.value);
  };

  const prendiIndirizzo = (e) => {
    setInputIndirizzo(e.target.value);
  };

  const prendiTelefono = (e) => {
    setInputTelefono(e.target.value);
  };

  const prendiAzienda = (e) => {
    setInputAzienda(e.target.value);
  };

  const prendiDati = (e) => {
    e.preventDefault();

    const datiForm = {
      id: numeroID + 1,
      name: inputNome,
      email: inputEmail,
      phone: inputTelefono,
    };

    setNumeroID((prevState) => prevState + 1);

    props.prendiDatiNuovoUtente(datiForm);

    setInputNome("");
    setInputEmail("");
    setInputIndirizzo("");
    setInputTelefono("");
    setInputAzienda("");
  };

  return (
    <Modal>
      <div className={classes["posizione-bottone"]} onClick={props.chiudiPopUp}>
        <button className={classes.close}>&times;</button>
      </div>
      <h1 className={classes.titolo}>
        Inserisci i dati nel form qui si seguito:
      </h1>
      <form className={classes["form-aggiunta-utenti"]} onSubmit={prendiDati}>
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
        <label htmlFor="indirizzo">Indirizzo</label>
        <input
          id="indirizzo"
          name="indirizzo"
          type="text"
          placeholder="Indirizzo"
          className={classes["input-popup2"]}
          onChange={prendiIndirizzo}
          value={inputIndirizzo}
          required
        />
        <label htmlFor="telefono">Telefono</label>
        <input
          id="telefono"
          name="telefono"
          type="number"
          placeholder="Telefono"
          className={classes["input-popup2"]}
          onChange={prendiTelefono}
          value={inputTelefono}
          required
        />
        <label htmlFor="azienda">Nome azienda</label>
        <input
          id="azienda"
          name="azienda"
          type="text"
          placeholder="Nome azienda"
          className={classes["input-popup2"]}
          onChange={prendiAzienda}
          value={inputAzienda}
          required
        />
        <button type="submit" className={classes["bottone-conferma"]}>
          Aggiungi utente
        </button>
      </form>
    </Modal>
  );
};

export default PopUpAggiunta;
