import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description,imageUrl,newsUrl,author,publisher } = this.props;
    return (
      <div>
        <div className="card">
          <img className="card-img-top" src={imageUrl} alt="Card  cap" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text"><small className="text-muted" style={{fontStyle:"italic"}}>By {!author?"Unknown":author}</small>
            <span className="badge badge-pill badge-danger mx-2">{publisher}</span></p>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
