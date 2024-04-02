import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faComments,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";

const CommentSection = () => {
  return (
    <>
      <div className="container">
        <div className="col-md-12">
          <div className="comment-box--container">
            <div className="d-flex">
              <div className="d-flex flex-column">
                <img
                  src="https://placehold.it/64x64"
                  alt="Media object image"
                  className="mx-3 my-2 mb-5 flex-shrink-0" // Adding flex-shrink-0 to prevent image from shrinking
                />
              </div>
              <div className="flex-grow-1 d-flex">
                <textarea
                  className="form-control w-100" // Adding w-100 class to set width to 100%
                  rows="2"
                  placeholder="Add comment here"
                ></textarea>
              </div>
            </div>
            <div className="d-flex justify-content-end m-2">
              <button
                className="btn btn-sm btn-primary" // Using float-right to align button to the right
                type="submit"
              >
                <i className="fa fa-pencil fa-fw"></i> Add Comment
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="container">
          <div className="media d-flex">
            <div></div>
            <div>
              <img
                src="https://placehold.it/64x64"
                alt="Media object image"
                className="mx-3 my-2 mb-5"
              />
            </div>
            <div></div>
            <div className="media-body">
              <p>
                <a
                  href="mailto:example@domain.com"
                  style={{ textDecoration: "none" }}
                >
                  Jhon Doe
                </a>{" "}
                - Posted on:{" "}
                <time dateTime="2017-03-12T10:24">
                  March 12, 2017 at 10:24 AM
                </time>
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                arcu bibendum massa euismod scelerisque. Morbi porttitor tellus
                tempor metus posuere dictum. Interdum et malesuada fames ac ante
                ipsum primis in faucibus.
              </p>
              <div className="d-flex justify-content-end small">
                <buttton className="like--button">
                  <FontAwesomeIcon icon={faThumbsUp} /> 13{" "}
                  <span className="visually-hidden">likes</span>
                </buttton>
                <buttton className="dislike--button">
                  <FontAwesomeIcon icon={faThumbsDown} /> 13{" "}
                  <span className="visually-hidden">likes</span>
                </buttton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentSection;
