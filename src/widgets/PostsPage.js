import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../context/user.context";

function PostsPage() {
  const { id } = useParams();
  const { store } = useContext(UserContext);

  const user = store[id - 1];

  if (id === "undefined") {
    return <Redirect to="/" />;
  }

  return (
    <div className="post-page">
      <div className="author">
        <h1>
          {user.fname} {user.lname}
        </h1>

        <Link to="/"> GO HOME</Link>
      </div>
      {user.posts.map((post) => (
        <div className="post-card" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostsPage;
