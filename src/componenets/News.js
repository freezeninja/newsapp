
import React, { Component } from 'react';
import Newsitem from './Newsitem';

export default class News extends Component {
    articles = [];
    constructor() {
        super();
        this.state = {
            articles: this.articles
        }
    };

    async componentDidMount() {
        let url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=dfbe443caff74abbabe552389fc72e3d';
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles });
    }

    render() {
        return (
            <>
                <h3 className="text-muted text-center">Your News</h3>
                <div className="container">
                    <div className="row">
                        {
                            this.state.articles.map((element) => {
                                return <div className="col-lg-4 col-md-6 col-sm-12" key={element.url}>
                                    <Newsitem title={element.title} desc={element.description} imgUrl={element.urlToImage}/>
                                </div>
                            })
                        }
                    </div>
                </div>
            </>
        );
    }
}
