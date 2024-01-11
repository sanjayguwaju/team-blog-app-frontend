import { faThumbsUp, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RecentCard = () => {
  return (
    <div className='col-12'>
      <h2 className="mb-3">Recent posts</h2>
      <div className="list-group mb-3">
        <a href="#0" className="list-group-item list-group-item-action">
          <div className="badge bg-primary float-end">Category</div>
          <h5>Blog post title</h5>
          <p className="small mb-2">Author Name (<time dateTime="2017-03-12T10:24">March 12, 2017 at 10:24 AM</time>)</p>
          <div className="small mb-2">
            <span className="badge bg-primary"><FontAwesomeIcon icon={faThumbsUp} /> 13 <span className="visually-hidden">likes</span></span>
            <span className="badge bg-primary"><FontAwesomeIcon icon={faComment} /> 3 <span className="visually-hidden">comments</span></span>
          </div>
          <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </a>
        {/* Repeat this block for other recent posts */}
      </div>
    </div>
  )
}
export default RecentCard;

