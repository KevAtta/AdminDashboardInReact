import classes from "./MenuSelezioneSx.module.css";

const MenuSelezioneSx = (props) => {
  return (
    <section className={classes.menu}>
      <ul className={classes["menu-sx"]}>
        <li
          className={
            props.selezioneUno
              ? `${classes["prima-voce"]} ${classes.attivo}`
              : `${classes["prima-voce"]}`
          }
        >
          <ion-icon
            name="desktop-outline"
            className={classes["icona-men-sx"]}
          ></ion-icon>
          <a
            href="/#"
            className={classes["link-sx"]}
            onClick={() => props.onSelect(true, false, false)}
          >
            Utenti
          </a>
        </li>
        <li
          className={
            props.selezioneDue
              ? `${classes["seconda-voce"]} ${classes.attivo}`
              : `${classes["seconda-voce"]}`
          }
        >
          <ion-icon
            name="images-outline"
            className={classes["icona-men-sx"]}
          ></ion-icon>
          <a
            href="/#"
            className={classes["link-sx"]}
            onClick={() => props.onSelect(false, true, false)}
          >
            Immagini
          </a>
        </li>
        <li
          className={
            props.selezioneTre
              ? `${classes["terza-voce"]} ${classes.attivo}`
              : `${classes["terza-voce"]}`
          }
        >
          <ion-icon
            name="share-outline"
            className={classes["icona-men-sx"]}
          ></ion-icon>
          <a
            href="/#"
            className={classes["link-sx"]}
            onClick={() => props.onSelect(false, false, true)}
          >
            Post
          </a>
        </li>
      </ul>
    </section>
  );
};

export default MenuSelezioneSx;
