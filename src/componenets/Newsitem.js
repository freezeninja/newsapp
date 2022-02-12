import React, { Component } from 'react';

export default class Newsitem extends Component {

    render() {
        let { title, desc, imgUrl, url } = this.props;
        return (
            <>
                <div className="card">
                    <img src={!imgUrl ? 'https://c.ndtvimg.com/2021-11/mbkmmj7_justin-langer-afp_625x300_07_November_21.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675' : imgUrl} className="card-img-top img-fluid" alt="crash-img" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}</p>
                        <div className="text-center">
                            <a href={url} target="_blank" className="btn btn-warning" rel="noreferrer">Visit actual site</a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
