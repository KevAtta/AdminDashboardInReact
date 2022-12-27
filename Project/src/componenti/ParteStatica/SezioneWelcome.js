import classes from "./SezioneWelcome.module.css";

const SezioneWelcome = () => {
  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <nav className={classes.nav}>
      <a className={classes["link-refresh"]} href="/#" onClick={refreshPage}>
        <div className={classes.img}>
          <img
            src="https://randomuser.me/api/portraits/women/82.jpg"
            className={classes["img-profilo"]}
            alt="impiegata"
          />
        </div>
        <div className={classes["info-profilo"]}>
          <p className={classes.welcome}>Welcome</p>
          <p className={classes["nome-profilo"]}>
            <strong>Sandra Mondaini</strong>
          </p>
        </div>
      </a>
    </nav>
  );
};

export default SezioneWelcome;
