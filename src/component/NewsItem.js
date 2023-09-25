import React from 'react'

const NewsItem =(props)=> {
   
    let {title, discription,imageUrl,newsUrl,author,date,source,content}=props;
    return (
      // position-absolute top-0  translate-middle style={{zIndex:1,left:"90%"}}
      <div className="container ">
            <div className="card " >
              <div className="container" style={{display:'flex',justifyContent:'flex-end',position:'absolute',right: 0 }}>
                   <span className=" badge rounded-pill bg-danger" >{source}</span>
              </div>
            
            <img src={!imageUrl?"https://motor.ru/imgs/2023/09/24/08/6149699/448299eb855a31fb395b5ecda7a4d133d626edce.jpg":imageUrl} className="card-img-top" alt="error" />
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

export default NewsItem