import classes from "./InfoPost.module.css";

const InfoPost = (props) => {
  return (
    <div>
      <h1 className={classes.titolo}>Ecco i dati relativi ai post:</h1>
      <p className={classes.dati}>
        <span>Titolo:</span> {props.dati.title}
      </p>
      <p className={classes.dati}>
        <span>Corpo:</span> {props.dati.body}
      </p>
    </div>
  );
};

export default InfoPost;
