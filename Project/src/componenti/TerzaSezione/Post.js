import classes from "../TerzaSezione/Post.module.css";
import img from "../../Assets/user_placeholder.png";

const Post = (props) => {
  let content = "";
  content = "https://jsonplaceholder.typicode.com/posts/" + props.dati.id;

  return (
    <div className={classes["post-list"]}>
      <div className={classes["post-card"]}>
        <a href={content} target="_blank" rel="noreferrer">
          <img
            src={img}
            alt="foto"
            className={classes["profilo-autore-post"]}
          />
          <h4 className={classes.titolo}>{props.dati.title}</h4>
          <p className={classes["id-autore"]}>ID utente: {props.dati.userId}</p>
          <p className={classes["corpo-post"]}>{props.dati.body}</p>
        </a>
      </div>
    </div>
  );
};

export default Post;
