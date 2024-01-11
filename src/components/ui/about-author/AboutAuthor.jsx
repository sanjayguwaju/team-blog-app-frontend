// Author: Smriti Manandhar

const AboutAuthor = () => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="text-center">
          <h5 className="card-title">Card title</h5>
          <img src="http://placehold.it/200x200" className="img-fluid rounded-circle" alt="Figure image" />
          <ul className="list-inline">
            <li className="list-inline-item small"><a href="#" style={{ textDecoration: 'none' }}>Twitter</a></li>
            <li className="list-inline-item small"><a href="#" style={{ textDecoration: 'none' }}>LinkedIn</a></li>
          </ul>
        </div>
        <h5><a href="#" style={{ textDecoration: 'none' }}>Author Name</a></h5>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget purus nec a
          rcu vulputate tincidunt. Fusce scelerisque, nisl sit amet tincidunt feugiat, arcu urna varius ligula, sed vehi
          cula lorem libero nec justo.</p>
      </div>
    </div>
  );
};

export default AboutAuthor
