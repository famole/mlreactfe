import React from 'react';
import { ITEMDESC, getCondition } from '../data/global_constants';
import classes from '../assets/styles/common.scss';
import RaisedButton from 'material-ui/RaisedButton';

const ItemDetail = ({
    id,
    image,
    amount,
    condition,
    sold_quantity,
    title,
    description
}) => {
    const condition_str = getCondition(condition) + " - " + sold_quantity + " vendidos";
    const price = "$ " + amount;
    const button_style = {
        marginTop: 32,
        marginRight: 32,
        width: '100%',
        textTransform: 'none'
    }
    
    return(
        <div className={classes.detail_container}>
            <div className={classes.detail_top_container}>
                <div className={classes.detail_top_img_container}>
                    <img src={image} />
                </div>
                <div className={classes.detail_top_info_container}>
                    <div style={{marginTop: 32, fontSize: 14}}>{condition_str}</div>
                    <div style={{marginTop: 16, fontSize: 24}}>{title}</div>
                    <div style={{marginTop: 32, fontSize: 46}}>{price}</div>
                    <RaisedButton primary={true} label="Comprar" style={button_style}></RaisedButton>
                </div>
            </div>
            <div className={classes.detail_desc_container}>
                <div style={{marginBottom: 32, fontSize: 28}}>{ITEMDESC}</div>
                <div style={{marginBottom: 32, marginRight: 32, fontSize: 16}}>{description}</div>
            </div>
        </div>
    );
}

ItemDetail.propTypes = {
    image: React.PropTypes.string,
    amount: React.PropTypes.number,
    condition: React.PropTypes.string,
    sold_quantity: React.PropTypes.number,
    title: React.PropTypes.string,
    description: React.PropTypes.string
};

export default ItemDetail;