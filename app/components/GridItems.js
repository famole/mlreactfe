import React from 'react';
import { GridList } from 'material-ui/GridList';
import classes from '../assets/styles/common.scss';
import GridItemList from './GridItemList';
import BreadCrumb from './BreadCrumb';

const GridItems = ({
    items,
    breadcrumb,
    handleItemClick
}) => {
    console.log(items);
  return (
    <div style={{paddingBottom: 50}}>
        {items.length > 0 &&
            <div>
            <BreadCrumb categories={breadcrumb}/>
            <GridList padding={0} cols={1} cellHeight={221} >
                {items.map((item, i) => (
                    <GridItemList
                        key={item.id}
                        id={item.id}
                        price={item.price.amount}
                        image={item.picture}
                        title={item.title}
                        condition={item.condition}
                        free_shipping={item.free_shipping}
                        handleItemClick={handleItemClick}
                        />
                    ))}
            </GridList>
            </div>
        }
    </div>
  );
};

GridItems.propTypes = {
    items: React.PropTypes.array,
    breadcrumb: React.PropTypes.array,
    handleItemClick: React.PropTypes.func
};

export default GridItems;
