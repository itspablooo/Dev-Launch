const Card = ({posts, title}) => {
  if (!posts.length) {
    return <h3> No Posts Yet</h3>
  }
  return (
    <div>
      <h5 className="text-primary ">{title}</h5>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{posts.title}</h5>
          <p className="card-text">{posts.content}</p>
          <a href = {posts.link} className="btn btn-primary">{posts.button}</a>
  {/* 
          {posts.map(({ _id, title, content }) => ( // corrected 'data.posts' to 'posts'
            <div key={_id}>
              <h3>{title}</h3>
              <p>{content}</p>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  )
};

export default Card;