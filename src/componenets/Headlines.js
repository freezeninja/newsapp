import React, { Component } from 'react';
import {NavLink, Outlet} from 'react-router-dom';

export default class Headlines extends Component {
  HeadlineArr = [
    {
      id: 0,
      toLink: '/top_headlines/',
      Name: 'General'
    },
    {
      id: 1,
      toLink: 'business',
      Name: 'Business'
    },
    {
      id: 2,
      toLink: 'entertainment',
      Name: 'Entertainment'
    },
    {
      id: 3,
      toLink: 'health',
      Name: 'Health'
    },
    {
      id: 4,
      toLink: 'science',
      Name: 'Science'
    },
    {
      id: 5,
      toLink: 'technology',
      Name: 'Technology'
    }
  ];
  
  render() {
    return <div>
      <div className="d-flex me-auto mt-4 pb-4 mb-lg-0 justify-content-around">
        {
          this.HeadlineArr.map((e)=>{
            return <div className="nav-item" key={e.id}>
            <NavLink className="headLines" key={e.id} exact="true" to={e.toLink}>{e.Name}</NavLink>
          </div>
          })
        }
      </div>
      <Outlet/>
    </div>;
  }
}