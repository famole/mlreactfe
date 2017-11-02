import React from 'react';
import classes from '../assets/styles/common.scss'

const BreadCrumb = ({
    categories
  }) => {
    return (
        <div className={classes.bread_crumb}>
          {categories &&
            <div className={classes.bc_text_container}>
              {categories.map((category, i) => (
                  <div style={{display: 'flex'}}>
                  <div key={i} style={{marginRight: 10}}>{category}</div>
                  <div>
                    {categories.length !== i+1 &&
                      <div style={{height: '100%', width: 20}}>></div>
                    }
                  </div>
                  </div>
              ))}
             </div>
          }
        </div>
    );
  };
  
  BreadCrumb.propTypes = {
    categories: React.PropTypes.array
  };
  
  export default BreadCrumb;
  