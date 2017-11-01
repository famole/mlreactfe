import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { fetch_item } from '../actions/search_actions';
import ItemDetailPresenter from '../components/ItemDetail';

class ItemDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            price: {
              currency: '',
              amount: null,
              decimals: null
            },
            picture: '',
            condition: '',
            sold_quantity: null,
            description: ''
        }
    }

    componentWillMount() {
		console.log(this.props.match.params.id);
		if (this.props.match.params.id) {
            this.props.get_item(this.props.match.params.id.trim());
        } else {
            //got to main
        }
    }
    
    componentWillReceiveProps(newProps) {
		if (newProps.item) {
            this.setState(newProps.item);
		}	
    }
    
    render() {
        return(
            <div>
                {
                this.state.id != '' &&
                <ItemDetailPresenter 
                    id={this.state.id}
                    image={this.state.picture}
                    amount={this.state.price.amount}
                    condition={this.state.condition}
                    sold_quantity={this.state.sold_quantity}
                    title={this.state.title}
                    description={this.state.description}
                    />
                }
            </div>
        );
    }
}

ItemDetail.propTypes = {
    id: React.PropTypes.string,
    get_item: React.PropTypes.func
  };

const mapStateToProps = (state) => ({
  item: state.items_state.current_item
});

const mapDispatchToProps = (dispatch) => ({
  get_item: (id) => {
    dispatch(fetch_item(id));
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ItemDetail));
