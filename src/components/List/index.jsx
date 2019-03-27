import React from 'react';
import uniqid from 'uniqid';
import { Link } from 'react-router-dom';

import ListStyle from './style';

function List({ list }) {
  return (
    <ListStyle>
      {list &&
        list.map(item => (
          <Link className="item" to={item.link} key={uniqid()}>
            <img
              className="picture"
              src={item.picture}
              alt={item.description}
            />
            <h2 className="description">{item.description}</h2>
          </Link>
        ))}
    </ListStyle>
  );
}
export default List;
