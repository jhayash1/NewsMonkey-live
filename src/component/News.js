import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    };
    document.title = `${this.capitalize(this.props.category)} - NewsMonkey`;
  }
  async updateNews() {
    // const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=23ae44d0290a41f5af9237474c196787&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({
    //   articles:parsedData.articles,
    //   totalResults: parsedData.totalResults,
    // });
  }
  async componentDidMount() {
    this.fetchMoreData();
  }
  fetchMoreData = async () => {
    this.setState({page: this.state.page + 1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=23ae44d0290a41f5af9237474c196787&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false 
    });
  };
  render() {
    return (
      <div className="">
        <h1 className="text-center my-4 text-decoration-underline">
          Top - {this.capitalize(this.props.category)} Headlines
        </h1>
        {this.state.loading && <Spinner/>}
          <div className="container">
            <InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              hasMore={this.state.articles.length !== this.state.totalResults}
              loader={<Spinner />}
            >

                <div className="row pt-3">
                  { this.state.articles.map((element) => {
                      return  <div className="col-md-4 mb-3 " key={element.url}>
                                <Newsitem
                                  title={element.title ? element.title.slice(0, 20) : ""}
                                  discription={element.description? element.description.slice(0, 88): ""}
                                  imageUrl={element.urlToImage}
                                  newsurl={element.url}
                                  date={element.publishedAt}
                                  author={element.author}
                                  source={element.source.name}
                                />
                              </div>
                    })}
                </div>
            </InfiniteScroll>
          </div>
      </div>
    );
  }
}

export default News;
