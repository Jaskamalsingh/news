import React from 'react'

const NewsItem =(props)=> {

    let { title, description, imageurl, newsurl,  author, date, source } = props;
    return (
      <div>
        <div className="card" style={{ width: "18rem", margin: "20px auto" }}>
          <div style={{display:"flex", justifyContent:"flex-end", position:"absolute",right:"0"}}>
            <span className=" badge rounded-pill bg-danger" >
              {source}
            
              <span className="visually-hidden">unread messages</span>
            </span>
          </div>
          <img src={!imageurl ? "https://i.insider.com/64b6936676558a00189d16b1?width=1200&format=jpeg" : imageurl} className="rounded mx-auto d-block" alt="" style={{ height: "200px", width: "100%" }} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {date}</small></p>
            <a rel='noferrer' href={newsurl}  className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  
}
export default  NewsItem