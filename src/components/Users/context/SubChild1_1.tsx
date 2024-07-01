import { useContext } from "react";
import { AppContext } from "./ContextApp";

const SubChild1_1 = () => {
  const appContext = useContext(AppContext);

  const deletePost = (postId) => {
    appContext.setPosts(currentPosts => currentPosts.filter(post => post.id !== post.Id))
  }


  return (
    <>
      {appContext.posts.slice(0,12).map((post) => {
        const author = appContext.users.find((user) => user.id === post.userId)?.name || "Unknown Author";

        return(
            <div style={{backgroundColor: "lightcyan", border: "2px solid lightblue"}}>
                <h4>{author}</h4>
                <p>
                    <span><b>ID:</b> {post.id}, </span>
                    <b>Title: </b>{post?.title}
                </p>
            </div>
        )
      })}
    </>
  );
};

export default SubChild1_1;
