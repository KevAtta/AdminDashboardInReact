import immagine from "../../Assets/user_placeholder.png";
import classes from "./Utente.module.css";

const Utente = (props) => {
  return (
    <li className={`${classes.utente} ${"classe" + props.index}`}>
      <p>{props.dati.id}</p>
      <a
        href="/#"
        className={classes["nome-lista-utenti"]}
        onClick={() => props.mostraInfo(props.dati.id)}
      >
        <img src={immagine} alt="pupino" className={classes.placeholder} />
        <h3 className={classes.nome}>{props.dati.name}</h3>
      </a>
      <p className={classes.email}>{props.dati.email}</p>
      <div className={classes["icone-lista-utente"]}>
        <a
          href="/#"
          className={classes.matita}
          onClick={() => props.modifica(props.dati.id)}
        >
          <ion-icon name="pencil-outline"></ion-icon>
        </a>
        <a
          href="/#"
          className={classes.bidone}
          onClick={() => props.cancellazione(props.dati.id)}
        >
          <ion-icon
            name="trash-bin-outline"
            className={classes.bidone}
          ></ion-icon>
        </a>
      </div>
    </li>
  );
};

export default Utente;
