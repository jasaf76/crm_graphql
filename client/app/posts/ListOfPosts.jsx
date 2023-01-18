import styles from "app/page.module.css";
import Link from "next/link";
import "app/globals.css";
//import { Inter } from "@next/font/google";
import { Button } from "./Button.jsx";
const fetchPost = () => {
  console.log("fetching Post");
  console.log("🇦🇮 🚁 ");

  //getStaticProps
  //-> return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>res.json());
  //getServerSideProps
  //-> return fetch("https://jsonplaceholder.typicode.com/posts",{cache: 'no-store'}).then((res) =>res.json());
  //this is the incremental static regeneration
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  }).then((res) => res.json());
};

export async function ListOfPosts() {
  const posts = await fetchPost();
  return posts.slice(0, 5).map((post) => (

    <article key={post.id}>
      {/* <Link href={`/posts/${post.id}`} key={post.id}> */}
      <Link href={`/posts/${post.id}`}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
        <Button id={post.id} />
         </Link>
      </article>
   
  ));
}
