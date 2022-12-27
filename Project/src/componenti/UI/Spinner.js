import classes from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={classes.container}>
      <div className={classes.loader}></div>
    </div>
  );
};

export default Spinner;
