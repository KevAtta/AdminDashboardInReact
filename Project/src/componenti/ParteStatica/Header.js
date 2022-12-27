import classes from "./Header.module.css";

const Header = (props) => {
  let content = "";

  if (props.sezioneAttivaUno) {
    content = "/Utenti";
  }

  if (props.sezioneAttivaDue) {
    content = "/Immagini";
  }

  if (props.sezioneAttivaTre) {
    content = "/Post";
  }

  return (
    <header className={classes.header}>
      <div>
        Site Administration
        <strong className={classes.sezione}>{content}</strong>
      </div>
      <div className={classes["icone-header"]}>
        <p>
          <a href="/#" className={classes["link-header"]}>
            <ion-icon name="lock-closed-outline"></ion-icon>
          </a>
        </p>
        <p>
          <a href="/#" className={classes["link-header"]}>
            <ion-icon name="log-out-outline"></ion-icon>
          </a>
        </p>
      </div>
    </header>
  );
};

export default Header;
