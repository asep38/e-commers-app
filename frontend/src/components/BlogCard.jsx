import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="col-3">
      <div className="blog-card">
        <div className="card-image">
          <img src="images/blog-1.jpg" className="img-fluid" alt="" />
        </div>
        <div className="blog-content">
          <p className="date"> 1 dec, 2023</p>
          <h5 className="tittle">A Beautiful Sunday</h5>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            accusamus cupiditate neque amet modi incidunt earum expedita.
          </p>
          <Link to="/blog/:id" className="button">
            Read More..
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
