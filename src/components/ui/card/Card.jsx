import "../card/Card.scss";

const Card = () => {
  return (
    <div>
      <div className="card custom-card">
        <div className="card-body ">
          <h5 className="card-title">About the blog</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            totam, eligendi quos animi fugiat eveniet corporis veritatis
            perspiciatis illum. Facere accusamus iusto magni odio ratione rem ab
            quod sequi voluptate!
            <a href="#" className="btn btn-link text-decoration-none">
              Read More..
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
