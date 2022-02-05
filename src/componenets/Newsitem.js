import React, { Component } from 'react';

export default class Newsitem extends Component {

    render() {
        let {title, desc, imgUrl} = this.props;
        return (
            <>
                <div className="card">
                    <img src={imgUrl} className="card-img-top img-fluid"/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}</p>
                        <div className="text-center">
                            <a href="/" className="btn btn-primary">Read full article</a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
