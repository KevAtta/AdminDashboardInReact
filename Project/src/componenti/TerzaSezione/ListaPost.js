import classes from "../TerzaSezione/Post.module.css";
import Post from "./Post";

const ListaPost = (props) => {
  return (
    <section className={classes.sezione}>
      <div className={classes["contenuto-post"]}>
        <h3 className={classes["titolo-sezione"]}>POST DEGLI UTENTI</h3>
        {props.datiPost.map((post) => {
          return <Post key={post.id} dati={post} />;
        })}
      </div>
    </section>
  );
};

export default ListaPost;
