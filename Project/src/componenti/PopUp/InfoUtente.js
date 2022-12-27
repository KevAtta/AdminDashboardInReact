import classes from "./InfoUtente.module.css";

const InfoUtente = (props) => {
  return (
    <>
      <h1 className={classes.titolo}>Ecco i dati del'utente selezionato:</h1>
      <p className={classes.dati}>
        <span>ID:</span> {props.dati.id}
      </p>
      <p className={classes.dati}>
        <span>Nome:</span> {props.dati.name}
      </p>
      <p className={classes.dati}>
        <span>Email:</span> {props.dati.email}
      </p>
      <p className={classes.dati}>
        <span>Telefono:</span> {props.dati.phone}
      </p>
      <p className={classes.dati}>
        <span>WebSite:</span> {props.dati.website}
      </p>
      <p className={classes.dati}>
        <span>Azienda:</span> {props.dati.company.name}
      </p>
    </>
  );
};

export default InfoUtente;
