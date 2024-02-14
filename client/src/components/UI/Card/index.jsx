const Card = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <a href = {props.link} className="btn btn-primary">{props.button}</a>
      </div>
    </div>
  )
};

export default Card;