import Feed from "../components/Feed";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const posts = useLoaderData();
  return (
    <>
      <main>
        {posts.map((post) => <Feed key={post.id} posts={post} />)}
      </main>
    </>
  );
};

export default Home;