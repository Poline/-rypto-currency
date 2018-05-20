import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getCurrencies } from '../../reducers/currencies';
import { changeSelectedCurrency } from '../../reducers/main';
import { getOrders } from '../../reducers/orders';

import Table from '../Table';
import './styles.scss';

class Main extends PureComponent {
  constructor(props) {
    super(props);

    this.changeSelectedCurrency = this.changeSelectedCurrency.bind(this);
    this.getOrders = this.getOrders.bind(this);
  }

  componentWillMount(event){
    this.props.getCurrencies();
  }

  componentWillUpdate(nextState){
    if (Object.keys(nextState.currencies).length > 0 && !nextState.selectedCurrency){
      this.props.changeSelectedCurrency(Object.keys(nextState.currencies)[0]);
    }
  }

  changeSelectedCurrency(event){
    this.props.changeSelectedCurrency(event.target.value);
  }

  getOrders(){
    this.props.getOrders(this.props.selectedCurrency);
  }

  render() {
    const { currencies, orders } = this.props;

    if (Object.keys(currencies).length === 0){
      return null;
    }
    
    return (
      <div className="main">
        <div className='main__title'> Select currency </div>

        <select onChange={this.changeSelectedCurrency}>
            {Object.keys(currencies).map((key) =>(
              <option key={currencies[key].name}>{key}</option>
            ))}
        </select>

        <button onClick={this.getOrders}> Get Orders </button>
          
        {orders.offers && orders.offers.length === 0 ?
          <div className='main__error-message'> There are not offers </div>
          : orders.offers &&
              <Table title='Offers' data={orders.demands} />
        }

        {orders.demands && orders.demands.length === 0 ?
          <div className='main__error-message'> There are not demands </div>
          : orders.demands &&
            <Table title='Demands' data={orders.demands} />
        }
        
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.currencies,
  selectedCurrency: state.main.selectedCurrency,
  orders: state.orders,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => {
    dispatch(getCurrencies());
  },
  changeSelectedCurrency: (selectedCurrency) => {
    dispatch(changeSelectedCurrency(selectedCurrency));
  },
  getOrders: (selectedCurrency) => {
    dispatch(getOrders(selectedCurrency));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
