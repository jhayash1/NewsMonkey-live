import React, { Component } from "react";

export class Newsitem extends Component {
  
  render() {
    let { title, discription, imageUrl, newsurl, date,author,source } = this.props;
    return (
      <div>
        <div className="card" >
          <img src={!imageUrl?"https://c.ndtvimg.com/2022-06/o9jjlc2o_shilpa-shetty_625x300_09_June_22.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
          <span className="position-absolute top-0 translate-top badge rounded-pill bg-danger">{source}</span>
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{discription}...</p>
            <p className="card-text"><small className="text-muted">By {!author?"Unkown":author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsurl} target="_blank" className="btn btn-sm btn-dark" rel="noreferrer" > Read More</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
