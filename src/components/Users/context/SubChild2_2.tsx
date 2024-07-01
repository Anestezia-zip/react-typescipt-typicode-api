import { useContext } from "react";
import { AppContext } from "./ContextApp";

const SubChild2_2 = () => {
  const appContext = useContext(AppContext);

  return (
    <>
      {appContext.posts.slice(0, 12).map((post) => {
        const author = appContext.users.find((user) => user.id === post.userId)?.name || "Unknown Author";
        return(
            <div key={post.id} style={{backgroundColor: 'lightseagreen', border: "2px solid lightblue", padding:'0 10px 8px'}}>
            <h4><b>Author: {author ? author : 'Not found'}</b></h4>
            <span><b>{post.id}. </b></span>
            <span> {post.title} </span>
            <button onClick={() => appContext.deletePost(post.id)}>
                Delete Post
            </button>
            </div>
        )
      })}
    </>
  );
};

export default SubChild2_2;
