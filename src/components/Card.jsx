import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Card = () => {
  return (
    <div>
        <div className="card" style={{width: "20rem"}}>
            <div className="card-body">
            <h5 className="card-title">About the blog</h5>
            <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cumque totam, eligendi quos animi fugiat eveniet corporis 
                veritatis perspiciatis illum. Facere accusamus iusto magni 
                odio ratione rem ab quod sequi voluptate!
            </p>
            <a href="#" className="btn btn-link text-decoration-none">Read More..</a>
            </div>
        </div>
    </div>
  )
}

export default Card
