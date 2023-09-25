import React, { useEffect ,useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=>  {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  

  const capitalizeFirstLetter = (string) =>{
    return string.charAt(0).toUpperCase()+ string.slice(1);
  }

 

   const updateNews =async()=> {
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d6e1e34ab9e44bb89a70c914d7d38f5d&page=${page}&pagesize=${props.pageSize}`;
    let data = await fetch(url);
    props.setProgress(30);
    setLoading(true);
    props.setProgress(50);
    props.setProgress(70);
    
    let parseData = await data.json();
    props.setProgress(90);

    setArticles(parseData.articles,);
    setLoading(false);
    setTotalResults(parseData.totalResults);
    
    props.setProgress(100);
  }

  useEffect(() => {
    document.title = `${capitalizeFirstLetter (props.category)} - NewsMonkey`;
    updateNews();
  }, [])
  

 
 const fetchMoreData = async() => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d6e1e34ab9e44bb89a70c914d7d38f5d&page=${page+1}&pagesize=${props.pageSize}`;
    setPage(page+1)
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
    
  };

    return (
      <>
        <h1 className="text-center" style={{ margin: "35px 0px", marginTop: "90px" }}>NewsMonkey -Top {capitalizeFirstLetter(props.category)} Headline</h1>
           {loading && <Spinner /> }

<InfiniteScroll
  dataLength={articles.length}
  next={fetchMoreData}
  hasMore={articles.length !== totalResults}
  loader={<Spinner />}
  style={{ overflow:"overflow-hidden"}}
  
>
  <div className="container">
    <div className="row">
      {articles.map((element) => {
        return (
          // key={Math.random()}
          <div className="col-md-4 my-3" key={Math.random()}>
            <NewsItem
              title={element.title ? element.title : ""}
              discription={element.description ? element.description : ""}
              imageUrl={element.urlToImage}
              newsUrl={element.url}
              author={element.author}
              date={element.publishedAt}
              source={element.source.name}
            />
          </div>
        );
      })}
    </div>
  </div>
  
</InfiniteScroll>

       
              
      </>
    );
  }


News.defaultProps = {
  country: "in",
   pageSize: 8,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
