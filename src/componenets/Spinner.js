import React, { Component } from 'react';
import loader from '../img/loading.gif'

export default class Spinner extends Component {
    render() {
        return <div>
            <img src={loader} alt="loading"/>
        </div>;
    }
}
