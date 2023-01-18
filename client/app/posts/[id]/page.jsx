import { Inter } from "@next/font/google";
import styles from "app/page.module.css";

const fetchSinglePost = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

const postPage = async ({ params }) => {
  const { id } = params;
  const post = await fetchSinglePost(id);
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>aqui vienen las post</code>
        </p>
        <article>
          <h1>
            este el post {post.title}{post.id}
          
          </h1>
          <p>{post.body}</p>
        </article>
      </div>
    </main>
  );
};

export default postPage;
