import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
    let {title, discription,imageUrl,newsUrl,author,date,source}=this.props;
    return (
      <div className='my-3 style={{overflow: hidden}}}'>
            <div className="card" >
            <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{zIndex:1,left:"90%"}}>{source}</span>
            <img src={!imageUrl?"https://c.biztoc.com/p/bfc41211bf9bd7f6/s.webp":imageUrl} className="card-img-top" alt="error" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{discription}...</p>
                <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toUTCString()}</small></p>
                <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
            </div>
      </div>
    )
  }
}

export default NewsItem