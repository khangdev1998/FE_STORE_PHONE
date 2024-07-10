import React from 'react';
import arrowRight from '../../../../assets/images/arrow-right.svg'; 

const TitleWithLink = ({ title }) => {
  return (
    <div className="d-flex flex-sm-row flex-column justify-content-between align-items-center gap-2">
      <h2 className="title">{title}</h2>
      <a className="read-more" href="#!">
        Xem tất cả
        <img src={arrowRight} alt="this-is-icon" />
      </a>
    </div>
  );
};

export default TitleWithLink;
