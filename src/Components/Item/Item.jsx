import React from 'react'
import { Link } from 'react-router-dom';
import './Item.scss';

function Item({item}) {
  return (
    <li className="item">
      <Link to={`/posts/${item.id}`}>
        <div className="item__head">
            <span className="item__span">
              September 24.2020
            </span>
            <span className="item__span">
              Design theory
            </span>
        </div>
        <h1 className="item__title">
          {item.title}
        </h1>
        <span className='item__span'>  
            <i className='bx bx-time-five'></i>
            3 minutes read
        </span>
      </Link>
    </li>
  )
}

export default Item