import { useState } from "react";
import classes from "./SezioneUtenti.module.css";
import Utente from "./Utente";

const SezioneUtenti = (props) => {
  const [listaUtenti, setListaUtenti] = useState([]);
  const [cercato, setCercato] = useState(true);

  const getLettera = (e) => {
    if (e.key === "Enter") {
      let input = e.target.value;
      let nomeTrovato = props.dati.filter((cercaNome) => {
        return cercaNome.name.indexOf(input) > -1;
      });

      if (nomeTrovato.length !== 0) {
        const utente = nomeTrovato;
        setListaUtenti(utente);
      }
      setCercato(false);

      if (nomeTrovato.length === 0) {
        setCercato(true);
        alert("Utente non trovato, riprova.");
      }
    }
  };

  const funzione = (e) => {
    if (e.target.value === "") {
      setListaUtenti(props.dati);
      setCercato(true);
    }
  };

  return (
    <section className={classes["corpo-sez1"]}>
      <div className={classes["div-bar-ricerca"]}>
        <input
          type="text"
          className={classes["barra-ricerca"]}
          placeholder="Ricerca qui l'utente"
          onKeyDown={getLettera}
          onChange={funzione}
        />
      </div>

      {/* bottone verde per aggiungere utente */}
      <button
        className={classes["bottone-aggiungi-utente"]}
        onClick={props.attivaPopUpAggiunta}
      >
        AGGIUNGI UTENTE
      </button>

      {/* lista degli utenti */}
      <ul className={classes["lista-utenti"]}>
        <div className={classes["nome-sezioni-lista-utenti"]}>
          <li>
            ID<ion-icon name="caret-down-outline"></ion-icon>
          </li>
          <li>
            Nome e cognome<ion-icon name="caret-down-outline"></ion-icon>
          </li>
          <li>
            E-mail<ion-icon name="caret-down-outline"></ion-icon>
          </li>
          <li>
            Opzioni<ion-icon name="caret-down-outline"></ion-icon>
          </li>
        </div>
        {cercato ? (
          // questo è stato fatto in quanto se vado a lavorare su un aray fittizzio esistente solo qui dentro
          // le funzioni di cancellazione e modifica smetterebbo di funzionare correttamente
          <>
            {props.dati.map((utente, index) => (
              <Utente
                key={index}
                dati={utente}
                cancellazione={props.cancellazione}
                modifica={props.modifica}
                mostraInfo={props.mostraInfo}
              />
            ))}
          </>
        ) : (
          <>
            {listaUtenti.map((utente, index) => (
              <Utente
                key={index}
                dati={utente}
                cancellazione={props.cancellazione}
                modifica={props.modifica}
                mostraInfo={props.mostraInfo}
              />
            ))}
          </>
        )}
      </ul>
    </section>
  );
};

export default SezioneUtenti;
