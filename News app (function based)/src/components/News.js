import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';


const News =(props) => {
 
  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState([true])
  const [page, setPage] = useState(1)
  const [Results, setResults] = useState()
  // document.title = `${ capitalizeFirstLetter(props.category)} - NewsMonkey`;



  const capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
    document.title = `${ capitalizeFirstLetter(props.category)} - NewsMonkey`;
  }
    
  const updateNews = async() => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c34ade5fd37e4ea5a200611ee988447e&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);

    setArticles(parsedData.articles)
    seTtotalResults(parsedDataTtotalResults)
    setLoading(false)

    props.setProgress(100);
  }
  useEffect(() => {
     updateNews();
    
  
  }, [])
  

  // async componentDidMount() {}




 

  handlePrevClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c34ade5fd37e4ea5a200611ee988447e&page=${  page - 1}&pageSize=${props.pageSize}`;
    //  setState({loading:true});
    // let data = await fetch(url);
    // var parsedData = await data.json();
    //  setState({
    //   page:  page - 1,
    //   articles:parsedData.articles,
    //   loading: false
    // })
     setPage(page - 1);
     updateNews();

  }

  handleNextClick = async () => {
    // if (  page + 1 > Math.ceil(  totalResults/props.pageSize)) {
      
    // } else {
      
    //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c34ade5fd37e4ea5a200611ee988447e&page=${  page + 1}&pageSize=${props.pageSize}`;
    //    setState({loading:true});
    //   let data = await fetch(url);
    //   var parsedData = await data.json();

    //    setState({
    //     page:  page + 1,
    //     articles:parsedData.articles,
    //     loading: false
    //   })
    // }
     setPage(page + 1);
     updateNews();

  }

  const fetchMoreData = async () => {
     setState({page:   page + 1})
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c34ade5fd37e4ea5a200611ee988447e&page=${  page}&pageSize=${props.pageSize}`;
    //  setState({ loading: true });
  
    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };

    return (
      <>
        <h2 className='text-center'>NewsMonkey - Top { capitalizeFirstLetter(props.category)} Headlines</h2>
        { loading && <Spinner/>}

        <InfiniteScroll 
        dataLength={ articles.length}
        next={ fetchMoreData}
        hasMore={  articles.length !==   totalResults}
        loader = {<Spinner/>}
        >

      <div className="container">
        <div className="row">
 {  articles.map((element, index)=>{
          return <div className="col-md-4" key={index} > 
          <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
      </div>
        })
        }
        </div>
        </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button disabled={  page <= 1} type='button' className='btn btn-dark' onClick={ handlePrevClick}>&larr; Previous</button>
          
          <button disabled={(  page + 1) > Math.ceil(  totalResults/props.pageSize)} type='button' className='btn btn-dark' onClick={ handleNextClick}>Next &rarr;</button>
          
        </div> */}
        </>
    )



News.defaultProps = {
  country: 'us',
  pageSize:8,
  category: "General",
}

News.propTypes = {
  country: PropTypes.string,
  pageSize:PropTypes.number,
  category: PropTypes.string,
}
export default News


