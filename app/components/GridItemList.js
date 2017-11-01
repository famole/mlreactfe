import React from 'react';
import { white } from 'material-ui/styles/colors';
import { GridTile } from 'material-ui/GridList';
import { Card, CardText } from 'material-ui/Card';
import { goToItemDetail } from '../data/global_paths.js';
import classes from '../assets/styles/common.scss';
import { getCondition } from '../data/global_constants';

const GridItemList = ({
  id,
  price,
  image,
  condition,
  title,
  free_shipping,
  handleItemClick
}) => {
  const free_ship_class = free_shipping ? classes.free_shipping : '';
  const total_price = "$ " + price;
  return (
    <GridTile style={{cursor: 'pointer'}} onClick={(e) => { handleItemClick(id) }}>
      <Card style={{ backgroundColor: white }}>
        <CardText style={{ padding: 0}}>
          <div className={classes.list_item} >
            <div className={classes.image_container}>
              <img src={image}/>
            </div>
            <div className={classes.list_item_gral}>
              <div className={classes.list_price_container}>
                <div style={{fontSize: 24}}>{total_price}</div>
                <div className={free_ship_class} />
              </div>
              <div style={{marginTop: 32, fontSize: 18}}>{title}</div>
            </div>
            <div>
              <div className={classes.list_condition}>{getCondition(condition)}</div>
            </div>
          </div>
        </CardText>
      </Card>
    </GridTile>
  );
};

GridItemList.propTypes = {
  id: React.PropTypes.string,
  price: React.PropTypes.number,
  image: React.PropTypes.string,
  condition: React.PropTypes.string,
  title: React.PropTypes.string,
  isActive: React.PropTypes.bool
};

export default GridItemList;
