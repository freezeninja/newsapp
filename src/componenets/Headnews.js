import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export default class Headnews extends Component {
  url = 'https://newsapi.org/v2/top-headlines?apiKey=dfbe443caff74abbabe552389fc72e3d';
  headingArticles = [];
  page = 1;
  Country = 'in';
  pageSize = 12

  static defaultProps = {
    category: 'general'
  }
  static propTypes = {
    category: PropTypes.string
  }

  constructor() {
    super();
    this.state = {
      articles: this.headingArticles,
      page: this.page,
      country: this.Country,
      loader: false,
      totalResults: 0
    }
  };

  updateFunc = async (url, page, country, category, pageSize) => {
    this.setState({
      loader: true
    })
    let data = await fetch(`${url}&country=${country}&category=${category}&page=${page}&pageSize=${pageSize}`).then(res => res.json()).then((data) => {
      return data
    })
    this.setState({
      articles: this.state.articles.concat(data.articles),
      loader: false,
      page: page
    })
    return data
  }

  async componentDidMount() {
    let returnData = await this.updateFunc(this.url, this.state.page, this.state.country, this.props.category, this.pageSize);
    this.setState({
      totalResults: returnData.totalResults
    })
  }

  fetchMoreData = async () => {
    await this.updateFunc(this.url, this.state.page + 1, this.state.country, this.props.category, this.pageSize);
  }

  render() {
    return (
      <>
        <div className="newContainer">
          {this.state.loader && <div className="loading text-center">
            <Spinner />
          </div>}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={
              <div className="text-center mt-4 mb-3">
                <Spinner />
              </div>
            }
          >
            <div className="container">
              <div className="row">
                {
                  this.state.articles.map((element) => {
                    return <div className="col-lg-4 col-md-6 col-sm-12">
                      <Newsitem title={element.title} desc={element.description} imgUrl={element.urlToImage} url={element.url} />
                    </div>
                  })
                }
              </div>
            </div>
          </InfiniteScroll>
        </div>
      </>
    )
  }
}
