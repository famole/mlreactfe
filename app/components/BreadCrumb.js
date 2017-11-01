import React from 'react';
import classes from '../assets/styles/common.scss'

const BreadCrumb = ({
    categories
  }) => {
    return (
        <div className={classes.bread_crumb}>
             {categories.map((category, i) => (
                <span>{category.name}</span>
             ))}
        </div>
    );
  };
  
  BreadCrumb.propTypes = {
    categories: React.PropTypes.array
  };
  
  export default BreadCrumb;
  