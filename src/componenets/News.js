
import React, { Component } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
// import PropTypes from 'prop-types';

export default class News extends Component {
    url = 'https://newsapi.org/v2/everything?apiKey=dfbe443caff74abbabe552389fc72e3d';
    articles = [];
    page = 1;
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            page: this.page,
            loader: false,
            apiData: false,
            totalResults: 0,
            keywrds: 'random',
            pageSize: 12,
            srting: 'publishedAt',
            errMsg: 'No Articles Found on this keyword',
            isErrorShow: false
        }
        this.textInput = React.createRef();
    };

    txtChange = (e)=>{
        let val = e.target.value;
        this.setState({
            keywrds: val
        })
    }
    srtChange = (e)=>{
        let val = e.target.value;
        this.setState({
            srting: val
        })
    }
    PSizeChane = (e)=>{
        let val = e.target.value;
        this.setState({
            pageSize: val
        })
    }

    searchClick = async()=>{
        if(this.state.keywrds === '' || this.state.pageSize === undefined || this.state.pageSize === ''){
            return
        }
        await this.higherFunc(this.url, this.state.page, this.state.pageSize, this.state.srting, this.state.keywrds);
    }

    higherFunc = async (url, page, pageSize, srting, keywrds) => {
        this.setState({
            apiData: false,
            loader: true,
            isErrorShow: false
        })
        let data = await fetch(`${url}&page=${page}&pageSize=${pageSize}&sortBy=${srting}&q=${keywrds}`).then(res => res.json()).then((data) => {
            return data
        })
        window.scrollTo(0, 0);
        this.setState({
            articles: data.articles,
            page: page,
            loader: false,
            apiData: true
        })
        return data;
    }

    async componentDidMount() {
        let returnData = await this.higherFunc(this.url, this.state.page, this.state.pageSize, this.state.srting, this.state.keywrds);
        this.setState({
            totalResults: returnData.totalResults
        })
    }

    prevClick = async () => {
        await this.higherFunc(this.url, this.state.page - 1, this.state.pageSize, this.state.srting, this.state.keywrds);
    }

    nextClick = async () => {
        await this.higherFunc(this.url, this.state.page + 1, this.state.pageSize, this.state.srting, this.state.keywrds);
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="d-flex justify-content-between">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Keywords</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={this.txtChange} value={this.state.keywrds} />
                        </div>
                        <div>
                            <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example" onChange={this.srtChange} value={this.state.srting}>
                                <option value="publishedAt">Published At</option>
                                <option value="popularity">Popularity</option>
                            </select>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Item Per Page</span>
                            <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={this.PSizeChane} value={this.state.pageSize}/>
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-success my-4" onClick={this.searchClick}>Search</button>
                    </div>
                    <h3 className="text-muted text-center mb-5">Your News</h3>
                    {
                        this.state.articles.length == 0 && !this.state.loader && <div className="errmsg text-center">
                                {this.state.errMsg}
                            </div>
                    }
                    <div className="newContainer">
                        {this.state.loader && <div className="loading text-center">
                            <Spinner />
                        </div>}
                        {this.state.apiData && this.state.articles.length != 0 &&<>
                            <div className="row mb-4 mt-4">
                                {
                                    this.state.articles.map((element) => {
                                        return <div className="col-lg-4 col-md-6 col-sm-12" key={element.url}>
                                            <Newsitem title={element.title} desc={element.description} imgUrl={element.urlToImage} url={element.url} />
                                        </div>
                                    })
                                }
                            </div>
                            <div className="d-flex justify-content-between mt-4 mb-5">
                                <button disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.prevClick}>Previous</button>
                                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-success" onClick={this.nextClick}>Next</button>
                            </div>
                        </>}
                    </div>
                </div>
            </>
        );
    }
}
