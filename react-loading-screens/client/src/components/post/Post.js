import "./post.css";

function Post({ post }) {
  return (
    <div className="post">
      <div className="post-img-container">
        <img className="post-img" src={post.img} alt={post.title} />
        <span className="post-duration">{post.duration}</span>
      </div>
      <div className="post-info-container">
        <img
          className="post-avatar"
          src={post.channel.avatar}
          alt={post.channel.name}
        />
        <div className="post-info">
          <span className="post-title">{post.title}</span>
          <span className="post-chanel">{post.channel.name}</span>
          <span className="post-detail">
            {post.views} • {post.date}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Post;
